import React from "react";
import {Link} from "react-router-dom"
import { Card } from "react-bootstrap";
const ProductScreen = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
              {product.rating} from {product.numReviews} Reviews
            </div>
          </Card.Text>
          <Link to={`/product/${product._id}`}>
          <Card.Text>${product.price}</Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductScreen;
