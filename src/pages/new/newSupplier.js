import Header from "../../components/header";
const newSupplier = () => {

    function sendData(){
        let formData = new FormData(document.getElementById("newSupplier"))
        console.log(formData)
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
          <form
            name="newSupplier"
            id="newSupplier"
            action="newSupplier.php"
            method="POST"
          >
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
