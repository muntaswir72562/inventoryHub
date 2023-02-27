import Header from "../../components/header";
import { postData } from "../../script/postData";
const newPayment = () => {
  function sendData(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById("newPayment"));

    postData("http://localhost/inventoryphp/newPayment.php", formData).then(
      (data) => {
        displayResult(data);
      }
    );
  }

  function displayResult(data) {
    let div = document.getElementById("result");
    if (data == "ok") {
      div.innerHTML = "<h2 color='green'>data sucessfully inserted</h2>";
    } else {
      div.innerHTML = "<h2 color='red'>" + data + "</h2>";
    }
  }
  return (
    <div className="container__overwrite">
      <div>{Header("Add New Payments", "Manage the store's new payments")}</div>
      <div>
        <form name="newPayment" id="newPayment" className="payment__form">
          <input type="date" id="date" name="date" />
          <br />
          <input
            type="text"
            id="sName"
            name="sName"
            placeholder="Supplier Name"
          />
          <br />
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Mobile Number"
          />
          <br />
          <input type="email" id="email" name="email" placeholder="Email" />
          <br />
          <input type="text" id="inv" name="inv" placeholder="Invoice" />
          <br />
          <input type="number" id="amount" name="amount" placeholder="Amount" />
          <br />
          <input type="text" id="sts" name="sts" placeholder="Status" />
          <br />
          <input type="text" id="method" name="method" placeholder="Method" />
          <br />
          <button
            className="w-full mt-5 p-3 text-[#1F7A8C]"
            id="btn"
            onClick={sendData}
          >
            Add New Payment
          </button>
        </form>
      </div>
      <div id="result"></div>
    </div>
  );
};

export default newPayment;
