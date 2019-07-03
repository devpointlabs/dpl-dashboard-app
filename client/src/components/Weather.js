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
    , 3600000);
  }

  fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=84101,us&units=imperial&APPID=562dea345b9be724579a871c814338dd')
        .then(function(response) {
          return response.json();
        })
        .then((myJson) => {
          this.setState({weather: myJson});
        });
      
  }
  
  renderWeather = () => {
    return (

      <ul>
        <li>Name: {this.state.weather.name}</li>
        {/* <li>Longitude: {this.state.weather.coord.lon}</li> */}
        {/* <li>Latitude: {this.state.weather.coord.lat}</li> */}
        {/* {<li>Temperature: {this.state.weather.main.temp}</li>} */}
        {/* <li>Humidity: {this.state.weather.humidity}</li> */}
        <li>Timezone: {this.state.weather.timezone}</li>
        <li>Visibility: {this.state.weather.visibility}</li> 
      </ul>
      )
    }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        {this.renderWeather()}
      </Container>
    );
  }
}


export default Weather; 