// Example 1
const Button = () => {
    // const handleClick = () => console.log("You Clicked Me");
    const handleClick = () => console.log(Math.round(Math.random() * 10));
    return <button onClick={handleClick}>Click</button>;
};