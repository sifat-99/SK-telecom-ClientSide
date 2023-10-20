import PropTypes from "prop-types";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const avaivality = product.quantity > 0 ? "In Stock" : "Out of Stock";

  return (
    <div>
      <div className="card lg:card-side border bg-base-100 shadow-xl">
        <figure>
          <img className="w-[320px] h-full" src={product?.photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.category}</p>
          <p>{product?.Price} $</p>
          <p>{product?.quantity}</p>
          {avaivality}
          <div>
          <p>Ratings:</p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/id/${product?._id}`}>
              <button className="btn btn-secondary">Details</button>
            </Link>
            <Link to={`/update/${product?._id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

// onClick={() =>handleUpdate(product._id)}
