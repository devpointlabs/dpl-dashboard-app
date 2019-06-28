import React from "react"
import Quote from './Quote'
import Weather from './Weather'
import YouTube from './YouTube'
import styled from 'styled-components'
import { Header, Grid,  } from "semantic-ui-react";



const Home = () => (
  <> 
    <Grid celled only="large screen" >
        <Grid.Row display="flex">
          <Grid.Column width={4} color="grey" >
          <Header color="purple" inverted>Quote of Day:</Header>
          <Quote />
          </Grid.Column>
          <Grid.Column width={8} color="grey">
             <Header color="purple" inverted>Todays Topic:</Header>
             add your component here
          </Grid.Column>
          <Grid.Column width={4} color="grey">
            <Header color="purple" inverted>Weather & Time</Header>
           <Weather/>
          </Grid.Column>
        </Grid.Row>

       <Grid.Row >
          <Grid.Column width={5} color="purple">
          <Header color="grey" inverted>Upcoming Events:</Header>
          <p>Events</p>
          <p>Events</p>
          <p>Events</p>
          </Grid.Column>
         <Grid.Column width={11} color="purple">
         <YouTube />
         </Grid.Column>
       </Grid.Row>
     </Grid>
 </>
);



export default Home;
