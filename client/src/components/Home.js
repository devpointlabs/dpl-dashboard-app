import React from "react";
import { Header, Grid, Image,  } from "semantic-ui-react";
import YouTube from './YouTube'


const Home = () => (
  <> 
    <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
          <Header>Quote of Day:</Header>
          you can add your stuff here
          </Grid.Column>
          <Grid.Column width={8}>
             <Header>Todays Topic:</Header>
             add your component here
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Weather & Time</Header>
            <Image src='https://picsum.photos/200' />
            take out the silly image and add your stuff here
          </Grid.Column>
        </Grid.Row>

       <Grid.Row>
          <Grid.Column width={5}>
          <Header>Upcoming Events:</Header>
          <p>Events</p>
          <p>Events</p>
          <p>Events</p>
          </Grid.Column>
         <Grid.Column width={11}>
         <YouTube />
         </Grid.Column>
       </Grid.Row>
     </Grid>
          
           
         
         
 </>

);

export default Home;
