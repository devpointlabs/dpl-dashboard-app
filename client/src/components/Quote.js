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

  componentDidMount() {
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
      <Header as="h4">"{text}"</Header>
      <Header as="h5"> - {name}</Header>
      </>
    )
  }
}

export default Quote