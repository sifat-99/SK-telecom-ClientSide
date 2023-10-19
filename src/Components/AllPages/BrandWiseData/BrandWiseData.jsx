import { useEffect, useState } from "react";
import { useLoaderData, useParams,  } from "react-router-dom";


const BrandWiseData = () => {

    const data = useLoaderData();
    const params = useParams();
    // console.log(data,params)
    
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
                console.log(data);
                const filteredData = data.filter((product) => product.Brand == brand.brandName);
                setFilteredData(filteredData);
            });
    }
    , [brand.brandName])

    console.log(filteredData);
  
    return (
        <div>
            <h2>{typeof(params.id)}</h2>
        </div>
    );
};

export default BrandWiseData;