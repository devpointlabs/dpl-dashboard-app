import React from 'react'
import axios from 'axios'
import { Header, } from 'semantic-ui-react'

class DisplayTopic extends React.Component {
  state = {
    topics: [],
  }

  componentDidMount(){
    axios.get('/api/topics')
        .then(res => {
          this.setState({ topics: res.data})
        })
        .catch( err => {
          console.log(err.response)
        })
  }

  showTopic = () => {
    const {topics } = this.state
    if (topics.length <= 0)
    return <h2>Project Day!</h2>
    return (
    
         topics.map( topic => 
           <>
              <Header as="h3" style={{textAlign: "center", color: "white"}}>
               {topic.language}
              </Header>
              <Header as="h4"  style={{textAlign: "center", color: "white"}}>
               {topic.body}
              </Header>
              
             
            </>
         )
    )
        }
  

  render() {
    return (
     <div>
      {this.showTopic()}
      </div>
    )
  }
}

export default DisplayTopic