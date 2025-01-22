
import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://belvoir-rest-api.onrender.com/api"
})

axiosInstance.interceptors.request.use(
   (request) => {
     const token = localStorage.getItem("userData");
     if (token) {
       request.headers["Authorization"] = `Bearer ${token}`;
       console.log(token);
       
     }
     return request;
   },
   (error) => {
     return Promise.reject(error);
   }
 );

 axiosInstance.interceptors.response.use((response) => {
    return response
 },(error) => {
    return Promise.reject(error);
 })


 export default axiosInstance;