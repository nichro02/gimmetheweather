import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/currentWeather/currentWeather'
import Forecast from './components/forecast/forecast'
import {WEATHER_API_URL} from './api'
import {WeatherAPIKey} from './environment'
import {useState} from 'react'


function App() {
  //manage state for current weather and forecast
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    console.log('LAT ---> ',lat,'LON ---> ', lon)

    //fetch current weather and forecast
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}&units=metric`
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({city: searchData.label, ...weatherResponse})
        setForecast({city: searchData.label, ...forecastResponse})
      })
      .catch(err => console.log(err))
  }

  //console.log('CURRENT WEATHER --> ', currentWeather)
  console.log('FORECAST ---> ', forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App
