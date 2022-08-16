import './App.css'
import Search from './components/search/search'
import CurrentWeather from './components/currentWeather/currentWeather'
import {WEATHER_API_URL} from './api'
import {WeatherAPIKey} from './environment'


function App() {
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')
    console.log('LAT ---> ',lat,'LON ---> ', lon)

    //fetch current weather and forecast
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WeatherAPIKey}`
    )
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App
