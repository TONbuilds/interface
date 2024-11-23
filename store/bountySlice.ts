import { fetchAllBounties, fetchBountyDetails } from "@/api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Company {
  name: string;
  logo: string;
}

interface BountyDetails {
  title: string;
  description: string;
  prize: number;
  endDate: string;
  status: "active" | "inactive";
}

interface Bounty {
  _id: string;
  userId: { _id: string; name?: string; emailId?: string };
  company: Company;
  bounty: BountyDetails;
  type: "bounty" | "task";
  __v: number;
}

interface BountyState {
  bounties: Bounty[];
  selectedBounty: Bounty | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BountyState = {
  bounties: [],
  selectedBounty: null,
  status: "idle",
  error: null,
};

export const fetchBounties = createAsyncThunk(
  "bounties/fetchBounties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllBounties();
      console.log("response", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bounties"
      );
    }
  }
);

export const fetchBountyDetailsThunk = createAsyncThunk(
  "bounties/fetchBountyDetails",
  async (bountyId: string, { rejectWithValue }) => {
    try {
      const response = await fetchBountyDetails(bountyId);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch bounty details"
      );
    }
  }
);

const bountySlice = createSlice({
  name: "bounties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBounties.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBounties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bounties = action.payload;
      })
      .addCase(fetchBounties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      .addCase(fetchBountyDetailsThunk.pending, (state) => {
        state.status = "loading";
        state.selectedBounty = null;
      })
      .addCase(fetchBountyDetailsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedBounty = action.payload;
      })
      .addCase(fetchBountyDetailsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default bountySlice.reducer;
