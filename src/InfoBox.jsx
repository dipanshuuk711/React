import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import './InfoBox.css'

export default function InfoBox({ info }) {

     const HOT_URL = 'https://media.istockphoto.com/id/1011128754/photo/thermometer-in-the-sky-the-heat.webp?b=1&s=170667a&w=0&k=20&c=kKYCK4MuCkm5dV0isRuV0K5qjLmHEo8m0L8fbnd82KQ='
     const COLD_URL = 'https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?b=1&s=170667a&w=0&k=20&c=vLS2YVKy59etAc4kn4wu_6rFsBdxyIhbH92R_WO4m3I='
     const RAINY_URL = 'https://images.unsplash.com/photo-1583054994298-cc68ddaca862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D'
     return (
          <div className="InfoBox mt-4">
               <div className="cardContainer">
                    <Card sx={{ maxWidth: 345 }}>
                         <CardMedia
                              component="img"
                              height="140"
                              image={info.humidity > 80 ? RAINY_URL : (info.temp > 20 ? HOT_URL : COLD_URL)}
                              alt="green iguana"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                   {info.city} - {info.humidity > 80 ? <ThunderstormOutlinedIcon/> : (info.temp > 20 ? <LightModeOutlinedIcon/> : <AcUnitIcon/>)}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" component={'span'}>
                                   <p>Temp : {info.temp} °C</p>
                                   <p>Feels Like : {info.feels_like} °C</p>
                                   <p>Min Temp : {info.temp_min} °C</p>
                                   <p>Max Temp : {info.temp_max} °C</p>
                                   <p>The Weather can be described as <i>{info.weather}</i> and The Humidity is {info.humidity}</p>
                              </Typography>
                         </CardContent>
                    </Card>
               </div>
          </div>
     )
}