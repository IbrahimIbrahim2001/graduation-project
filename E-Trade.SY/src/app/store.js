import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import searchSlice from "../features/searchSlice/searchSlice";

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);
const persistedSearchReducer = persistReducer(persistConfig, searchSlice)

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        cart: cartSlice,
        search: persistedSearchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);