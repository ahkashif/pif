import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetailsState {
	username: string;
	email: string;
}

const initialState: UserDetailsState = { username: "", email: "" };

const userDetailsSlice = createSlice({
	name: "userDetails",
	initialState,
	reducers: {
		updateUserDetails: (state, action: PayloadAction<UserDetailsState>) => {
			state.username = action.payload.username;
			state.email = action.payload.email;
		},
	},
});

export const { updateUserDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
