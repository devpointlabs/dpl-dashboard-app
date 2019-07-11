import React from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, } from "semantic-ui-react"


class QuoteShow extends React.Component {
state = { quotes: [],   }

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
          color="green"
          basic
          onClick={() => this.currentQuote(quote.id)}
          >
          Daily Quote
          </Button>
         
         </Card.Content>
         </Card>
          )}
        </Card.Group>
      </Grid>
    )}

    currentQuote = (id) => {
      axios.put(`/api/current/${id}`)
        .then( ({ data }) => {
          const quotes = this.state.quotes.map( quote => {
            if (quote.id === id)
              return data
            return quote
          });
  
          this.setState({ quotes });
        });
    }
  
    
    destroyQuote = (id) => {
      axios.delete(`/api/quotes/${id}`)
      .then(res => {
        const {quotes, } = this.state
        this.setState({quotes: quotes.filter(q => q.id !== id), })
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
    // handleUpload = (id) => {
    //   axios.get(`/api/quotes/${id}`)
    //   .then( res => {
    //     const {setQuote, } = this.state
    //     this.setState({ setQuote: res.data })
    //   }, [])
    // }
    //   this will push the quote choosen to the home.js
    //   where it will change the quote state?
    //   We want to create our own quote database to pull from
    //  push this quote to the dailyQuote array in state?