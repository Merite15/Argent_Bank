import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userState, initialState } from '../utils/types/User';

export const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRemember: (state: userState, action: PayloadAction<boolean>) => {
            state.remember = action.payload;
        },

        logout: (state: any) => {
            state.token = "";
            state.firstName = "";
            state.lastName = "";
        },

        setToken: (state: userState, action: PayloadAction<string>) => {
            state.token += action.payload;
        },
    },
});

export const { logout, setToken, setRemember } = auth.actions;

export default auth.reducer;