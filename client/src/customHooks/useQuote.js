import useSWRImmutable from 'swr/immutable'

const fetcher = (url) => fetch(url).then((r) => r.json());
const QUOTABLE_ROUTE = "https://api.quotable.io/random";

const useQuote = () => {
  const { data, mutate } = useSWRImmutable(QUOTABLE_ROUTE, fetcher);
  return { quote: data, mutateQuote: mutate };
};

export default useQuote;
