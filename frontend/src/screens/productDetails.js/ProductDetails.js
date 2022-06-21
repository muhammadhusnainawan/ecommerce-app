import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../../components/rating/Rating";
import { detailsProduct } from "../../redux/actions/productAction";
import Loader from "../../components/shared/loader/Loader";
const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(navigate);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  const dispatch = useDispatch();
  const productDet = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDet;
  useEffect(() => {
    dispatch(detailsProduct(id));
  }, [dispatch, id]);
  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-left"></i>
        &nbsp; GO BACK
      </Link>
      {loading ? (
        <Loader />
      ) : (
        <div>
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
              {product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>
                    <Form.Control
                      as="select"
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => {
                        return (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        );
                      })}
                    </Form.Control>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Button
                  className="btn w-100"
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to cart
                </Button>
              </ListGroupItem>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
