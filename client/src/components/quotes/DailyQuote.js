import React from 'react'
import axios from 'axios'
import {Card, } from 'semantic-ui-react'
// This will loop thru the quote array and look for the current quote:boolean
//

class DailyQuote extends React.Component {
state = { quotes: [], }

componentDidMount() {
  axios.get("/api/quotes")
    .then( res => { 
      this.setState({ quotes: res.data })
   })
   .catch( err => {
     console.log(err.response)
   })
}
  



  render() {
    return(
      <Card>
      test
      </Card>
    )
  }
}


export default DailyQuote