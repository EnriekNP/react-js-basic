# Using Dynamic Content with `{}` in JSX

In React, JSX allows you to mix HTML-like syntax with JavaScript. To insert dynamic data (like variables or expressions) into JSX, we use curly braces `{}`. This allows you to render data, perform calculations, and call functions directly within your components.

## Dynamic Content with `{}` in JSX

In JSX, `{}` is used to include JavaScript expressions, such as variables, calculations, object properties, and function calls. Here are some examples:

1. **Displaying Variables**: Use `{}` to render the value of a variable.

   ```jsx
   const name = "John";
   return <h1>Hello, {name}!</h1>; // Displays: Hello, John!
    ```

2. **Using JavaScript Expressions**: `{}` lets you perform calculations.

    ```jsx
    return <p>2 + 2 = {2 + 2}</p>; // Displays: 2 + 2 = 4
    ```
3. **Accessing Object Properties**: You can display object properties with `{}`.

    ```jsx
    const product = { name: "Laptop", price: "$1200" };
    return <p>{product.name} costs {product.price}</p>;
    ```

4. **Calling Functions or Inline Calculations**: You can call functions or perform inline calculations.

    ```jsx
    const getCurrentDate = () => new Date().toDateString();
    return <p>Today's date is {getCurrentDate()}</p>;
    ```

### Exercise: Using Dynamic Content with `{}` in JSX

In this exercise, you'll learn how to inject dynamic data into JSX using curly braces `{}`.

#### Step 1: Create a `Greeting` Component

1. Create a new file called `Greeting.jsx`.
2. Inside this file, create a functional component named `Greeting`.
3. The `Greeting` component should return a `<div>` containing:

   - A `<h1>` element that dynamically displays a greeting message.
   - A `<p>` element that dynamically displays the current date.

4. Use JavaScript expressions inside `{}` to dynamically render the following:
   - A `name` variable containing a name, such as `"John"`.
   - A `new Date()` object to display the current date.

#### Step 2: Create a `ProductInfo` Component

1. Create a new file called `ProductInfo.jsx`.
2. Inside this file, create a functional component named `ProductInfo`.
3. The `ProductInfo` component should return a `<div>` that dynamically displays product details:

   - Use a `product` object that contains the following properties:
     - `name`: `"Laptop"`,
     - `price`: `$1200`,
     - `availability`: `"In stock"`

4. Display the product name, price, and availability using `{}`.

#### Step 3: Render Components in `App.jsx`

1. In your `App.jsx` file, import the `Greeting` and `ProductInfo` components:

   ```jsx
   import Greeting from "./Greeting";
   import ProductInfo from "./ProductInfo";
   ```

2. Inside the `App` component's return statement, render both components:

   ```jsx
   function App() {
     return (
       <div>
         <Greeting />
         <ProductInfo />
       </div>
     );
   }

   export default App;
   ```

## Summary
- `{}` **in JSX**: `{}` is used to insert JavaScript expressions into JSX.
- **Dynamic Components**: `Greeting` and `ProductInfo` components use `{}` to render dynamic content based on variables and object properties.
- **Reusability**: Each component is modular, making it easy to use them in different parts of an app.
This approach to dynamic content makes components adaptable and interactive, allowing them to update based on data and user interaction.