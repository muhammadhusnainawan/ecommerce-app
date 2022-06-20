import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "../products/ProductScreen";
import Loader from "../../components/shared/loader/Loader";
import Message from "../../components/shared/alert/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log("products in home scree",products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product, index) => (
            <Col key={index} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default HomeScreen;
