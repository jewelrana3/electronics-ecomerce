
import axios from 'axios';


const axiosSecure = axios.create({
    baseURL: 'https://electronics-server-nine.vercel.app',
  });
const useAxiosSecure = () => {
   
  return [axiosSecure];
};

export default useAxiosSecure;
