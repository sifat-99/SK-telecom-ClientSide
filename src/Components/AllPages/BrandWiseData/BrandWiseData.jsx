import { useEffect, useState } from "react";
import { useLoaderData, useParams,  } from "react-router-dom";
import Product from "./Product";
// import Banner from "../HomePage/Banner";
import BrandWiseBanner from "./BrandWiseBanner";


const BrandWiseData = () => {

    const data = useLoaderData();
    const params = useParams();
    const [brand, setBrand] = useState([]);

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const filteredData = data.filter((brand) => brand.id == params.id);
        setBrand(filteredData[0]);
    }
    , [data,params.id])

    useEffect(() => {
        fetch('http://localhost:5001/products')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                const filteredData = data.filter((product) => product.Brand == brand.brandName);
                setFilteredData(filteredData);
            });
    }
    ,[brand])

    // console.log(filteredData);
  
    return (
        
        <div className="mt-28 grid gap-6">
            <div className="w-7/12 h-2/4 mx-auto mb-20">
            <BrandWiseBanner filteredData={filteredData}></BrandWiseBanner>
            </div>
            {
                filteredData.map((product) => (
                    <Product key={product._id} product ={product}></Product>
                ))
            }
        </div>
    );
};

export default BrandWiseData;