import React from 'react'
import axios from 'axios'
import {Image, Card, } from 'semantic-ui-react'


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
   
      <Card.Group divided relaxed>
      { this.state.tweets.map( tweet =>
      <Card>
      <Card.Content>
        <Image floated='right' size='mini' avatar src={tweet.user.profile_image_url} />
        <Card.Header>{tweet.user.name}</Card.Header>
        <Card.Meta> <a href={tweet.user.url} target="_blank" rel="noopener noreferrer" >@{tweet.user.screen_name}</a></Card.Meta>
        <Card.Description>
        {tweet.text}
        </Card.Description>
       </Card.Content>
       </Card>
       )
       }
     </Card.Group>
  
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
