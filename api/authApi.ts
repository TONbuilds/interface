import axiosInstance from "./axiosInstance";

export const loginWithEmail = async (email: string) => {
  const response = await axiosInstance.post("/user/login", { email });
  return response.data;
};

export const verifyOtp = async (email: string, otp: string) => {
  const response = await axiosInstance.post("/user/verify-otp", { email, otp });
  return response.data;
};

export const googleLogin = async (tokenId: string) => {
  try {
    const response = await axiosInstance.post("/user/google-login", {
      tokenId,
    });
    console.log(response, "response login");

    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
