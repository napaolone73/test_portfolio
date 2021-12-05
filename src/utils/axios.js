import axios from 'axios';
import { Config } from 'src/Constants';
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: Config.api_url
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
      Promise.reject(
        (error.response && error.response.data) || error.message ||  'Something went wrong'
      )
  }  
);

export default axiosInstance;
