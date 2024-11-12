# Using Props in React Components

**Props** (short for "properties") allow components to receive data from their parent components, making them dynamic and reusable. Think of props as **arguments** passed into a component, similar to function arguments. They help customize the component’s behavior and appearance.

## Key Points About Props

1. **Immutable**: Props cannot be changed by the child component, ensuring data flows from parent to child.
2. **Reusable**: Components can display different data each time they’re used, making them flexible.
3. **Dynamic**: Props can pass various data types (strings, numbers, objects, functions) to components.

Props are accessed using `props.propertyName` in the child component.

## Example

### Parent Component (`App`)

```jsx
const App = () => {
  return (
    <User
      img="https://avatars.githubusercontent.com/u/85052811?v=4"
      name="HuXn WebDev"
      age={18}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};
```
Here, the `App` component passes values to the `User` component through props. The `User` component then uses props to  display the data.

### Child Component (`User`)
```jsx
const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is married: {props.isMarried ? "Yes" : "No"}</h3>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </section>
  );
};

```
In the `User` component, props are accessed through `props.propertyName`, where `propertyName` corresponds to the `name` of the prop that was passed from the parent component. 


### How to Improve the Example

1. **Destructuring Props**: You can simplify the `User` component by **destructuring the props** directly in the function signature. This reduces redundancy and makes the code more readable.

```jsx
const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried ? "Yes" : "No"}</h3>
      <h4>Hobbies: {hobbies.join(", ")}</h4>
    </section>
  );
};
```
2. **Default Props**: To ensure that your component behaves predictably even if some props are not passed, you can set default values.
```jsx
User.defaultProps = {
  img: "https://default-avatar.com/default.jpg",
  name: "Unknown User",
  age: 30,
  isMarried: false,
  hobbies: ["No hobbies listed"]
};
```
In addition to individual props like `name` and `age`, React provides a special prop called `children`.

### The children Prop
The `children` prop in React is a special prop that allows components to receive and display any content passed between the component's opening and closing tags. This feature is helpful when you want to create **wrapper components**, which can contain any content such as text, other components, or HTML elements. 

Think of the `children` prop as a placeholder for anything you put inside the component's tags when you use it. This can be anything from a simple text string to complex JSX content.

#### How It Works

When a component is used, and there’s content placed between its opening and closing tags, React automatically assigns that content to the `children` prop. You can then access and render that content inside your component.

For example, if you have a `Panel` component that acts as a container, you can use the `children` prop to display whatever content is passed into it:

```jsx
// Panel.jsx
const Panel = ({ children }) => {
  return (
    <section className="panel">
      {children}
    </section>
  );
};

export default Panel;
```
### Using Panel in a Parent Component
```jsx
// App.jsx
import Panel from './Panel';

const App = () => {
  return (
    <div>
      <Panel>
        <h2>Panel Title</h2>
        <p>This content is passed as `children` to the Panel component.</p>
      </Panel>
    </div>
  );
};

export default App;
```
In this example:

- The content between the `<Panel></Panel>` tags, which is a `<h2>` and `<p>`, is passed as the `children` prop to the `Panel` component.
- Inside the `Panel` component, we render `{children}` to display the content that was passed.

This way, `children` allows you to create flexible components that can wrap any type of content, making it easy to build reusable layouts or containers.

## Exercise
### Using Props in React Components

In this exercise, you will learn how to pass and use props in React components to make them dynamic and reusable.

#### Step 1: Create a `Person` Component

1. Create a new file called `Person.jsx`.
2. Inside this file, create a functional component called `Person`.
3. This component should accept `props` and render:

   - A `<h2>` element that displays the person's name.
   - A `<p>` element that displays the person's age.

4. Use `props.name` and `props.age` to display the dynamic values passed from the parent component.

#### Step 2: Create a `Product` Component

1. Create a new file called `Product.jsx`.
2. Inside this file, create a functional component called `Product`.
3. This component should accept `props` and render:

   - A `<h2>` element that displays the product's name.
   - A `<p>` element that displays the product's price.

4. Use `props.name` and `props.price` to display the values passed from the parent component.

#### Step 3: Create a `Employee` Component Using `Destructuring` method

1. Create a new component called `Employee`.
2. Use destructuring to extract `name`, `position`, and `salary` props from the `props` object.
3. Render the employee's name, position, and salary inside `<h2>`, `<p>`, and `<span>` elements.


#### Step 4: Create a `Card` Component that is using `children` Prop

1. Create a new file called `Card.jsx`.
2. Inside this file, define the `Card` component to accept the `children` prop.
3. Render `children` inside a `<section>` element.
4. Use the `Card` component in the `App` component to pass content like headings, paragraphs, or any other JSX elements inside the `Card`.

#### Step 5: Pass Props from `App.jsx`

1. In your `App.jsx` file, import the `Person` , `Product` , `Employee` and `Card` components:

   ```jsx
   import Person from "./Person";
   import Product from "./Product";
   import Employee from "./Employee";
   import Card from "./Card";
   ```

2. Inside the `App` component, pass dynamic data as props to both `Person` , `Product` and `Employee` components:
   - Pass `name` and `age` as props to the `Person` component.
   - Pass `name` and `price` as props to the `Product` component.
   - Pass `name` , `position` and `salary` as props to the `Employee` component.
   - Pass `<h1>` and `<p>` as a content inside the `Card` component


