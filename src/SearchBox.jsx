import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
     let [city, setCity] = useState('');

     const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
     const API_KEY = 'ebc5f80331447bbedc142105c265af1b'

     let getWeatherInfo = async () => {
          console.log(city)
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonRes = await response.json();
          let result = {
               city: city,
               temp: jsonRes.main.temp,
               temp_max: jsonRes.main.temp_max,
               temp_min: jsonRes.main.temp_min,
               feels_like: jsonRes.main.feels_like,
               humidity: jsonRes.main.humidity,
               weather: jsonRes.weather[0].description,
          }
          console.log(result);
          return result;
     };

     let handleChange = (event) => {
          setCity(event.target.value);
     }

     
     let handleSubmit = async (event) => {
          event.preventDefault();
          setCity('');
          let newInfo = await getWeatherInfo();
          updateInfo(newInfo);
     }
     return (
          <div>
               <form action="" onSubmit={handleSubmit}>
                    <TextField id="standard-basic" label="City-Name" variant="standard" required value={city} onChange={handleChange} />
                    <br />
                    <Button variant="contained" className='mt-2' type='submit' >Search</Button>
               </form>
          </div>
     )
}