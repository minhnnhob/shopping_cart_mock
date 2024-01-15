import { useEffect, useState } from "react";
import { GetAllProduct, Product } from "../api/getAllProduct";


export const ListLayout = () => {
    const [data, setData] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await GetAllProduct();
            setData(result);
        };

        fetchData();
    }, []);
    return(
        <div>
            <h1>hehe</h1>
           <div>
            {data.map((product, index) => (
                <p key={index}>{product.productName}</p>
            ))}
        </div>
        </div>
      
    );
}

// import React, { useEffect, useState } from 'react';
// import { GetAllProduct } from "../api/getAllProduct";

// export const ListLayout = () => {
//     const [data, setData] = useState<Product[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await GetAllProduct();
//             setData(result);
//         };

//         fetchData();
//     }, []);

//     return (
//         <p>{data}</p>
//     );
// }