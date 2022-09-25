import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSelectedProduct } from "../../redux/actions/selectedProductAction";

const ProductCard = ({ products, setSelectedProduct }) => {
  const renderList = products.map((item) => {
    const {
      id,
      title,
      image,
      price,
      description,
      category,
    } = item;

    return (
      <Link
        to={`/product/${id}`}
        key={id}
        onClick={() => setSelectedProduct(item)}
        className="group card lg:w-1/5 md:w-1/3 bg-base-800 shadow-xl justify-between"
      >
        <figure className="h-full">
          <img
            src={image}
            alt="Shoes"
            className="group-hover:scale-90 h-auto scale-75 transition duration-450 delay-100 ease-out hover:ease-in "
          />
        </figure>
        <div className="flex flex-col p-8">
          <p className="font-semibold">{title}</p>
          <p className="capitalize font-light text-sm text-slate-400">
            {category}
          </p>
          <div className="card-actions pt-4">
            <div className="badge badge-inline text-lg p-4">
              $ {price}
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {renderList}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedProduct: (product) =>
      dispatch(setSelectedProduct(product)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
