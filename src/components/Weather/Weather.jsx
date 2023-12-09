import styles from './Weather.module.scss'
import {Card} from "react-bootstrap";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Thermometer from "../Svgs/Thermometer";
import Time from "../Svgs/Time";
import Wind from "../Svgs/Wind";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Moment from "react-moment";
import SunnyCloud from "../Svgs/SunnyCloud";
import Cloudy from "../Svgs/Cloudy";
import LightRain from "../Svgs/LightRain";
import Rainy from "../Svgs/Rainy";
import SunnyRainy from "../Svgs/SunnyRainy";
import Windy from "../Svgs/Windy";

export const Weather = () => {

    const weather = useSelector(({weather}) => weather)
    const [greeting, setGreeting] = useState("")

    const Greeting = (hour)=>
    {

            if(hour > 5 && hour < 12)
            {
                setGreeting("Good morning")
            }
            else if(hour >= 12 && hour <18)
            {
                setGreeting("Good afternoon")
            }
           else
                setGreeting("Good evening")
        }

        const displayIcon = ()=>
        {
            const icon = weather.weather.icon;

            switch (icon)
            {
                case "02d": return <SunnyCloud  width={"150px"} height={"150px"}/>
                case "03d" : return <Cloudy width={"200"} height={"200"}/>
                case "04d" : return <Cloudy width={"200"} height={"200"}/>
                case "03n" : return <Cloudy width={"200"} height={"200"}/>
                case "09d" : return <Rainy  width={"150px"} height={"150px"}/>
                case "10d" : return <SunnyRainy  width={"150px"} height={"150px"}/>
                default :return <img src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt={'weather'} width='200px ' height='{200px}'/>

            }

        }



    useEffect(() => {
        const hour = new Date().getHours()
        Greeting(hour)
        return () => {

        };
    }, [weather]);

    return (
        <>
             <Card className={styles.container}>
                 {weather.isLoaded ?
                <Card.Body>
                    <Card.Title>
                        {weather.name} , {weather?.sys.country} <PositionSvg color={'rgba(255,255,255,0.7)'}/>
                        <div className={styles.date}>
                            <div>
                                <Moment format="llll"/>
                            </div>
                            <div><Time width={'15px'} height={'15px'}/></div>
                        </div>
                    </Card.Title>
                    <Card.Text as={'div'} className={styles.weather_infos}>
                        <div>
                            {displayIcon()}
                        </div>
                        <div className={styles.temperature}>
                            <div>{weather.main.feels_like}° C</div>
                            <div>
                                <Thermometer/>
                            </div>
                        </div>
                        <div>
                            {greeting} {weather.name}
                            <div className={styles.separator}></div>
                        </div>
                        <div className={styles.infos}>
                            <div className={styles.border_right}>
                                <div><DefaultWeather color={'#fff'}/></div>
                                <div>Sunrise</div>
                                <div>
                                    <Moment unix={true} format={'hh:mm'}>
                                        {weather.sys.sunrise}
                                    </Moment>
                                </div>
                            </div>
                            <div className={styles.border_right}>
                                <div><Wind/></div>
                                <div>Wind</div>
                                <div>{weather.wind.speed} m/s</div>
                            </div>
                            <div className={styles.border_right}>
                                <div><Thermometer color={'#fff'} width={'25px'} height={'25px'}/></div>
                                <div>Temp min</div>
                                <div>{weather.main.temp_min}° C</div>
                            </div>
                            <div>
                                <div><Thermometer color={'#fff'} width={'25px'} height={'25px'}/></div>
                                <div>Temp max</div>
                                <div>{weather.main.temp_max}° C</div>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
                     :
                     <Card.Body>
                         <Card.Title>Please chose your city ...</Card.Title>
                     </Card.Body>
                 }
            </Card>
        </>
    )
}