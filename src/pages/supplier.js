import Header from "../components/header";
const supplier = () => {
  function loadXMLDoc(filename) {
    let xhttp;
    if (window.XMLHttpRequest) {
      xhttp = new XMLHttpRequest();
    } // code for IE5 and IE6
    else {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
  }
  const xmlDoc = loadXMLDoc("/data/supplier.xml");

  window.addEventListener("load", function () {
    Display();

    const wrapper = document.getElementById("main");
    wrapper.addEventListener("click", (event) => {
      const isButton = event.target.nodeName === "BUTTON";
      if (!isButton) {
        return;
      } else {
        const id = event.target.id;
        let action = event.target.innerText;
        if (action === "Delete") {
          deleteNode(id);
        } else if (action === "Update") {
          dispupdateNode(id);
        } else if (action === "Save") {
          updateNode(id);
        }
      }
    });
  });

  function deleteNode(id) {
    let element = xmlDoc.getElementsByTagName("Supplier");

    element[id].remove();
    Display();
  }

  function dispupdateNode(id) {
    let divUpdate = document.getElementById("updateElem");
    let x = xmlDoc.getElementsByTagName("Supplier");
    let short_code = x[id]
      .getElementsByTagName("short_code")[0]
      .getAttribute("code");
    let company_name =
      x[id].getElementsByTagName("company_name")[0].childNodes[0].nodeValue;
    let tel =
      x[id].getElementsByTagName("phone_number")[0].childNodes[0].nodeValue;
    let address =
      x[id].getElementsByTagName("address")[0].childNodes[0].nodeValue;

    //console.log(company_name)

    let s =
      `<input type='text' id='upshortCode' placeholder='Short Code' value=` +
      short_code +
      `>
    <input type='text' id='upcompanyName' placeholder='Company Name'value=` +
      company_name +
      ` />
    <input type='tel' id='uptel' placeholder='Phone Number' value=` +
      tel +
      `/>
    <input type='text' id='upaddress' placeholder='Address' value=` +
      address +
      `/>
    <button id=`+id+`>Save</button>`;
    divUpdate.innerHTML = s;
  }
  function updateNode(id) {
    let sc = document.getElementById("upshortCode").value;
    let cname = document.getElementById("upcompanyName").value;
    let pNum = document.getElementById("uptel").value;
    let addressVal = document.getElementById("upaddress").value;
    // let id = parseInt(num)
    let x = xmlDoc.getElementsByTagName("Supplier");
    //console.log(x);

   

    console.log(x[id])
     x[id].getElementsByTagName("short_code")[0].setAttribute("code", sc);
    x[id].getElementsByTagName("company_name")[0].childNodes[0].nodeValue =
      cname;
    x[id].getElementsByTagName("phone_number")[0].childNodes[0].nodeValue =
      pNum;
    x[id].getElementsByTagName("address")[0].childNodes[0].nodeValue =
      addressVal;
    Display();
    // console.log(sc);
    // console.log(cname);
    // console.log(pNum);
    // console.log(addressVal);
    document.getElementById("updateElem").innerHTML=""
  }

  function Display() {
    let table =
      "<table id='sTable'><tr><th>Short Code</th><th>Company Name</th><th>Phone Number</th><th>Address</th><th>Actions</th></tr>";
      let x = xmlDoc.getElementsByTagName("Supplier");
    console.log(x)
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
        "</td><td><button id='" +
        i +
        "'>Delete</button><button id='" +
        i +
        "'>Update</button></td></tr>";
      table += row;
    }
    table += "</table>";

    document.getElementById("supplierTable").innerHTML = table;
  }

  function add() {
    let sc = document.getElementById("shortCode").value;
    let cname = document.getElementById("companyName").value;
    let pNum = document.getElementById("tel").value;
    let addressVal = document.getElementById("address").value;

    // console.log(sc)
    // console.log(cname)
    // console.log(pNum)
    // console.log(address)

    let Supplier = xmlDoc.createElement("Supplier");
    let shortCode = xmlDoc.createElement("short_code");
    shortCode.setAttribute("code", sc);

    let cName_txt = xmlDoc.createTextNode(cname);
    let pNum_txt = xmlDoc.createTextNode(pNum);
    let address_txt = xmlDoc.createTextNode(addressVal);

    let companyName = xmlDoc.createElement("company_name");
    let phone = xmlDoc.createElement("phone_number");
    let address = xmlDoc.createElement("address");

    companyName.appendChild(cName_txt);
    phone.appendChild(pNum_txt);
    address.appendChild(address_txt);

    Supplier.append(shortCode);
    Supplier.append(companyName);
    Supplier.append(phone);
    Supplier.append(address);

    //console.log(xmlDoc);

    let x = xmlDoc.getElementsByTagName("Suppliers")[0];
    x.appendChild(Supplier);
    //console.log(x);
    Display();
    // let table =  document.getElementById("sTable")
    // let row = document.createElement("tr")

    // // Create cells
    // let c1 = document.createElement("td")
    // let c2 = document.createElement("td")
    // let c3 = document.createElement("td")
    // let c4 = document.createElement("td")

    // // Insert data to cells
    // c1.innerText = sc
    // c2.innerText = cname
    // c3.innerText = pNum
    // c4.innerText = addressVal

    // // Append cells to row
    // row.appendChild(c1);
    // row.appendChild(c2);
    // row.appendChild(c3);
    // row.appendChild(c4);

    // // Append row to table body
    // table.appendChild(row)
  }

  return (
    <div id="main">
      <div className="lg:flex lg:items-center lg:justify-between mx-20">
        {Header("Supplier", "Manage the store's suppliers")}
      </div>
      <div>
        <div id="supplierTable"></div>

        <div>
          <input type="text" id="shortCode" placeholder="Short Code" />
          <input type="text" id="companyName" placeholder="Company Name" />
          <input type="tel" id="tel" placeholder="Phone Number" />
          <input type="text" id="address" placeholder="Address" />
          <button onClick={add}>Add</button>
        </div>
        <div id="updateElem"></div>
      </div>
    </div>
  );
};

export default supplier;
