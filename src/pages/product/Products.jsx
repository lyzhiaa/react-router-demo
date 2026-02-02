import CardProductComponent from "../../components/cards/CardProductComponent";
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
    <div className="grid grid-cols-4 gap-5">
        {product.map(pro => (
            <CardProductComponent key={pro.id} image={pro.
thumbnail} title={pro.title} price={pro.price} id={pro.id}/>
        ))}
    </div>
  )
}
