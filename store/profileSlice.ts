import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile, completeUserProfile } from "@/api/api";

interface UserProfile {
  email: string;
  name?: string;
  profilePic?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  status: "active" | "inactive";
  details?: {
    location?: string;
    tonWalletAddress?: string;
    skills?: string[];
    subSkills?: string[];
    projects?: {
      name: string;
      description: string;
      skills: string[];
      subSkills: string[];
      url: string;
    }[];
  };
  company?: {
    name?: string;
    userName?: string;
    website?: string;
    twitter?: string;
    entityName?: string;
    logo?: string;
    industry?: string[];
    bio?: string;
  };
  socialAccounts?: {
    type: string;
    url: string;
  }[];
  isBlacklisted?: boolean;
}

interface ProfileState {
  profile: UserProfile | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  status: "idle",
  error: null,
};

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserProfile();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch profile"
      );
    }
  }
);

export const completeProfile = createAsyncThunk(
  "profile/completeProfile",
  async (profileData: UserProfile, { rejectWithValue }) => {
    try {
      const data = await completeUserProfile(profileData);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(completeProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(completeProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(completeProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default profileSlice.reducer;
