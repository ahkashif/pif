import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PagePropertiesState {
	pageTheme: string;
}

const initialState: PagePropertiesState = { pageTheme: "light" };

const pagePropertiesSlice = createSlice({
	name: "pageProperties",
	initialState,
	reducers: {
		changeTheme: (state, action: PayloadAction<PagePropertiesState>) => {
			state.pageTheme = action.payload.pageTheme;
		},
	},
});

export const { changeTheme } = pagePropertiesSlice.actions;
export default pagePropertiesSlice.reducer;
