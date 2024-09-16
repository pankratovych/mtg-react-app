import useSWR from "swr";
import axios from "axios";


// function fetcher(url: string) {
//   return fetch(url, {
//   }).then((response) => response.json());
//  }
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const FetchData = (token: string) => {
    
  const { data, error } = useSWR(`http://localhost:4000/${token}`, fetcher);
   
  return {data , error}
}