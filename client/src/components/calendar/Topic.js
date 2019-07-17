import React, { useState, useEffect } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "./CalEvents";
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import ChecksForm from './ChecksForm'
import { setNormalizedScrollLeft } from "normalize-scroll-left";

const localizer = momentLocalizer(moment);
const CalApp = props => {
  // const useStyles = makeStyles(theme => ({
  //   paper: {
  //     position: 'absolute',
  //     width: 400,
  //     backgroundColor: theme.palette.background.paper,
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing(4),
  //     outline: 'none',
  //   },
  // }));
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  const [modalStyle] = React.useState(getModalStyle);
  // const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");
  const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: "grey"
      }
    });

  let allViews = Object.keys(Views).map(k => Views[k]);
  const addEvent = check => {
    setEvents([...events, check]);
    console.log(events);
  };
  const handleSelect = ({ start, end }) => {
    setOpen(true);
    setStart(start);
    setEnd(end);
  };
  return (
    <div>
      <Calendar
        selectable
        localizer={localizer}
        views={allViews}
        events={events}
        startAccessor="checkOutTime"
        endAccessor="expectedReturn"
        titleAccessor="name"
        defaultView="week"
        step={60}
        showMultiDayTimes
        defaultDate={new Date()}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper
        }}
        onSelectSlot={handleSelect}
        style={{ height: "100%" }}
      />
      {/* <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
      // onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <ChecksForm handleClose={() => setOpen(false)} addCheck={addEvent} start={start} end={end} />
        </div>
      </Modal> */}
    </div>
  );
};
export default CalApp;
