import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userState, initialState } from '../types/User';

export const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRemember: (state: userState, action: PayloadAction<boolean>) => {
            state.remember = action.payload;
        },

        setToken: (state: userState, action: PayloadAction<string>) => {
            state.token += action.payload;
        },
    },
});

export const {  setToken, setRemember } = auth.actions;

export default auth.reducer;