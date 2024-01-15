import { useEffect, useState } from "react";
import { GetAllProduct } from "../api/getAllProduct";
import { Product } from "../interface/interface";
import NavBar from "../../../components/NavBar";

export const ListLayout = () => {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await GetAllProduct();
      setData(result);
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <div>
          {data.map((product, index) => (
            <div>
              <p key={index}>{product.productName}</p>
              <p key={index}>{product.description}</p>
              <p key={index}>{product.description}</p>
           
              <img src="https://picsum.photos/200/300?grayscale" alt="" />
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
