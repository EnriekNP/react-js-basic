const Greeting2 = ({ timeOfDay }) => {
    return timeOfDay === "morning" ? (<h1>Good morning!</h1>) : (<h1>Good afternoon!</h1>)
}

export default Greeting2