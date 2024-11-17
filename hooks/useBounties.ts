import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { fetchBounties, fetchBountyDetailsThunk } from "@/store/bountySlice";

export const useBounties = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bountyState = useSelector((state: RootState) => state.bounties);

  const handleFetchBounties = () => dispatch(fetchBounties());
  const handleFetchBountyDetails = (bountyId: string) =>
    dispatch(fetchBountyDetailsThunk(bountyId));

  return {
    ...bountyState,
    handleFetchBounties,
    handleFetchBountyDetails,
    selectedBounty: bountyState.selectedBounty,
  };
};
