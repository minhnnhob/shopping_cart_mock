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
  return (
    <div>
      <h1>hehe</h1>
      <div>
        {data.map((product, index) => (
          <div>
            <p key={index}>{product.productName}</p>
            <p key={index}>{product.productName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
