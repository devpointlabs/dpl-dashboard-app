import React from "react";
import axios from "axios";
import { Container, } from "semantic-ui-react";

 class Weather extends React.Component {
  state = { weather: [], };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=84101,us&units=imperial&APPID=d598523c59a24c73bd4885f0bc4bfd7e')
     .then(res => {
       this.setState({ weather: [res.data] });
       console.log(this.state)
     })
    .catch( err => {
  
      console.log(err);
    })
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
      <Container style={{ padding: "30px 0", }}>
        <br />
        <br />
        {this.renderWeather()}
      </Container>
    );
  }
}

export default Weather;