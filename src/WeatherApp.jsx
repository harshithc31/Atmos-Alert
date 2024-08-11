import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"
import { useState } from "react"

export default function WeatherApp() {
    const [WeatherInfoInit, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 43.62,
        humidity: 49,
        temp: 36.62,
        tempMax: 36.62,
        tempMin: 36.62,
        weather:"haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>My Weather App - AtmosAlert</h1>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherInfo info={WeatherInfoInit}/>
        </div>
    )
}