import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import cartSlice from "../features/cartSlice/cartSlice";
import searchSlice from "../features/searchSlice/searchSlice";
import apriori from "../features/aprioriSlice/apriori";

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

const persistedSearchReducer = persistReducer(persistConfig, searchSlice);
const persistedCartReducer = persistReducer(persistConfig, cartSlice);
const persistedAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        search: persistedSearchReducer,
        auth: persistedAuthReducer,
        apriori: apriori,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);