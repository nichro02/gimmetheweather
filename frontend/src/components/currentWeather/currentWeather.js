import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">City:</p>
          <p className="weather-description">Weather</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>

      <div className='bottom'>
        <p className='temperature'>x°C</p>
        <div className='details'>
            <div className='parameter-row'>
                <span className='parameter-label top'>Details</span>
            </div>
            <div className='parameter-row'>
                <span className='parameter-label'>Feels like</span>
                <span className='parameter-value'>Temperature</span>
            </div>
            <div className='parameter-row'>
                <span className='parameter-label'>Wind</span>
                <span className='parameter-value'>Wind speed</span>
            </div>
            <div className='parameter-row'>
                <span className='parameter-label'>Humidity</span>
                <span className='parameter-value'>Humidity %</span>
            </div>
            <div className='parameter-row'>
                <span className='parameter-label'>Pressure</span>
                <span className='parameter-value'>Amount of pressure</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
