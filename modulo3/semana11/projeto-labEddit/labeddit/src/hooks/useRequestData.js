import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url, headers) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    getData();
  }, [url]);

  return [data, isLoading, error];
};

export default useRequestData;