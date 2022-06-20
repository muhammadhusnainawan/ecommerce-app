import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Rating from "../../components/rating/Rating";
import { detailsProduct } from "../../redux/actions/productAction";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDet = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDet;
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch,id]);
  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left"></i>
        &nbsp; GO BACK
      </Link>
      <Row className="my-3">
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                rating={product.rating}
                reviews={`out of ${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>$ {product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className="btn w-100" type="button">
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};
export default ProductDetails;
