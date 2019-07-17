import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import getEvents from "./CalEvents";

const localizer = momentLocalizer(moment);

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
        style={{ height: "420px" }}
        events={this.state.events}
      />
    );
  }
}

export default CalApp;
