
import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://server-ecomerce.vercel.app',
  });
const useAxiosSecure = () => {
   
  return [axiosSecure];
};

export default useAxiosSecure;
