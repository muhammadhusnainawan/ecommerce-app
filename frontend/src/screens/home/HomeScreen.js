import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productAction";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "../products/ProductScreen";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  const Products = [];
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
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
