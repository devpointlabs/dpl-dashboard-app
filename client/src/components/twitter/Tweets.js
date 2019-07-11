import React from 'react';
import { List, Image, } from 'semantic-ui-react';

const Tweets = ({ tweets }) => (
  <List divided relaxed>
    { tweets.map( tweet =>
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

export default Tweets;

