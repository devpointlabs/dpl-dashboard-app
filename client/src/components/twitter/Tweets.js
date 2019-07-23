import React from 'react';
import { Card, Image, } from 'semantic-ui-react';

const Tweets = ({ tweets }) => (
  <Card.Group itemsPerRow={3}>
    { tweets.map( tweet =>
    <Card key="tweet.id" >
    <Card.Content>
      <Image floated='right' size='mini' avatar src={tweet.user.profile_image_url} />
      <Card.Header>{tweet.user.name}</Card.Header>
      <Card.Meta> <a href={tweet.user.url} target="_blank" rel="noopener noreferrer" >@{tweet.user.screen_name}</a></Card.Meta>
      <Card.Description>
      {tweet.text}
      </Card.Description>
     </Card.Content>
     </Card>
    )}
  </Card.Group>
)

export default Tweets;

