import axiosInstance from "../../axios/axiosinstance/axiosInstance";

export const fetchDeleveryBoy = async (pageNo,pagesize,search) => {
  const response = await axiosInstance.get(`/Admin/users/delivery?SearchTerm=${search}&PageSize=${pagesize}&pageNo=${pageNo}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userData")}`, 
    },
  });

  return response.data;
};

export const deleveryBoyBlockOrUnblock = async (id) => {
  const response = await axiosInstance.patch(
    `/Admin/delivery/block-unblock/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userData")}`, 
      },
    }
  );
  return response.data;
};
export const addDeleveryBoy = async (values) => {
  const response = await axiosInstance.post(`/Admin/add/Delivery`, values,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userData")}`, 
    },
  });
  
  return response.data;
};

export const deleteDeleveryBoy = async (id) => {
  console.log(id);
  const response = await axiosInstance.delete(`/Admin/delete/delivery?id=${id}`,{
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userData")}`, 
    },
  });
  return response.data;
};

