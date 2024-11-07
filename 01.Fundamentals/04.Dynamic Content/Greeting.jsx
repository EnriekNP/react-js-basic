const Greeting = () => {
    const name = "John";
    const currentDate = new Date().toLocaleDateString();
    return (
        <div>
            <h1>{name}</h1>
            <p>{currentDate}</p>
        </div>
    )
}

export default Greeting