const Product = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Product