import PropTypes from "prop-types";
import swal from "sweetalert";
// import { useState } from 'react';

const SingleCard = ({ product, remainingProduct }) => {
  // console.log(product)

  const handleDelete = (id) => {
    // console.log(id)

    fetch(`http://localhost:5001/Cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)

        if (data.deletedCount > 0) {
          swal("Congratulation!", "Product Deleted Successfully", "success");
        }
        remainingProduct(id);
      });
  };

  const handleBUY = () => {
    swal("Congratulation!", "This Product is yours", "success");
  };

  return (
    <div>
      <h2>{product.length}</h2>
      <div className="card lg:card-side border bg-base-100 shadow-xl">
        <figure>
          <img className="w-[320px]" src={product?.photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.Price} $</p>
          <div className="card-actions justify-end">
            <button  onClick={handleBUY} className="btn btn-secondary">Buy</button>
            <button
              onClick={() => handleDelete(product._id)}
              className="btn btn-primary"
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleCard.propTypes = {
  product: PropTypes.object.isRequired,
  remainingProduct: PropTypes.func.isRequired,
};

export default SingleCard;
