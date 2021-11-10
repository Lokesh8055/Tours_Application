import { useQuery } from "react-query";

const useFetch = (props) => {
  const { name, fetchData } = props;
  return useQuery(name, fetchData);
};

export default useFetch;
