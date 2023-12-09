import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice(
    {
        name : "weather",
        initialState:{
            name : undefined,
            main : {
                feels_like : undefined,
                temp_min : undefined,
                temp_max : undefined
            },
            sys : {
                country :undefined,
                sunrise : undefined,
                sunset : undefined
            },
            weather : undefined,
            wind : {
                speed : undefined,
                deg : undefined
            },

            clouds : undefined,
            isLoaded: false,
        },

        reducers :
            {
                setData:  (state , action) =>
                {
                    console.log(action.payload);
                    const {main , weather , sys , wind ,name ,clouds } = action.payload;
                    state.name = name;
                    state.main = main;
                    state.sys = sys;
                    state.weather = weather[0];
                    state.wind = wind;
                    state.clouds = clouds;
                    state.isLoaded = true;
                }
                ,
                resetData : (state, action) => {

                    state.isLoaded = false;
                }


            }
    }

)

export const {setData , resetData} = weatherSlice.actions
export default weatherSlice.reducer;