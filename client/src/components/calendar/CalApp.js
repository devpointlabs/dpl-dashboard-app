import React from "react";

class CalApp extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <iframe
        title={CalApp}
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23a9a9a9&amp;ctz=America%2FDenver&amp;src=MjNsbzEybDFobzVqNDVpZWE3Z29lZW5hMmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=OTZpYmdhajA3cTZwMW1rMjcycjhiODlrMmY1MnZ0bWhAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23ffffff&amp;color=%23000000&amp;color=%23000000&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showTabs=0&amp;showCalendars=1&amp;showTz=1"
        // style="border-width:0"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
      />
    );
  }
}

export default CalApp;
