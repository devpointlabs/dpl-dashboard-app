import React from 'react'
import axios from 'axios'
import {Header, } from "semantic-ui-react"

class Quote extends React.Component {
  state = {
      quotes: [],
   };
  

  componentDidMount() {
    axios.get("/api/quotes")
      .then( res => {
        let data = res.data
        let quoteNum = Math.floor(Math.random() * data.length) //quote number
        let randomQuote = data[quoteNum] //actual quote

        this.setState({
           text: randomQuote['body'],
           name: randomQuote['author']
        })
     })
       
      
  }



  render() {
    const { text, name, } = this.state
    return (
      <>
      <div className="App-header">"{text}"</div>
      <div className="App-body"> - {name}</div>
      </>
    )
  }
}

export default Quote