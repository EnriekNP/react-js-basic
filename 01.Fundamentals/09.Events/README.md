# Event Handling in React
## 1. What is Event Handling?
In React, **event handling** refers to the process of `handling user interactions` with elements in the user interface (UI) of your application. These interactions can be clicking a button, moving the mouse, copying text, or other user actions. React uses `synthetic events` to handle these events `efficiently` and `consistently` across different browsers.

## 2. Synthetic Events in React
React uses `synthetic events`, which are JavaScript objects that wrap around the native DOM events. These synthetic events `provide compatibility across browsers` and `offer a consistent API` for handling events.

For example, in plain JavaScript, we write events as `onclick` or `onmouseover` in HTML or JavaScript, but in React, we use **camelCase** for event names such as `onClick` or `onMouseOver`.

### 3. Using Event Handlers
An event handler is a function that is called when a specific event occurs. These events can be attached to DOM elements, such as a button, paragraph, or input.

##### General Syntax of Event Handler in React:
```jsx
<button onClick={handleClick}>Click Me</button>
```
In the example above:
- `onClick` is the React event handler that is triggered when the button is clicked.
- `handleClick` is the function that will be executed when the `onClick` event occurs.

## 4. Types of Events in React
There are many types of events that can be handled in React, such as:
- **Mouse Events**: `onClick`, `onMouseOver`, `onMouseOut`, `onMouseMove`
- **Keyboard Events**: `onKeyPress`, `onKeyUp`, `onKeyDown`
- **Focus Events**: `onFocus`, `onBlur`
- **Clipboard Events**: `onCopy`, `onPaste`, `onCut`
- etc
## 5. Event Handling in React:
In React, events are handled in a different way compared to regular JavaScript:

- **camelCase** is used for event names (e.g., `onClick` instead of `onclick`).
- Event handlers are normal JavaScript functions defined within the React component.
- Event handlers are attached directly to JSX elements using **JSX attributes** (e.g., `onClick={handleClick}`).

### Notes on Handling Functions in React Event Handlers:
- **Passing Functions Correctly**: When attaching event handlers in React (e.g., `onClick`), you should **pass the function**, not call it directly. This allows React to invoke the function when the event actually occurs (e.g., when the button is clicked). For example:

```jsx
<button onClick={handleClick}>Click Me</button>
```
This way, React remembers the `handleClick` function and only calls it when the button is clicked.

- **Avoid Immediate Function Calls**: If you add parentheses after the function name, it will execute the function immediately during the rendering phase. For example:

```jsx
<button onClick={handleClick()}>Click Me</button>
```
This is incorrect because `handleClick` is called during rendering, not on the actual click event.

- **Inline Functions**: If you want to use an inline function, such as an `anonymous function` that triggers an action, you should define it as follows:

```jsx
<button onClick={() => alert('You clicked me!')}>Click Me</button>
```
This passes an anonymous function that only executes the `alert()` when the button is clicked, instead of executing immediately during rendering.

Link: [React Docs For Responding To Event](https://react.dev/learn/responding-to-events)

## Exercise: Handling Events in React
In this exercise, you will practice handling various events in React, including `onClick`, `onCopy`, and `onMouseOver`. You will learn how to trigger functions based on user interactions and how to pass functions to event handlers correctly.

#### Step 1: Create a `Button` Component
1. Create a new file called `Button.jsx`.
2. Inside this file, create a functional component called `Button`.
3. In the component, create a function called `handleClick` that logs a random number between **0 and 10** to the console. You can use `Math.round(Math.random() * 10)` for this.
4. Add a `<button>` element inside the component with an `onClick` event handler that triggers `handleClick`.

#### Step 2: Create a `CopyText` Component
- Create a new file called `CopyText.jsx`.
- Inside this file, create a functional component called `CopyText`.
- In the component, create a function called `copyHandler` that logs a message to the console: `"Hello World I'm Back!!!"`
- Add a `<p>` element with some text and an `onCopy` event handler that triggers `copyHandler`.

#### Step 3: Create a `MouseOverText` Component
- Create a new file called `MouseOverText`.jsx.
- Inside this file, create a functional component called `MouseOverText`.
- In the component, create a function called `moveHandler` that shows an alert with the message `"Mouse Move Event Fired"` and logs this message to the console.
- Add a `<p>` element with some text and an `onMouseOver` event handler that triggers `moveHandler`.

#### Step 4: Render the Components in `App.jsx`
1.  In your `App.jsx` file, import the components `Button`, `CopyText`, and `MouseOverText`.
```jsx
import Button from "./Button";
import CopyText from "./CopyText";
import MouseOverText from "./MouseOverText";
```
2. Inside the `App` component's return statement, render the `Button`, `CopyText`, and `MouseOverText` components:
```jsx
function App() {
  return (
    <div>
      <Button />
      <CopyText />
      <MouseOverText />
    </div>
  );
}

export default App;
```