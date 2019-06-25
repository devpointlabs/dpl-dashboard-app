import React from "react";
import { Header, Grid, Image,  } from "semantic-ui-react";
import YouTube from './YouTube'


const Home = () => (
  <>
  <Header as="h3" textAlign="center">
    Devise Auth App
  </Header>
  
    <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
          <Header>Quote of Day:</Header>
          </Grid.Column>
          <Grid.Column width={8}>
             <Header>Todays Topic:</Header>
             
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Weather & Time</Header>
            <Image src='https://picsum.photos/200' />
          </Grid.Column>
        </Grid.Row>

       <Grid.Row>
          <Grid.Column width={5}>
          <Header>Upcoming Events:</Header>
          </Grid.Column>
         <Grid.Column width={11}>
         <YouTube />
         </Grid.Column>
       </Grid.Row>
     </Grid>
          
           
         
         
 </>

);

export default Home;
