import React from "react";
var x =
  "<html><scr" +
  'ipt>HI</scr' +
  'ipt></html>';

var extractscript = /<script>(.+)<\/script>/gi.exec(x);
x = x.replace(extractscript[0], "");

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
            01
            {/* <b style={style} dangerouslySetInnerHTML={{ __html: x }} /> */}
          </b>
          {props.title}
        </span>
      </p>
    </>
  );
};

export default Event;
