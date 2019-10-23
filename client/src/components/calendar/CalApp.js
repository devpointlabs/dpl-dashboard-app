import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import getEvents from "./CalEvents";

const localizer = momentLocalizer(moment);

function EventAgendaNew({ event }) {
  return (
    <span>
      <p>{event.desc}</p>
      <h1>
        <em style={{ color: "white" }}>{event.title}</em>
      </h1>
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
    var styles1 = {
      margin: "0px",
      width: "250px",
      height: "600px",
      backgroundColor: "yellow",
      display: "inline-block"
    };
    return (
      // React Components in JSX look like HTML tags
      <>
        <div>
          <h1 style={{ color: "#7f60ac" }}>
            <u>Events for the next month</u>
          </h1>
        </div>
        <div>
          <Calendar
            localizer={localizer}
            style={{ styles1 }}
            events={this.state.events}
            defaultView={Views.AGENDA}
            toolbar={false}
            components={{
              event: Event,
              agenda: {
              event: EventAgendaNew
              }
            }}
          />
        </div>
      </>
    );
  }
}

export default CalApp;
