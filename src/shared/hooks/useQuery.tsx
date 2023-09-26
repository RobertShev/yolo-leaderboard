import { useSearchParams } from 'react-router-dom';

const useQuery = () => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const setQueryParam = (key: string, value: string) => {
    const newQueryParameters: URLSearchParams = new URLSearchParams();
    newQueryParameters.set(key, value);
    setSearchParams(newQueryParameters);
  };
  const clearQueryParam = () => setSearchParams('');

  const getQueryParam = (parameterKey: string) =>
    currentQueryParameters.get(parameterKey);

  return {
    setQueryParam,
    clearQueryParam,
    getQueryParam,
    currentQueryParameters,
  };
};

export default useQuery;
