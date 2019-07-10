import React from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, Radio, } from "semantic-ui-react"


class QuoteShow extends React.Component {
state = { quotes: [], dailyQuote: [],  }

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
         onClick={() => this.setQuote(quote.id)}
         >
          <Radio label="Daily Quote?" /> 
          </Button>
        
         </Card.Content>
         </Card>
          )}
        </Card.Group>
      </Grid>
    )}

    getUniqId() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    setQuote = (id,) => {
      axios.get(`/api/quotes/${id}`)
      .then(res => {
        let {current_quote} = this.state.quotes
        this.setState({current_quote: !current_quote })
      console.log(res.data.current_quote)
      })
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
    //handleUpload = (id) => {
    //   axios.get(`/api/quotes/${id}`)
    //   .then( res => {
    //     const {dailyQuote, } = this.state
    //     this.setState({ dailyQuote: res.data })
    //   })
    // }
    //   this will push the quote choosen to the home.js
    //   where it will change the quote state?
    //   We want to create our own quote database to pull from
    //  push this quote to the dailyQuote array in state?