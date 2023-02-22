import Header from "../../components/header";
const newSupplier = () => {
  function sendData(e) {
    e.preventDefault();

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/data/supplier.xml", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        write(this);
      }
    };
    function write(xml) {
      let xmlDoc = xml.responseXML;
      //console.log(data)
      let newPerson = xmlDoc.createElement("person");
      newPerson.setAttribute("name", "Bob");
      newPerson.setAttribute("age", "35");

      // Add the new person element to the root element
      //xmlDoc.getElementsByTagName("root")[0].appendChild(newPerson);
      

      // Save the updated XML file
      let serializer = new XMLSerializer();
      let xmlString = serializer.serializeToString(xmlDoc);
      let fs = new ActiveXObject("Scripting.FileSystemObject");
      let file = fs.CreateTextFile("data.xml", true);
      file.writeLine(xmlString);
      file.close();
    }
  }
  return (
    <>
      <div>
        <div className="lg:flex lg:items-center lg:justify-between mx-20">
          {Header("Add new supplier", "Manage the store's invoice")}
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
          New Invoice */}
          {/* <a href="">New invoice</a> */}
          {/* </button> */}
        </div>
        <div>
          <form name="newSupplier" id="newSupplier">
            <label>firstName</label>
            <input type="text" id="fName" />
            <br />
            <label>lastName</label>
            <input type="text" id="lName" />
            <br />
            <label>DOB</label>
            <input type="date" id="dob" />
            <br />
            <label>email</label>
            <input type="email" id="email" />
            <br />
            <label>phone number</label>
            <input type="tel" id="tel" />
            <br />
            <label>brn</label>
            <input type="text" id="brn" />
            <br />
            <label>Company name</label>
            <input type="text" id="cName" />
            <br />
            <label>address</label>
            <input type="text" id="address" />
            <br />
            <label>vat</label>
            <input type="text" id="vat" />
            <br />
            <label>vatable</label>
            <input type="text" id="vatable" />
            <br />
            <label>payment term</label>
            <input type="text" id="term" />
            <br />
            <button onClick={sendData}>Add New Supplier</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default newSupplier;
