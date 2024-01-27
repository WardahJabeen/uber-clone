import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
    }
});

//kind of like setters
export const { setOrigin, setTravelTimeInfo, setDestination } = navSlice.actions;

// selectors //kind of like getters
export const selectOrigin = (state) => state.navSlice.origin;
export const selectDestination = (state) => state.navSlice.destination;
export const selectTravelTimeInfo = (state) => state.navSlice.travelTimeInfo;

export default navSlice.reducer;
