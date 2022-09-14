import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {rickAndMortyApi} from "../services/RickAndMortyService";


export const rootReducer = combineReducers({
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
})

export const setupeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(rickAndMortyApi.middleware)
    })
}