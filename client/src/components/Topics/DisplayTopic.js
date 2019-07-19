import React from 'react'
import axios from 'axios'
import moment from 'moment'


class DisplayTopic extends React.Component {
  state = {
    topics: [],
  }

  componentDidMount() {
    axios.get('/api/topics')
      .then(res => {
        this.setState({ topics: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  showTopic = () => {
    var currentDate = moment().format("YYYY-MM-DD")
    const {topics } = this.state

    return (
    
         topics.map( topic => {
          if (topic.date === currentDate)
          return(
           <div key={topic.id}>
              <div className="Body">
               {topic.language}
              </div>
              <div className="Meta">
               {topic.body}
              </div>
            </div>
          
          ) 
          else 
          return(
          <h1>Project Day!</h1>
//write a ternary to display Project Day or Have a good weekend
       )
      }
    )
   )
  }
       
  
  
  render() {
    return (
      <>
        {this.showTopic()}
    </>
    )
  }
}


export default DisplayTopic