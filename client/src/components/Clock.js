import React from "react";
import {Responsive} from "semantic-ui-react"
// playing with this semantic Responsive tag. We will see how it looks on the big screen
class Clock extends React.Component {
state = { date: new Date(), };

componentDidMount() {
  this.ticker = setInterval( () => this.tick(), 1000);
}

componentWillUnmount() {
  clearInterval(this.ticker);
}

tick = () => this.setState({ date: new Date(), });

  render() {
    return (//this extracts the Time from the Date() method
      <div className= "App-header">{ this.state.date.toLocaleTimeString() }</div>
    )
  }
}
export default Clock;