import axios from "axios"
import { useEffect, useState } from "react"
import "../Styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ColorSchemesExample from "../components/navbar"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Product from "./Product"

function Homepage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log("homepage api called")
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log("homepage data:", res.data);
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        < Container>
            <ColorSchemesExample />
            <h1>Product List</h1>
            <Row>
                {products.map((product) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price} />
                    </Col>)
                )}
            </Row>
        </Container>);
}
export default Homepage;