import { useEffect, useState } from "react";

const useNewFetch = (url) => {
  const [data, setData] = useState(null);
  const [pending, isPending] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        isPending(false);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, pending };
};

export default useNewFetch;
