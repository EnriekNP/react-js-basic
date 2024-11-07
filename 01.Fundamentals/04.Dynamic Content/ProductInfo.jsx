const ProductInfo = () => {
    const product = {
        name: "Computer",
        price: 1500,
        availability: "In Stock",
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p>{product.availability}</p>
        </div>
    )
}

export default ProductInfo