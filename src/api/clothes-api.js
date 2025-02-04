import axiosInstance from "../../axios/axiosinstance/axiosInstance"


export const fetchAllClothes =async()=>{
    const response= await axiosInstance.get("/Cloths/cloths");
    return response.data
}