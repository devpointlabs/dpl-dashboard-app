import React from "react";


class Weatherwidget extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
      const script = document.createElement("script");
      script.type = "text/javascript";

      <script> window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push(
        {
        id: 15,
        cityid: '5780993',
        appid: '562dea345b9be724579a871c814338dd',
        units: 'imperial',
        containerid: 'openweathermap-widget-15',  });  
        (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  
        })();
    </script>

      document.body.appendChild(script);
  }

  render() {
    return (
        <div id="openweathermap-widget-15"></div>
    );
   }
}

export default Weatherwidget;

