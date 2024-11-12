# Styling Components in React
React provides various ways to style components, including **inline styles**, **style objects**, and using **external libraries** like react-icons. Each approach has its unique benefits and a few gotchas to keep in mind.

---
## 1. Inline Styles
**Inline styles** apply CSS directly within a component, using the `style` attribute as a JavaScript object. This approach is `ideal for quick, unique styles that don’t need to be reused`.

#### Example:
```jsx
function InlineStyledComponent() {
  return (
    <div style={{ color: "blue", padding: "10px", borderRadius: "5px" }}>
      This is styled using inline styles.
    </div>
  );
}
```

#### Pros
- Quick and direct, useful for one-off styles.
- Dynamically computed based on props or state.
- Ideal for small, component-specific styles.
#### Gotchas
- **CamelCase Properties**: Use `camelCase` instead of CSS syntax (e.g., `backgroundColor` instead of `background-color`).
- **String Values**: Wrap non-numeric values (like colors or units) in quotes.
#### When to Use
- For dynamic styles based on state or props.
- Small-scale applications or isolated styles.

---

## 2. Style Objects
A **style object** allows CSS properties to be stored in a JavaScript object. This approach improves readability, especially for components with `repeated` or `complex styles`.

#### Example:
```jsx
function StyledWithObject() {
  const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
  };

  return (
    <div style={styles}>
      This component uses a style object.
    </div>
  );
}
```

#### Pros
- Makes styles reusable within the component.
- Keeps styling logic separated from JSX.
#### Gotchas
- Use camelCase for properties in the object.
- Avoid overly complex style objects in larger components for readability.
#### When to Use
- For reusable styles within the same component.
- When styling becomes too complex for inline styles but still needs to be scoped to the component.

---

## 3. CSS Modules
**CSS Modules** provide component-scoped styles, allowing you to `write traditional CSS in a separate file` while `avoiding global naming conflicts`.

#### Example:

1. Create a CSS file named `Component.module.css`:
   ```css
    .container {
        background-color: lightblue;
        padding: 20px;
        border-radius: 10px;
    }
   ```
2. Import and use the module in a React component:
   ```jsx
    import React from "react";
    import styles from "./Component.module.css";

    function CSSModuleComponent() {
        return <div className={styles.container}>Styled with CSS Module</div>;
    }
   ```
#### Pros
- Keeps styles scoped to the component.
- Prevents naming conflicts in large projects.
- Works seamlessly with tools like Webpack for efficient handling.
#### Gotchas
- Remember to use `.module.css` for the file name to enable scoping.
- Inconsistent behavior across environments without specific setup.
#### When to Use
- Ideal for large applications or teams working on many components.
- When you need CSS features like pseudo-classes (:hover) and media queries, and want to keep styles scoped to the component.


## 4. Using react-icons for Icon Styling
The `react-icons` **library** provides popular icons in React, allowing you to import and style them easily within your components.

#### Example:
```bash
npm install react-icons
```

```javascript
import { FaHome } from "react-icons/fa";

function IconComponent() {
  return <FaHome style={{ fontSize: "30px", color: "blue" }} />;
}
```

----


### Exercise: Styling Components in React

In this exercise, you'll learn how to apply styles using different methods in React components, including inline styles, style objects, and React icons.

#### Step 1: Create a `StyledCard` Component with Inline Styles

1. Create a new file called `StyledCard.jsx`.
2. Inside this file, create a functional component called `StyledCard`.
3. Use inline styles to style the component:

   - Set the background color to light blue.
   - Set padding to `20px`.
   - Set border radius to `10px`.
   - Set text color to dark blue.

4. Render a `<div>` with a title and description inside it.

#### Step 2: Create a `ProfileCard` Component with Separate Style Object

1. Create a new file called `ProfileCard.jsx`.
2. Inside this file, create a functional component called `ProfileCard`.
3. Define a `styles` object to hold the CSS properties:

   - Set the background color to light gray.
   - Set padding to `15px`.
   - Set border radius to `8px`.
   - Set text color to black.

4. Apply the `styles` object to the `<div>` using the `style` attribute.

5. Render a `<div>` with a title and description inside it.

#### Step 3: Create a `IconComponent` Using React Icons

1. Install `react-icons` if you haven’t already:

   ```bash
   npm install react-icons
   ```

2. Create a new file called `IconComponent.jsx`.
3. Inside this file, create a functional component called `IconComponent`.
4. Import an icon from `react-icons`, such as `FaBeer` from `react-icons/fa`.

5. Style the icon using inline styles:

   - Set the font size to `30px`.
   - Set the color to gold.

6. Render the icon with a title.

#### Step 4: Render All Components in `App.jsx`

1. In your `App.jsx` file, import the `StyledCard`, `ProfileCard`, and `IconComponent` components:

   ```jsx
   import StyledCard from "./StyledCard";
   import ProfileCard from "./ProfileCard";
   import IconComponent from "./IconComponent";
   ```

2. Inside the `App` component, render all three components:

   ```jsx
   function App() {
     return (
       <div>
         <StyledCard />
         <ProfileCard />
         <IconComponent />
       </div>
     );
   }

   export default App;
   ```