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
    <div className="container__overwrite">
      <div className="">{Header("Product", "Manage the store's products")}</div>
      <div id="productTable">
        {tableData && <div dangerouslySetInnerHTML={{ __html: tableData }} />}
      </div>
    </div>
  );
};

export default Product;
