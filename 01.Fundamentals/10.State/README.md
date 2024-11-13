# React State: A Guide
In React, **state** is a powerful feature that allows components to `manage` and `respond to data changes dynamically`. Using state effectively is key to building interactive, responsive user interfaces.

## 1. What is State?
- **State** is an object that `holds data representing the current status or condition` of a component.
- Unlike **props** (which are passed down from parent components and are read-only), **state is local and fully managed within the component**.
- When a component’s state changes, React **re-renders** the component to reflect the updated state in the UI.

---

## 2. How State Works
When a state update occurs, React **automatically re-renders** the component. This is because state represents dynamic data that could change due to user interactions, network requests, etc.

### Key Points:
- **State Initialization**: State is initialized with a value when the component mounts (i.e., loads for the first time).
- **State Update**: Use React’s updater function to change state. `Never modify state directly` as it can lead to unexpected behavior and bypass React’s update cycle.

---

## 3. Using the `useState` Hook
In modern React, functional components use the `useState` hook to manage state. This hook returns two elements:

- The **current state value**.
- A **function to update the state value**.
### Syntax

```javascript
const [stateVariable, setStateFunction] = useState(initialValue);
```
- `stateVariable`: Holds the current state value (e.g., `count`).
- `setStateFunction`: The function used to update the state value. (e.g., `setCount`).
- `initialValue`: The initial value of the state (e.g., `0`, `""`, or `{}`).

### Example
Here’s an example of a simple counter component using `useState`:

```javascript
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
```
In this example:

- `count` is the current state, initialized to `0`.
- `setCount` is the function used to update `count`.
- Clicking the `+` or `-` button updates count, triggering a `re-render` to show the new value.

---

## 4. Updating State
React batches state updates to optimize performance. Therefore, **always use the updater function** provided by `useState` to modify the state.

#### Correct vs. Incorrect Updates

```javascript
// Correct way to update state
setCount(count + 1);

// Incorrect - this will not trigger a re-render
count = count + 1;
```

> ⚠️ **Tip**: **Never modify a state variable directly**, as this can **lead to unexpected behavior** and **prevent React from re-rendering the component**.  
> **Always use the provided setter function** (e.g., `setCount`) to update state. This **ensures** that React knows the state has changed and can **update the UI correctly**.


## 5. Common Patterns with State
### a. Conditional Rendering
State is often used for conditions, such as toggling UI elements on or off:

```javascript
const [isVisible, setIsVisible] = useState(true);

return (
  <div>
    {isVisible && <p>This text is visible!</p>}
    <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
  </div>
);
```
### b. Derived State
Use state variables to compute other values directly in the render function:

```javascript
const [price, setPrice] = useState(100);
const tax = price * 0.1; // Derived value
```
### c. Complex State (Objects and Arrays)
When updating complex state (e.g., `objects`), use a function within `setState` to `avoid overwriting existing properties unintentionally`.

```javascript
const [user, setUser] = useState({ name: "Alice", age: 25 });

setUser((prevUser) => ({ ...prevUser, age: 26 })); // Only update the age
```
## 6. State in Functional vs. Class Components

| Functional Components               | Class Components                    |
|-------------------------------------|-------------------------------------|
| Use the `useState` hook             | Use `this.state` and `this.setState` |
| Recommended for modern React projects | Common in older React applications   |

> 💡 **Note**: Hooks like `useState` are not available in class components, which use `this.state` and `this.setState` instead.


# React State Exercises

Here are five exercises I have completed that demonstrate how to manage state in React using the `useState` hook.

---

## Exercise 1: Counter Component

In this exercise, I built a simple counter component that increases or decreases a `count` value based on button clicks.

[View the Counter Component Code](./Counter.jsx)

### What I Learned:
- **Using `useState`** to manage simple state in functional components.
- **State manipulation** using setter functions (like `setCount`) to update the state.
- **Handling events** with buttons to trigger state changes.

---

## Exercise 2: Friends List Component

In this exercise, I created a list of friends with functionality to add, remove, and update friends in the list using `useState`.

[View the Friends List Component Code](./FriendsList.jsx)

### What I Learned:
- **Managing arrays in state** by using methods like `map`, `filter`, and the spread operator.
- **State updates for arrays**—how to add, remove, and update items in an array in React.
- **Dynamic list rendering** with the `map()` function to display the friends.

---
## Exercise 3: Movie Card Component

This exercise demonstrates updating properties within an object stored in state. Specifically, the `movie` object contains a `title` and `ratings`, and I am updating the ratings when the button is clicked.

[View the Movie Card Component Code](./MovieCard.jsx)

### What I Learned:
- **State updates for objects**: Use spread syntax (`...movie`) to copy the current object and update specific properties (like `ratings`).
- **Handling object state**: This approach ensures that the existing properties are not mutated but replaced by a new object with updated properties.

---
## Exercise 4: Update Specific Item in an Array of Objects

In this exercise, I created a list of movies with their titles and ratings, and used React's `useState` to manage the list. The goal was to update the title of a specific movie when the button is clicked.****

[View the Movie List Component Code](./MovieList.jsx)

### What I Learned:
- **Updating specific items in an array**: I used `map()` to iterate over the `movies` array and updated the movie with `id === 1` by changing its title property.
- **Spreading objects correctly**: Used the spread operator (`...movie`) to preserve the rest of the properties of the `movie` object while updating the `title`.
- **Using unique keys in lists**: The `key` prop is set to `movie.id` to **ensure** that **each** list **item** is **uniquely identifiable**, which helps React **efficiently re-render** the component.

---
## Exercise 5: Passing State and Functions to Child Components

In this exercise, I created a parent component (`ComponentParent`) that manages a `count` state and passes it down, along with a function to update the state, to two child components (`ComponentOne` and `ComponentTwo`). Each child component displays the current `count` and provides a button to increment the `count`.


[View the Component Parent Code](./ComponentParent.jsx)
[View the Component One Code](./ComponentOne.jsx)
[View the Component Two Code](./ComponentTwo.jsx)

### What I Learned:
- **State Management in Parent**: I used the `useState` hook in the parent component (`ComponentParent`) to manage the `count` state. This state is **shared with both child components**.
- **Passing Props**: The state and state-updating function (`onClickHandler`) are passed down to both child components as props.
- **Event Handling**: Both child components have a button that triggers the `onClickHandler` to update the `count` state when clicked.
- **Component Reusability**: The same logic for incrementing the `count` is reused in both `ComponentOne` and `ComponentTwo`, demonstrating how the same state and handler can be passed to different components.

---