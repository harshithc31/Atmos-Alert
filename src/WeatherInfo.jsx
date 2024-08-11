import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

import './WeatherInfo.css';
export default function WeatherInfo({info}) {
    const CLOUD_IMG_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?b=1&s=170667a&w=0&k=20&c=vLS2YVKy59etAc4kn4wu_6rFsBdxyIhbH92R_WO4m3I=";
    const RAIN_URL = "https://images.unsplash.com/photo-1567699631772-21be4f5ef2ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    // let info = {
    //     city: "Delhi",
    //     feelsLike: 43.62,
    //     humidity: 49,
    //     temp: 36.62,
    //     tempMax: 36.62,
    //     tempMin: 36.62,
    //     weather:"haze"
    // }
    return (
        <div className='WeatherInfo'>
            <h2>Weather Info</h2>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? RAIN_URL : info.temp < 15 ? COLD_URL : info.temp > 30 ? HOT_URL : CLOUD_IMG_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {info.humidity > 80 ? <ThunderstormIcon /> : info.temp < 15 ? <AcUnitIcon /> : info.temp > 30 ? <WbSunnyIcon /> : <WbCloudyIcon />}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather} </i> and feels like {info.feelsLike}&deg;C. </p>
                    </Typography>
                </CardContent>
                
                </Card>
            </div>
        </div>
    )
}