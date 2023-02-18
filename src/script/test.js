import { useEffect } from "react";

const Payment = () => {
  const getName = async () => {
    const response = await fetch("http://localhost/inventoryphp/test.php", {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    var data = await response.json();

    console.log("get", data);
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-type': 'multipart/form-data'
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const postName = async () => {
    postData("http://localhost/inventoryphp/result.php", {
      answer: 42,
      name: "test",
    }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    // const response = await fetch("http://localhost/inventoryphp/result.php", {
    //   method: "POST",
    //   headers: {
    //     "access-control-allow-origin": "*",
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     "name": "Umar",
    //     "age": "30"
    // }),
    // });
    // var data = await response.json();

    // console.log("post", data);
  };

  useEffect(() => {
    getName();
    postName();
  }, []);

  return <></>;
};

export default Payment;
