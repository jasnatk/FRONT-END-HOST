import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"

export function Product(props) {

    return (
        <Card >
            <Card.Img variant="top" src={props.image} alt={props.title}
                style={{ height: "300px", width: "100%", objectFit: "contain" }} />
            <Card.Body>
                <Card.Title>{props.title} </Card.Title>
                <Card.Text>${props.price}</Card.Text>
                <a href={"/product-details/" + props.id}>
                    <Button variant="primary" >View Details</Button>
                </a>
                <Button variant="warning">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}
export default Product;