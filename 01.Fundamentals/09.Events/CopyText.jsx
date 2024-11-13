const CopyText = () => {
    function copyHandler() {
        console.log("Hello World I'm Back!!!");
    }

    return (
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatibus libero, eius odit modi doloremque quos magni tempora. Debitis
            laborum exercitationem perferendis. Veritatis fuga, quod quasi accusamus
            eveniet voluptates suscipit.
        </p>
    );
};