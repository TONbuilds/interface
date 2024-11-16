import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchProfile, completeProfile } from "../store/profileSlice";

export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profileState = useSelector((state: RootState) => state.profile);

  const handleFetchProfile = () => dispatch(fetchProfile());
  const handleCompleteProfile = (profileData: any) =>
    dispatch(completeProfile(profileData)).unwrap();

  return {
    ...profileState,
    handleFetchProfile,
    handleCompleteProfile,
  };
};
