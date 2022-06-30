import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.trips);
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
  // return unica informação
};

export default useRequestData;