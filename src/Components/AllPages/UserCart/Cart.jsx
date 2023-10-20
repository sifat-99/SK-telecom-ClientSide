import { useContext, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import SingleCard from "./SingleCard";


const Cart = () => {

    const { user } = useContext(AuthContext);
    const userCart = useLoaderData();
    const [allCartProduct, setAllCartProduct] = useState(userCart);
    const filteredData = allCartProduct.filter((item) => item.userID == user.uid);

    // console.log(filteredData)
    const remainingProduct = (id) =>
    {
        // console.log(id);
        const remainingProduct = allCartProduct.filter((item) => item._id != id);
        setAllCartProduct(remainingProduct);
    }
    return (
        <div className="grid gap-6 mt-20">
            {/* <h2>{filteredData.length}</h2> */}

            {
                allCartProduct.length ?
                filteredData.map((product) => (
                    <SingleCard key={product._id} product ={product} remainingProduct={remainingProduct}></SingleCard>
                ))
                :
                <h2 className="text-center text-black mt-32 text-4xl md:text-6xl bg-orange-400 border rounded-2xl p-12 mx-12">You have no product in your cart</h2>
            }
        </div>
    );
};

export default Cart;