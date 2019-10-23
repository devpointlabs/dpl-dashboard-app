import request from "superagent";
import React from "react";
import Event from "./Event";
const CALENDAR_ID = "23lo12l1ho5j45iea7goeena2c@group.calendar.google.com";
const API_KEY = "AIzaSyCXlFittoM7ppy1Wa2Uhh04BWQIosVM1SM";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

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
      return <Event key={event.id} {...event} />;
    });
  };
  render() {
    var style3 = {
      marginLeft: "10%",
      textDecoration: "underline white"
    };
    return (
      <>
        <h2 style={style3}>This Month</h2>
        <div>{this.renderEvents()}</div>
      </>
    );
  }
}

export default getEvents;
