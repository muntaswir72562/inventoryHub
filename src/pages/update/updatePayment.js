import { getXHRData } from "../../script/XHRgetData";
import { useEffect } from "react";
import { postData } from "../../script/postData";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
const UpdatePayment = () => {
  let { id } = useParams();

  let url = "http://localhost/inventoryphp/getPayment.php?id=" + id;

  useEffect(() => {
    getXHRData(url, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        const data = JSON.parse(response);
        // console.log(data.var1)
        document.getElementById("date").value = data[0][0];
        document.getElementById("sName").value = data[1][0];
        document.getElementById("mobile").value = data[2][0];
        document.getElementById("email").value = data[3][0];
        document.getElementById("inv").value = data[4][0];
        document.getElementById("amount").value = data[5][0];
        document.getElementById("sts").value = data[6][0];
        document.getElementById("method").value = data[7][0];
        //console.log(data[0])
      }
    });
  });
  function sendData(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById("updatePayment"));
    formData.append("id", id);
    postData("http://localhost/inventoryphp/updatePayment.php", formData).then(
      (data) => {
        displayResult(data);
      }
    );
  }

  function displayResult(data) {
    let div = document.getElementById("result");
    if (data === "ok") {
      div.innerHTML = "<h2 color='green'>data sucessfully updated</h2>";
    } else {
      div.innerHTML = "<h2 color='red'>" + data + "</h2>";
    }
  }
  return (
    <div className="container__overwrite">
      <div>
        <div>{Header("Update Payments", "Manage the store's payments")}</div>
        <div>
          <form
            name="updatePayment"
            id="updatePayment"
            className="updatePayment__form"
          >
            <label>date</label>
            <input type="date" id="date" name="date" placeholder="Date" />
            <br />
            <label>supplier name</label>
            <input type="text" id="sName" name="sName" />
            <br />
            <label>mobile</label>
            <input type="tel" id="mobile" name="mobile" />
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
              Update Payment
            </button>
          </form>
        </div>
        <div id="result"></div>
      </div>
    </div>
  );
};

export default UpdatePayment;
