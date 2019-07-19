import React from "react";

const Event = props => {
  var style = {
    fontSize: "2em",
    marginRight: "15px"
  };
  var style2 = {
    fontSize: "150%",
  };
  var style3 = {
    marginLeft: "10%",
    marginTop: "5%",
  }
  return (
    
    <>
      <p style={style3}>
        <span style={style2}><b style={style}>07</b>{props.title}</span>
      </p>
    
    </>
  );
};

export default Event;
