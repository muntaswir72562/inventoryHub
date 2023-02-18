import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/header";
const Payment = () => {
const [tableData, setTableData] = useState("Loading");

  const Display = async () => {
    setTableData(
      await useFetch("http://localhost/inventoryphp/getPayment.php")
    );
  };

  useEffect(() => {
    Display();
  }, []);

  //useFetch()
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Payments", "Manage the store's invoice")}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          New Payment
          {/* <a href="">New invoice</a> */}
        </button>
      </div>
      <div id="paymentTable">
        {tableData && <div dangerouslySetInnerHTML={{ __html: tableData }} />}
      </div>
    </div>
  );
};

export default Payment;
