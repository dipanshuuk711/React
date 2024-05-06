import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from './SearchBox'


export default function WeatherApp() {
     let [weatherInfo, setWeatherInfo] = useState({
          city: 'Delhi',
          feels_like: 33.29,
          humidity: 16,
          temp: 35.62,
          temp_max: 36.05,
          temp_min: 35.62,
          weather: 'haze',
     });

     let updateInfo = (newInfo) => { 
          console.log(newInfo)
          console.log(weatherInfo)
          setWeatherInfo(newInfo);
     };


     return (
          <div className="mb-4">
               <h2>Weather App by Dipanshu</h2>
               <SearchBox updateInfo={updateInfo} />
               <InfoBox info={weatherInfo} /> 
          </div>
     )
}