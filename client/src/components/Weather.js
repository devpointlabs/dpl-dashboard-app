import React from 'react';
import { Container, } from "semantic-ui-react";

class Weather extends React.Component {
  state = { weather: [], };

  componentDidMount() {

     this.doTheWeatherStuff()
  };
  
  doTheWeatherStuff = () => {
    this.fetchWeather()
    setInterval(
    this.fetchWeather.bind(this)
    , 600000);
};

  fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=84101,us&units=imperial&APPID=562dea345b9be724579a871c814338dd')
        .then(function(response) {
          return response.json();
        })
        .then((myJson) => {
          this.setState({weather: [myJson]});
          console.log('hit')
        });
      }


      renderWeather = () => {
        return this.state.weather.map( w => 
        <ul key="w.id">
          <li>Location: {w.name}</li>
          <li>High: {w.main.temp_max}℉</li>
          <li>Low: {w.main.temp_min}℉</li>
          <li>Currently: {w.main.temp}℉</li>
          <li>Humidity: {w.main.humidity}%</li>
          <li>Sky: {w.clouds.all}</li>
          <li>TimeZone: {w.timezone}</li>
        </ul>)
      }

   render() {
    return (
      <Container>

        {this.renderWeather()}
      </Container>
    );
  }
}


export default Weather; 