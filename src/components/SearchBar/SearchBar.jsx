import {Button, Form} from "react-bootstrap";
import styles from  './SearchBar.module.scss'
import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {resetData, setData} from "../../features/weather/weatherSlice";
export const SearchBar = () => {

    const [cities, setCities] = useState([])
    const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API
    const dispatch = useDispatch()
    const [unity, setUnity] = useState('metric');
    const [getlocation, setGetlocation] = useState(undefined);
    const [currentLocation, setCurrentLocation] = useState(false);


    const getGeolocation = ()=> {
        navigator.geolocation.getCurrentPosition((position)=>{
            setCurrentLocation(true)
            setGetlocation({
                lat : position.coords.latitude,
                lon : position.coords.longitude,
            })
        })
    }

    const Data = ()=>{

        if(getlocation)
        {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${getlocation.lat}&units=${unity}&lon=${getlocation.lon}&appid=${WEATHER_API_KEY}`)
                .then(response =>response.json())
                .then(json=> {
                    const {main , weather , sys , wind ,name ,clouds  } = json
                    dispatch(setData({
                        main , weather, sys , wind , name , clouds ,
                    }))
                })
        }
    }
    const handleChangeInput = (e) => {
      const {value} = e.target
        if (value !==undefined && value !== null && value !== "")
        {

            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&type=city&format=json&apiKey=${GEO_API_KEY}`)
                .then(response =>response.json())
                .then(json=> setCities(json.results.map(data =>{
                    console.log(data.city)
                    const {lon , lat , city , country , formatted} = data ;
                    return {lon ,lat ,city ,country , formatted}
                })))
        }
    };


    const handleChangeAutoSelect = (e , value) => {

       if(value !==null)
       {
           const {lon , lat} = value;
           setGetlocation({
               lon , lat ,
           })
           setCurrentLocation(false)

       }
       else
       {
           dispatch(resetData())
       }

    };

    useEffect(() => {
                getGeolocation()
    }, []);
    useEffect(() => {
            Data()
    }, [getlocation]);


    return (
        <>
            <Form>
                <Form.Group className={styles.searchContainer}>
                <Autocomplete className= {styles.searchInput}

                              getOptionLabel={(options)=>{
                                  console.log("a",options)
                                  return options.formatted
                              }}

                              onChange={handleChangeAutoSelect}
                              clearOnBlur={false}
                              renderInput={(params)=>
                    <TextField {...params} onChange={handleChangeInput} label={'Enter you city'}/>}
                              options={cities}/>

                    {  <Button size={'sm'} disabled={getlocation === undefined || currentLocation === true} variant='primary' onClick={()=> getGeolocation()}>My location</Button>}
                </Form.Group>
            </Form>
        </>
    )
}