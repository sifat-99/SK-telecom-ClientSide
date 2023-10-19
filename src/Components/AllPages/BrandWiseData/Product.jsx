import PropTypes from "prop-types";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Product = ({ product }) => {
  const { user } = useContext(AuthContext);

  const userID = user.uid;
  const handleADDtoCart = () => {
    console.log("Add to cart clicked");
    const addToCartByUser = { products: product, userID };
    console.log(addToCartByUser);

    fetch(`http://localhost:5001/addProduct/Cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addToCartByUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
          <p>{product?.details}</p>
          <p>{product?.Price} $</p>
          <div className="card-actions justify-end">
            <button onClick={handleADDtoCart} className="btn btn-secondary">
              Add to Cart
            </button>
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
