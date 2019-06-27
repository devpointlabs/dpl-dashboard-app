import React from 'react'
import axios from 'axios'

class Quote extends React.Component {
  constructor() {
    super();
    this.state = { quote: "", person: "" };
  }

  componentDidMount() {
    axios.get("/api/quotes")
      .then(res =>
        this.setState({ quote: res.quote, person: res.name }))
  }

  render() {
    return (
      <div>"{this.state.quote}" -{this.state.person}</div>
    )
  }
}

export default Quote