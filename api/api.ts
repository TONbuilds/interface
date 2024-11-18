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
  const response = await axiosInstance.post("/user/profile", profileData);
  return response.data;
};

export const fetchAllBounties = async () => {
  const response = await axiosInstance.get("/post/posts");
  return response.data;
};

export const fetchBountyDetails = async (bountyId: string) => {
  const response = await axiosInstance.get(`/post/post/${bountyId}`);
  return response.data;
};
export const createSubmission = async (postId: string, submissionData: any) => {
  try {
    const response = await axiosInstance.post(
      `post/submission/${postId}`,
      submissionData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
