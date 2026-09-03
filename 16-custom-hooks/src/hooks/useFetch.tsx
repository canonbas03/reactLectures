import { useEffect, useState } from "react";

export default function useFetch<T>(fetchFn: () => Promise<T>, initialState: T) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<T>(initialState);
  const [error, setError] = useState<string>("");

  function handleErrorState() {
    setError("");
  }
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchedData(data);
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
    setFetchedData,
    isFetching,
    error,
    handleErrorState,
  };
}
