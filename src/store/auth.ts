import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userState } from '@/utils/types/User';

const initialState: userState = {
    token: "",
    email: "",
    remember: false,
    firstName: "",
    lastName: "",
};

export const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /* The `setRemember` function is a reducer action that is used to update the `remember` property
        of the state. It takes two arguments: `state` and `action`. */
        setRemember: (state: userState, action: PayloadAction<boolean>) => {
            state.remember = action.payload;
        },

        /* The `logout` function is a reducer action that is used to update the state when a user logs out. It
        takes the current state as an argument and sets the `token`, `firstName`, and `lastName` properties
        of the state to empty strings, effectively clearing the user's authentication information. */
        logout: (state: userState) => {
            state.token = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        },

        /* The `setToken` function is a reducer action that is used to update the `token` property of
        the state. It takes two arguments: `state` and `action`. */
        setToken: (state: userState, action: PayloadAction<string>) => {
            state.token += action.payload;
        },

        /* The `editUser` function is a reducer action that is used to update the user's information in
        the state. It takes two arguments: `state` and `action`. */
        editUser: (state: userState, action: PayloadAction<any>) => {
            const userObject: userState = action.payload;
            state.email = userObject.email ?? state.email;
            state.firstName = userObject.firstName ?? state.firstName;
            state.lastName = userObject.lastName ?? state.lastName;
        },
    },
});

export const { logout, setToken, setRemember, editUser } = auth.actions;

export default auth.reducer;