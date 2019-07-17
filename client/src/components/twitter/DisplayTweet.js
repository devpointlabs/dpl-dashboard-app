import React from 'react'
import axios from 'axios'
import {List, Image} from 'semantic-ui-react'


class DisplayTweet extends React.Component {
state = { tweets: [],}
  
   componentDidMount() {
     axios.get('/api/tweets')
     .then( res => {
       let current = res.data[0]
       this.setState({ tweets: [current] }) 
    })
        .catch( err => {
         console.log(err.response)
  })
 }

  currentTweet = () => {
    const {tweets} = this.state
    if (tweets.length <= 0 )
    return <h2>No Current Tweets</h2>
    return (
    <List divided relaxed>
      { this.state.tweets.map( tweet =>
        <List.Item key={tweet.id}>
          <Image avatar src={tweet.user.profile_image_url} />
          <List.Content>
            <List.Header>{tweet.user.name}</List.Header>
            <List.Content>{tweet.text}</List.Content>
            <List.Description>
              <a href={tweet.user.url} target="_blank" rel="noopener noreferrer" >@{tweet.user.screen_name}</a>
            </List.Description>
          </List.Content>
        </List.Item>
      )}
    </List>
    )
  }

  
  render(){
    return (
      <>
      {this.currentTweet()}
      </>
    )
  }
  
  }
  
  

export default DisplayTweet
