import React from "react";
import moment from 'moment'

const Event = props => {
  var style = {
    fontSize: "2em",
    marginRight: "15px"
  };
  var style2 = {
    fontSize: "150%"
  };
  var style3 = {
    marginLeft: "10%",
    marginTop: "5%"
  };

  return (
    <>
      <p style={style3}>
        <span style={style2}>
          <b style={style}>
             {moment(props.end).format('MMM D')}
             {/* {props.start} */}
          </b>
          {props.title}
        </span>
      </p>
    </>
  );
};

export default Event;
