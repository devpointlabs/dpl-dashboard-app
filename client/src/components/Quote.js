import React from 'react'
import axios from 'axios'
import {Header, } from "semantic-ui-react"

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "", 
      text: ""
   };
  }

  async componentDidMount() {
    axios.get("/api/quotes")
      .then( res => {
        let data = res.data
        let quoteNum = Math.floor(Math.random() * data.length) //quote number
        let randomQuote = data[quoteNum] //actual quote

        this.setState({
           text: randomQuote['text'],
           name: randomQuote['name']
        })
     })
       
      
  }



  render() {
    const { text, name, } = this.state
    return (
      <>
      <h4>"{text}"</h4>
      <h4> - {name}</h4>
      </>
    )
  }
}

export default Quote