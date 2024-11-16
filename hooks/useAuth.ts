import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { emailLogin, logout, otpVerification } from "../store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector((state: RootState) => state.auth);

  const handleEmailLogin = (email: string) => dispatch(emailLogin(email));
  const handleOtpVerification = (email: string, otp: string) =>
    dispatch(otpVerification({ email, otp })).unwrap();
  const handleLogout = () => dispatch(logout());

  return {
    ...authState,
    handleEmailLogin,
    handleOtpVerification,
    handleLogout,
  };
};
