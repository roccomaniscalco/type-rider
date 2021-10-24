import useSWRImmutable from "swr/immutable";

const GET = (url) => fetch(url).then((res) => res.json());
const QUOTABLE_ROUTE = "https://api.quotable.io/random";

const useQuote = () => {
  const { data, mutate } = useSWRImmutable(QUOTABLE_ROUTE, GET);
  return { quote: data, mutateQuote: mutate };
};

export default useQuote;
