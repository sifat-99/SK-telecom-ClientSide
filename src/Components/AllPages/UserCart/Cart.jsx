import { useContext } from "react";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Cart = () => {

    const { user } = useContext(AuthContext);
    const userCart = useLoaderData();
    const filteredData = userCart.filter((item) => item.userID == user.uid);

    console.log(filteredData)

    return (
        <div>
            <h2>{filteredData[0].products.name}</h2>
        </div>
    );
};

export default Cart;