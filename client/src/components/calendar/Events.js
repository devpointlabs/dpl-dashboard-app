import request from "superagent";
import React from "react";
import Event from "./Event";
// import moment from "moment"

const CALENDAR_ID = "23lo12l1ho5j45iea7goeena2c@group.calendar.google.com";
const API_KEY = "AIzaSyCXlFittoM7ppy1Wa2Uhh04BWQIosVM1SM";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
// const moment = require('moment');
// let m = moment();
// let date = moment('2016-06-28 09:30:26.123');

class getEvents extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    request.get(url).end((err, resp) => {
      if (!err) {
        JSON.parse(resp.text).items.map(event => {
          this.state.events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary
          });
        });
      }
    });
  };

  renderEvents = () => {
    return this.state.events.map(event => {
      return <Event {...event} />;
    });
  };
  render() {
    var style3 = {
      marginLeft: "10%",
      textDecoration: "underline white",
      textShadow: "2px 2px #000000"
    };
    return (
      <>
        <h2 style={style3}>
          July
        </h2>
        <div>{this.renderEvents()}</div>
      </>
    );
  }
}

export default getEvents;
