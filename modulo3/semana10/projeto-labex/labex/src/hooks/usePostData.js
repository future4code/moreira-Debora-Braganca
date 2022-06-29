import { useEffect, useState } from "react";
import axios from "axios";

const usePostData = (url, body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const postData = () => {
    setIsLoading(true);
    axios
      .post(url, body)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    postData();
  }, [url]);

  return [isLoading, error];
  // return unica informação
};

export default usePostData;