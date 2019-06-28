import React from "react";
import axios from "axios";
import { Container, } from "semantic-ui-react";

 class Weather extends React.Component {
  state = { weather: [], };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/weather?zip=84101,us&units=imperial&APPID=562dea345b9be724579a871c814338dd')
     .then(res => {
       this.setState({ weather: [res.data] });
     })
    .catch( err => {
      console.log(err);
    })
  }

  renderWeather = () => {
    return this.state.weather.map( w => 
    <ul>
      <li>Name: {w.name}</li>
      <li>Longitutde: {w.coord.lon}</li>
      <li>Latitude: {w.coord.lat}</li>
      <li>Temperature: {w.main.temp}</li>
      <li>Humidity: {w.main.humidity}</li>
      <li>Timezone: {w.timezone}</li>
      <li>Visibility: {w.visibility}</li>

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