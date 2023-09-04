import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth';

/**
 * The function saves the state object to the browser's local storage and attempts to load it from
 * local storage.
 * @param {any} state - The `state` parameter is the data that you want to save to the local storage.
 * It can be of any type, as the `JSON.stringify()` method will convert it to a string before saving it
 * to the local storage.
 */
function saveToLocalStorage(state: any) {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem("reduxStore", serialState);
    } catch (e) {
        console.warn(e);
    }
}

/**
 * The function attempts to load data from the browser's local storage and returns it if successful,
 * otherwise it returns undefined.
 * @returns the parsed JSON object if it exists in the localStorage with the key "reduxStore". If the
 * JSON object does not exist or if there is an error in parsing the JSON, the function returns
 * undefined.
 */
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("reduxStore");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

/* The code `export const store = configureStore({ reducer: { user: userReducer }, preloadedState:
loadFromLocalStorage() });` is creating a Redux store using the `configureStore` function from the
`@reduxjs/toolkit` library. */
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type rootState = ReturnType<typeof store.getState>

export type appDispatch = typeof store.dispatch