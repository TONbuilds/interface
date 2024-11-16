import axiosInstance from "./axiosInstance";

export const uploadMedia = async (formData: FormData) => {
  const response = await axiosInstance.post("/media/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const fetchUserProfile = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};

export const completeUserProfile = async (profileData: any) => {
  const response = await axiosInstance.post(
    "/user/complete-profile",
    profileData
  );
  return response.data;
};
