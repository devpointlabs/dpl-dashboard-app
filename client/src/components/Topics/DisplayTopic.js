import React from 'react'
import axios from 'axios'
import { Header, } from 'semantic-ui-react'

class DisplayTopic extends React.Component {
  state = {
    topics: [],
  }

  componentDidMount(){
    axios.get('/api/topic')
        .then(res => {
          this.setState({
            body: ['body'],
            language: ['language']
          })
        })
  }

  render() {
    const { body, language, } = this.state
    return (
      <>
        <Header as='h4'>{language}</Header>
        <Header as='h5'>{body}</Header>
      </>
    )
  }
}

export default DisplayTopic