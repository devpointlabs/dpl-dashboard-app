import React from "react"
import Quote from './Quote'
import Weather from './Weather'
import YouTube from './YouTube'
import { Header, Grid,  } from "semantic-ui-react";



const Home = () => (

 

  <> 
    <Grid celled>
        <Grid.Row>
          <Grid.Column width={4}>
          <Header>Quote of Day:</Header>
          <Quote />
          </Grid.Column>
          <Grid.Column width={8}>
             <Header>Todays Topic:</Header>
             add your component here
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Weather & Time</Header>
           <Weather/>
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
