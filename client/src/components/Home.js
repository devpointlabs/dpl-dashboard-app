import React from "react"
import Quote from './Quote'
import Weather from './weather'
import { Header } from "semantic-ui-react";
import { Header, Grid, Image,  } from "semantic-ui-react";
import YouTube from './YouTube'



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
             
          </Grid.Column>
          <Grid.Column width={4}>
            <Header>Weather & Time</Header>
           <Weather/>
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
