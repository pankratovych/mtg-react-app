import useSWR from "swr";
import axios from "axios";


// function fetcher(url: string, header: Headers) {
//   return fetch(url, {
//     headers: header,
//   }).then((response) => response.json());
// }
const fetcher = (url: string) => axios.get(url).then(res => res.data)
export default fetcher;


export const FetchData = (token: string) => {
    
  const { data, error, isLoading } = useSWR(`http://localhost:4000/${token}`, fetcher);
   
  return {data , error, isLoading}
}