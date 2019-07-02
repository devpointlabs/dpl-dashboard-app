import React from "react"
import Quote from './quotes/Quote'
import Weather from './Weather'
import YouTube from './YouTube'
import styled from 'styled-components'
import { Header, Grid,  } from "semantic-ui-react";
import Clock from './Clock'

// I don't really like this function, I would like to Change the 
// month and day to the words instead of numbers
// if any one would like has a better way or idea, go with it. This is temp solution
function CurrentDate() {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear()
  const today = "Today's date:  "+date;
  return (
   <p>{today}</p>
  );
}

const Home = () => (
  <> 
    <Grid celled only={"large screen"} >
       <Grid.Row color="purple" inverted="true">
         <Grid.Column width={8}>
          <CurrentDate/>
          </Grid.Column>
          <Grid.Column textAlign={'right'} width={8}>
          <Clock/>
        </Grid.Column>
      </Grid.Row> 

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
            <Header color="purple" inverted>Weather</Header>
           <Weather/>
          </Grid.Column>
        </Grid.Row>

       <Grid.Row >
          <Grid.Column width={5} color="purple">
          <Header color="grey" inverted>Upcoming Events:</Header>
          <h3>Events</h3>
          <h3>Events</h3>
          <h3>Events</h3>

          </Grid.Column>
         <Grid.Column width={11} color="purple">
         <YouTube />
         </Grid.Column>
       </Grid.Row>

       <Grid.Row color="grey" inverted>
         <Grid.Column textAlign={'center'} width={16}>
          <Header color="purple" inverted>Twitter Feed Ticker Here?</Header>
          </Grid.Column>
      </Grid.Row>
     </Grid>
 </>
);



export default Home;
