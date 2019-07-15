import React from 'react'
import axios from 'axios'
import {Card, } from 'semantic-ui-react'
// This will loop thru the quote array and look for the current quote:boolean
//

class Topics extends React.Component {
state = { topics: [], }

componentDidMount() {
  axios.get("/api/topics")
    .then( res => { 
      this.setState({ topics: res.data })
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


export default Topics