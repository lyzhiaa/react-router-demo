import { Link } from "react-router";
import getProductData from "../../utils/products/GetData";
import { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function responseData() {
      const productData = await getProductData("products");
      setProduct(productData.products);
      console.log("product data : ", productData);
    }
    responseData();
  }, []);

  return (
    <div>
        {product.map(pro => (
            <h1 key={pro.id}>{pro.title}</h1>
        ))}
    </div>
  )
}
