import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import Products from "./components/Products/Products";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/product/:productId"
          element={<ProductDetail />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
