import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + productId)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [productId]);


    return (
        <div className="display">
            <h1>{product.title} </h1>
            <img src={product.image} alt={product.title} style={{ width: "300px" }} />
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </div>
    );
}
export default ProductDetails;
