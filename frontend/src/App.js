import "./App.css";
import Footer from "../src/components/footer/Footer";
import Header from "./components/header/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/home/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./screens/productDetails.js/ProductDetails";
import CartScreen from "./screens/cartScreen/CartScreen";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="app">
          <Container className="my-3">
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/cart/:id" element={<CartScreen />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
