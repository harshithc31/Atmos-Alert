import { useState } from 'react'
// import Button from '@mui/material/Button';
// import './App.css'
// import SearchBox from './SearchBox'
// import WeatherInfo from './WeatherInfo'
import WeatherApp from './WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherApp />
    </>
  )
}

export default App
