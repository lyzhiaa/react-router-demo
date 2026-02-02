import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import getProductData from "../../utils/products/GetData";
import { CardProductDetailsComponent } from "../../components/cards/CardProductDetailsComponent";

export default function ProductDetails() {
  // navigate
  const navigate = useNavigate();
  // for store data
  const [productDetails, setProductDetails] = useState({});
  const { id } = useParams();
  console.log("id :", id);

  useEffect(() => {
    async function getData() {
      const data = await getProductData(`products/${id}`);
      setProductDetails(data);
      console.log("data : ", data);
    }
    getData();
  }, [id]);
  return (
    // <div className='text-5xl text-amber-400'>This is the details of product: {id}</div>
    <div className="grid place-content-center h-screen">
      {/* back button */}
      <button onClick={() => navigate("/products")} className="text-start text-cyan-500 underline text-lg">back</button>
      <div>
        {
          <CardProductDetailsComponent
            image={productDetails.thumbnail}
            title={productDetails.title}
            description={productDetails.description}
          />
        }
      </div>
    </div>
  );
}
