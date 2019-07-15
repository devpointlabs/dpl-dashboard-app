import React from 'react'
import axios from 'axios'
import {Card, Grid } from 'semantic-ui-react'
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
  
selectedQuote = () => {
  const {quotes } = this.state
  if (quotes.current_quote === false)
  return <h2>No Quote Selected</h2>
  else
  return (
    <Grid style={{marginTop: "25px"}}>
        <Card.Group itemsPerRow={4}>
         { quotes.map( quote => 
           <Card key={quote.id}>
            <Card.Content>
              <Card.Header>
               {quote.body}
              </Card.Header>
              <Card.Meta>
               {quote.author}
              </Card.Meta>
            </Card.Content>

         </Card>
          )}
        </Card.Group>
      </Grid>
  )
}


  render() {
    return(
      <>
    {this.selectedQuote()}
    </>
    )
  }
}

//if current_quote === true 
// show that quote. If not quote selected than show "No quotes Selected"

export default DailyQuote