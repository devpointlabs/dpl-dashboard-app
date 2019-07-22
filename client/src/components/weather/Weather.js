import React from "react";

class Weatherwidget extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";

    document.body.appendChild(script);
  }
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
        <h1>
          <li>Location: {w.name}</li>
          <li>High: {w.main.temp_max}℉</li>
          <li>Low: {w.main.temp_min}℉</li>
          <li>Currently: {w.main.temp}℉</li>
          <li>Humidity: {w.main.humidity}%</li>
          <li>Sky: {w.clouds.all}</li>
          <li>TimeZone: {w.timezone}</li>
        </h1>
        </ul>
        )
      }

  widgetFunc = () => {
    return (
      <div>
        {/* width should be 470px */}

        {/* <a
          className="weatherwidget-io"
          href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
          data-label_1="SALT LAKE CITY"
          data-label_2="WEATHER"
          data-icons="Climacons Animated"
          data-theme="weather_one"
        >
          SALT LAKE CITY WEATHER
        </a> */}
        <a
          class="weatherwidget-io"
          href="https://forecast7.com/en/40d76n111d89/salt-lake-city/?unit=us"
          data-font="Roboto"
          data-icons="Climacons Animated"
          data-mode="Current"
          data-theme="dark"
          data-basecolor=""
        >
          Salt Lake City, UT, USA
        </a>
        <script>
          {
            !(function(d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = "https://weatherwidget.io/js/widget.min.js";
                fjs.parentNode.insertBefore(js, fjs);
              }
            })(document, "script", "weatherwidget-io-js")
          }
        </script>
      </div>
      <Container>
        {this.renderWeather()}

        
      </Container>
    );
  };

  render() {
    return <div>{this.widgetFunc()}</div>;
  }
}

export default Weatherwidget;
