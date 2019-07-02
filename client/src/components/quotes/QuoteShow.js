import React from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, } from "semantic-ui-react"


class QuoteShow extends React.Component {
state = { quotes: [], dailyQuote: [], }

  componentDidMount() {
    axios.get("/api/quotes")
      .then( res => { 
        this.setState({ quotes: res.data })
     })
     .catch( err => {
       console.log(err.response)
     })
  }


  allQuotes = () => {
    const {quotes } = this.state
    if (quotes.length <= 0)
    return <h2>No Quotes Yet...</h2>
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

         <Card.Content extra>
          <Button 
           color='red' 
           icon basic 
           onClick={() => this.destroyQuote(quote.id)}
           >
           <Icon name='trash' /> 
          </Button>

          <Link to={`/quotes/${quote.id}/edit`}>
          <Button 
          color='blue' 
          icon basic 
          >
          <Icon name='pencil' />
          </Button>
          </Link>
         
          <Button 
          color='purple' 
          icon basic 
          onClick={this.handleUpload}
          >
          <Icon name='upload' />
          </Button>
        
         </Card.Content>
         </Card>
          )}
        </Card.Group>
      </Grid>
    )}
  
    handleUpload = () => {
      //this will push the quote choosen to the home.js
      //where it will change the quote state?
      //We want to create our own quote database to pull from
     //push this quote to the dailyQuote array in state?
    }

    destroyQuote = (id) => {
      console.log(id)
      axios.delete(`/api/quotes/${id}`)
        .then(res => {
          this.props.history.push("/quotes")
          console.log(res)
      })
    }


  render() {
    return(
      
        <Container style={{marginTop: "25px"}}>
          <Link to="/quotes/new">
           <Button inverted color="green">
            <Icon name="add" />
              Add a Quote!
            </Button>
          </Link>
        {this.allQuotes()}
      </Container>
      
    )
  }
}

export default QuoteShow