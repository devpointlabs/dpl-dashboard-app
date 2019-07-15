import React from 'react'
import { Form, Container, Button, Header,  } from 'semantic-ui-react'
import axios from 'axios';
import {Link, } from 'react-router-dom'

class TopicsForm extends React.Component {
state = { language: '', topic: '', }

 componentDidMount() {
   const { match: {params: {id, } } } = this.props

   if (id)
   axios.get(`/api/topics/${id}`)
   .then(res => {
     const{language, topic} = res.data
    this.setState({language, topic, })
   })
   .catch(err => {
     console.log(err.response)
   })
 }

 handleChange = (e) => {
  e.preventDefault()
  const { target: { name, value } } = e
  this.setState({ [name]: value })
}

handleSubmit = (e) => {
  e.preventDefault()
  const topic = { ...this.state }
  const { match: { params: { id } }, history: { push } } = this.props
  if (id) {
    axios.put(`/api/topics/${id}`, topic)
      .then(res => push("/topic"))
  } else {
    axios.post(`/api/topics`, topic)
      .then(res => push("/topic"))
  }
}


  render() {
    const { match: {params: {id, } } } = this.props
    const { language, topic, } = this.state
    return (
      <Container style={{marginTop: "100px"}}>
      <Header> {id ? 'Edit' : 'Add'} Topic </Header>
      <Header as="h4">Language:</Header>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="Language"
        placeholder="Language..."
        value={language}
        onChange={this.handleChange}
        required
        />
        <Header as="h4">Topic:</Header>
        <Form.Input
        name="topic"
        placeholder="Topic..."
        value={topic}
        onChange={this.handleChange}
        required
        />
        <Button color="green" inverted>Submit</Button>
        <Link to="/topics">
        <Button color="blue" inverted>Back</Button>
        </Link>
        </Form>
      </Container>
    )
  }
}

export default TopicsForm