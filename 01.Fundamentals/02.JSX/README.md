# JSX
## What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript commonly used in React to describe what the UI should look like. JSX allows you to write HTML-like code directly within JavaScript, making it easier to visualize the structure of the UI components.

---

## Why Use JSX?
- Readable Syntax: JSX looks similar to HTML, which makes it easier to read and understand the structure of the UI, especially for those familiar with HTML.
- JavaScript Power: Since JSX is just syntactic sugar for JavaScript, you can embed JavaScript expressions directly within the JSX using {} curly braces. This makes it easy to display dynamic data and create interactive UIs.
- Built for React: JSX is optimized for React and transforms into standard JavaScript (using tools like Babel), so browsers can understand it.

--- 

### Exercise

In this exercise, you will practice writing basic JSX code and rendering it in a React app.

#### Step 1: Create a New Component

1. Create a new file called `WelcomeMessage.jsx`.
2. Inside this file, write a functional component called `WelcomeMessage`.
3. The component should return a `<div>` that contains:
   - A `<h1>` element that displays the message: `"Hello, World!"`
   - A `<p>` element that displays the message: `"Welcome to learning JSX!"`

#### Step 2: Render the Component in App.jsx

1. Open the `App.jsx` file.
2. Import the `WelcomeMessage` component at the top of the file:
3. Inside the `App` component's return statement, render the

#### Step 3: Run the Application

1. Run the app in your development environment.
2. You should see the `"Hello, World!"` message along with `"Welcome to learning JSX!"` displayed in your browser.