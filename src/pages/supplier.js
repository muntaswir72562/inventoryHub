const supplier = () => {
  //document.addEventListener("DOMContentLoaded", function() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      display(this);
    }
  };
  xhttp.open("GET", "/data/supplier.xml", true);
  xhttp.send();
  function display(xml) {
    let xmlDoc = xml.responseXML;
    console.log(xmlDoc);
    let table =
      "<table><tr><th>Short Code</th><th>Company Name</th><th>Phone Number</th><th>Address</th></tr>";

    let x = xmlDoc.getElementsByTagName("Supplier");
    //console.log(x[0].getElementsByTagName("address")[0].childNodes[0].nodeValue)
    for (let i = 0; i < x.length; i++) {
      let s =
        "<tr><td>" +x[i].getElementsByTagName("short_code")[0].getAttribute("code") +"</td>" +
        "<td>" +x[i].getElementsByTagName("company_name")[0].childNodes[0].nodeValue +"</td>" +
        "<td>" + x[i].getElementsByTagName("phone_number")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + x[i].getElementsByTagName("address")[0].childNodes[0].nodeValue + "</td></tr>";
        table+=s
    }
    table += "</table>";
    document.getElementById("supplierTable").innerHTML = table;
  }
  //})
  return <div id="supplierTable"></div>;
};

export default supplier;
