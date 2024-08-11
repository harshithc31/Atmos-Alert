import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
export default function SearchBox({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f8c75b128b7a61ecaa71cce1a7e02a87";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch (
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            //console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
        
    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
        //console.log(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <h2>Search for the Weather </h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />} >
                    Search 
                </Button>
                {error && <p style={{color: "red"}}>No such place exists! </p>}
            </form>
        </div>
    )
}