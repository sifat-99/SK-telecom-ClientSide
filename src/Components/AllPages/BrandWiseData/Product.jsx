import PropTypes from "prop-types";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { useContext } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
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
            <Link to={`/id/${product?._id}`} ><button className="btn btn-secondary">
              Details
            </button>
            </Link>
            <Link to={`/update/${product?._id}`}><button className="btn btn-primary">Update</button></Link>
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