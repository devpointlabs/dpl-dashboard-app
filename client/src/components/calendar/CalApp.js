import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import getEvents from "./CalEvents";

const localizer = momentLocalizer(moment);

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: "purple" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
}

class CalApp extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events });
    });
  }

  render() {
    return (
      // React Components in JSX look like HTML tags
      <Calendar
        localizer={localizer}
        style={{ height: "300px" }}
        events={this.state.events}
        defaultView={Views.AGENDA}
        toolbar={false}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda
          }
        }}
      />
    );
  }
}

export default CalApp;
