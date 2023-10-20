import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";


const ProductDetails = () => {

    const {_id} = useParams();
    // console.log(_id);
    const { user } = useContext(AuthContext);
    const userID = user.uid;
    // console.log(user)
    const products = useLoaderData();
    const [product, setProduct] = useState([]);

    // console.log(products);

    useEffect(() => {
        const filteredData = products.filter((product) => product._id == _id);
        setProduct(filteredData[0]);
    }
    , [products,_id])

    // console.log(product)
    const {Brand,Price,category,details,name,photo,quantity} = product;
    const addToCartByUser = { Brand,Price,category,details,name,photo,quantity,userID };

    const handleADDtoCart = () => {
        // console.log("Add to cart clicked");
        
        // console.log(addToCartByUser);
    
        fetch(`https://server-side-assignment10.vercel.app/addProduct/Cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(addToCartByUser),
        })
          .then((res) => res.json())
          .then(() => {
            // console.log(data);
            swal("Congratulation!", "Product added to your Cart", "success");
          });
        };

    return (
        <div className="mt-20">
      <div className="card h-[70vh]  border bg-base-100 shadow-xl">
        <figure>
          <img className="w-full p-4 lg:px-32" src={product?.photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl">{product?.name}</h2>
          <h2>{product?.Brand}</h2>
          <p className="text-2xl text-green-400">Price: {product?.Price} $</p>
          <p className=" text-justify text-red-400 text-2xl">{product?.details}</p>
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

export default ProductDetails;