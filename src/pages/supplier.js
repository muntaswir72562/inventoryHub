import Header from "../components/header";

const supplier = () => {
  //document.addEventListener("DOMContentLoaded", function() {

  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/data/supplier.xml", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      display(this);
      response(this);
    }
  };
 console.log(response)
  function display(xml) {
    let xmlDoc = xml.responseXML;
    //console.log(xmlDoc);
    let table =
      "<table><tr><th>Short Code</th><th>Company Name</th><th>Phone Number</th><th>Address</th><th>Actions</th></tr>";

    let x = xmlDoc.getElementsByTagName("Supplier");
    for (let i = 0; i < x.length; i++) {
      let row =
        "<tr><td>" +
        x[i].getElementsByTagName("short_code")[0].getAttribute("code") +
        "</td>" +
        "<td>" +
        x[i].getElementsByTagName("company_name")[0].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        x[i].getElementsByTagName("phone_number")[0].childNodes[0].nodeValue +
        "</td>" +
        "<td>" +
        x[i].getElementsByTagName("address")[0].childNodes[0].nodeValue +
        "</td></tr>";
      table += row;
    }
    table += "</table>";
    //document.getElementById("supplierTable").innerHTML = table;
    document.getElementById("supplierTable").innerHTML=table;
  }

  
  return (
    <div>
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Supplier", "Manage the store's suppliers")}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          New Supplier
          {/* <a href="">New invoice</a> */}
        </button>
      </div>
      <div>
      <div id="supplierTable"></div>
      <div>

      <input type="text" id="shortCode" placeholder="Short Code"/>
      <input type="text" id="companyName" placeholder="Company Name"/>
      <input type="tel" id="tel" placeholder="Phone Number"/>
      <input type="text" id="address" placeholder="Address"/>
      {/* <button onClick={add}>Add</button> */}
      </div>
      </div>
    </div>
  );
};

export default supplier;
