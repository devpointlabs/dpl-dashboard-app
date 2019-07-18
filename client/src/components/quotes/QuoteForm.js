import React from 'react'
import { Form, Container, Button, Header,  } from 'semantic-ui-react'
import axios from 'axios';
import {Link, } from 'react-router-dom'

class QuoteForm extends React.Component {
state = { body: '', author: '', }

 componentDidMount() {
   const { match: {params: {id, } } } = this.props

   if (id)
   axios.get(`/api/quotes/${id}`)
   .then(res => {
     const{body, author,} = res.data
    this.setState({body, author, })
   })
   .catch(err => {
     console.log(err.response)
   })
 }

 handleChange = (e) => {
  const { target: { name, value } } = e
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault()
  const quote = { ...this.state }
  const { match: { params: { id } }, history: { push } } = this.props
  if (id) {
    axios.put(`/api/quotes/${id}`, quote)
      .then(res => push("/quotes"))
  } else {
    axios.post(`/api/quotes`, quote)
      .then(res => push("/quotes"))
  }
}


  render() {
    const { match: {params: {id, } } } = this.props
    const { body, author,  } = this.state
    return (
      <Container style={{marginTop: "100px"}}>
      <Header> {id ? 'Edit' : 'Add'} Quote </Header>
      <Header as="h4">Quote:</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="body"
        placeholder="Quote..."
        value={body}
        onChange={this.handleChange}
        required
        />
        <Header as="h4">Author:</Header>
        <Form.Input
        name="author"
        placeholder="Author..."
        value={author}
        onChange={this.handleChange}
        required
        />
      
        <Button color="green" inverted>Submit</Button>
        <Link to="/quotes">
        <Button color="blue" inverted>Back</Button>
        </Link>
        </Form>
      </Container>
    )
  }
}

export default QuoteForm