import Header from "../../components/header";
import { postData } from "../../script/postData";
const newPayment = () => {
  function sendData(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById("newPayment"));
    postData("http://localhost/inventoryphp/newPayment.php", formData).then(
      (data) => {
        console.log(data);
      }
    );
  }
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Add New Payments", "Manage the store's new payments")}
      </div>
      <div>
        <form name="newPayment" id="newPayment">
          <label>date</label>
          <input type="date" id="date" name="date" />
          <br />
          <label>supplier name</label>
          <input type="text" id="sName" name="sName" />
          <br />
          <label>mobile</label>
          <input type="text" id="mobile" name="mobile" />
          <br />
          <label>email</label>
          <input type="email" id="email" name="email" />
          <br />
          <label>invoice</label>
          <input type="text" id="inv" name="inv" />
          <br />
          <label>amount</label>
          <input type="number" id="amount" name="amount" />
          <br />
          <label>status</label>
          <input type="text" id="sts" name="sts" />
          <br />
          <label>method</label>
          <input type="text" id="method" name="method" />
          <br />
          <button id="btn" onClick={sendData}>
            Add New Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default newPayment;
