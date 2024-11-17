import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import bountyReducer from "./bountySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  bounties: bountyReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
