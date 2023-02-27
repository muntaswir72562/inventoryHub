import Header from "../components/header";
import { postData } from "../script/postData";

const ToBuy = () => {
  function sendData(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById("todo__form"));

    postData("http://localhost/inventoryphp/tobuy.php", formData).then(
      (data) => {
        console.log(data);
        displayResult(data);
      }
    );
  }

  function displayResult(data) {
    let div = document.getElementById("result");
    if (data === "ok") {
      div.innerHTML = "<h2 color='green'>data sucessfully inserted</h2>";
    } else {
      div.innerHTML = "<h2 color='red'>" + data + "</h2>";
    }
  }
  return (
    <section className="container__overwrite">
      <div>{Header("To-Buy", "Add future purchase")}</div>
      <div className="todo___container"></div>
      <form
        name="todo__form"
        id="todo__form"
        className="flex justify-center m-5"
      >
        <input type="text" name="title" id="title" placeholder="Title" />
        <input type="number" name="price" id="price" placeholder="Price" />
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Quantity"
        />
        <button onClick={sendData} id="addBtn">
          Add
        </button>
      </form>
      <div id="result"></div>
    </section>
  );
};

export default ToBuy;
