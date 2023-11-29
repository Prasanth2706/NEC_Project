import { useQuery } from "react-query";

const fetchHomeDetails = async () => {
  const response = await fetch('http://localhost:5000/login');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useData = () => {
  return useQuery('home data', fetchHomeDetails);
};

export default useData;
