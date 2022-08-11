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
    </div>
  );
};

export default CurrentWeather;
