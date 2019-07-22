import React from "react";

class Weatherwidget extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";

    document.body.appendChild(script);
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
    );
  };

  render() {
    return <div>{this.widgetFunc()}</div>;
  }
}

export default Weatherwidget;
