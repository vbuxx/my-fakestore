import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../../redux/actions/cartAction";
import { setSelectedProduct } from "../../../redux/actions/selectedProductAction";
import Container from "../../sub-components/Container";

const ProductDetail = ({
  products,
  selectedProduct,
  addItem,
  setSelectedProduct,
}) => {
  const { productId } = useParams();

  if (selectedProduct == null) {
    const selected = products.find(
      (item) => item.id == productId
    );
    setSelectedProduct(selected);
    return <div>Loading</div>;
  } else {
    return (
      <>
        <Container>
          <div className="flex my-8 p-8 gap-8 shadow-xl rounded-xl">
            <figure className="w-2/3">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="scale-75 mx-auto"
              />
            </figure>
            <div className="wrapper flex flex-col w-1/3">
              <div>
                <strong className="text-xl">
                  {selectedProduct.title}
                </strong>
                <p className="text-gray-500">
                  Category:{" "}
                  <span className="capitalize">
                    {selectedProduct.category}
                  </span>
                </p>
              </div>
              <p className="mt-4">
                {selectedProduct.description}
              </p>

              <div className="stat flex mt-4 w-auto ">
                <div className="stat-value p-4 text-black">
                  ${selectedProduct.price}
                </div>
                <div
                  className="my-auto rounded-xl shadow-xl bg-orange-500 px-6 py-4 hover:opacity-80"
                  onClick={() =>
                    addItem(selectedProduct.id)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="35.93"
                    height="32"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    selectedProduct: state.selectedProduct.selectedProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    setSelectedProduct: (product) =>
      dispatch(setSelectedProduct(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
