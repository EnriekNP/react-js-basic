const MouseOverText = () => {
    function moveHandler() {
        alert("Mouse Move Event Fired");
        console.log("Mouse Move Event Fired");
    }

    return (
        <p onMouseOver={moveHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
            laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
            eveniet voluptates suscipit.
        </p>
    );
};