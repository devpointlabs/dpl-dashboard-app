import React from 'react'
import axios from 'axios'
import { List } from 'semantic-ui-react'
import moment from 'moment'
//trying to get moment to parse input and currentDate. 
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
    var tempDate = new Date();
    var currentdate = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear()
    const {topics } = this.state

    return (
    
         topics.map( topic => {
          if (topic.date === currentdate)
          return(
           <List.Item key={topic.id}>
              <List.Header as="h3" style={{textAlign: "center", color: "white"}}>
               {topic.language}
              </List.Header>
              <List.Content as="h3"  style={{textAlign: "center", color: "white"}}>
               {topic.body}
              </List.Content>
            </List.Item>
          
          ) 
         }
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