import "../style/card.css";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/header";
const Product = () => {

    const [tableData, setTableData] = useState("Loading");

    const Display = async () => {
      setTableData(
        await useFetch("http://localhost/inventoryphp/getProduct.php")
      );
    };
  
    useEffect(() => {
      Display();
    }, []);


    return (  
        <div>
        <div className="lg:flex lg:items-center lg:justify-between mx-20">
          {Header("Product", "Manage the store's products")}
        </div>
        <div id="productTable">
        {tableData && <div dangerouslySetInnerHTML={{ __html: tableData }} />}
        </div>
      </div>
     );
}
 
export default Product;