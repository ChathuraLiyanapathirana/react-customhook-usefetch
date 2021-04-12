import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (loadOnMount = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const loadData = async (
    method = "GET",
    requestParam = null,
    bodyParam = null
  ) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: method,
        params: requestParam,
        data: bodyParam
      });
      setData(response.data);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (loadOnMount) loadData();
  }, []);

  return { data, isLoading, errorMessage, loadData };
};

export default useFetch;
