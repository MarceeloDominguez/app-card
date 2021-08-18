import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    })();
  }, [url]);

  return { result, loading, error };
};

export default useFetch;
