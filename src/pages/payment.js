import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../components/header";
import { XHRpostData } from "../script/XHRpostData";
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


  window.addEventListener("load", function () {
  const wrapper = document.getElementById("paymentTable");
  wrapper.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    } else {
      const id = event.target.id;
       let action = event.target.innerText;
      
      if (action === "Delete") {
        deleteNode(id);
      }
    }
  });
  })
function deleteNode(id){
  let url="http://localhost/inventoryphp/deletePayment.php?id="+id
  XHRpostData(url)
  Display();
}

  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Payments", "Manage the store's payments")}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          
          <a href="/newPayment">New Payment</a>
        </button>
      </div>
      <div id="paymentTable">
        {tableData && <div dangerouslySetInnerHTML={{ __html: tableData }} />}
      </div>
    </div>
  );
};

export default Payment;
