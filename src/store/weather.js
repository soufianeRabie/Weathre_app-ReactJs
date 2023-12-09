import {configureStore} from "@reduxjs/toolkit";
import weatherSlice from "../features/weather/weatherSlice";

export const store =configureStore({
    reducer:{
        weather :weatherSlice
    }

})
