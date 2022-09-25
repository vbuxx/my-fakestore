import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "../../redux/actions/productAction";
import Container from "../sub-components/Container";
import ProductCard from "./ProductCard";

const Products = ({ products, setProducts }) => {
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <Container>
      <ProductCard />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) =>
      dispatch(setProducts(products)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
