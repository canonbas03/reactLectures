import { useEffect, useState } from "react";

export default function useFetch<T>(fetchFn: () => Promise<T>, initialState: T) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchedData, setFetchData] = useState<T>(initialState);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
        setIsFetching(false);
      } catch (error) {
        if (error instanceof Error) setError(error.message || "Failed to fetch data.");
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    setFetchData,
    isFetching,
    error,
    setError,
  };
}
