import { useEffect, useState } from "react";

const useFetch = (url) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return data;
    });
};

export default useFetch;
