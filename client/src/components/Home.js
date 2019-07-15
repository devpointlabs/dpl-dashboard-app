import React from "react"
import Quote from './quotes/RandQuote'
import Weather from './Weather'
import YouTube from './youtube/YouTube'
import CalApp from './calendar/CalApp'
// import styled from 'styled-components'
import { Header, Grid, Responsive } from "semantic-ui-react";
import Clock from './Clock'

// Playing with the Responsive tag.Not sure how it will look on the big screen

// I don't really like this function, I would like to Change the 
// month and day to the words instead of numbers
// if any one would like to or has a better way or idea, go with it. This is a temp solution
function CurrentDate() {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear()
  const today = "Today's date:  "+date;
  return (
   <Responsive as="h2">{today}</Responsive>
  );
}


const Home = () => (
  <> 
    <Grid celled style={{height: '100vh', width: '100vw',}} >
       <Grid.Row color="black" style={{height: '6%'}}>
         <Grid.Column width={8}>
           <CurrentDate />
            </Grid.Column>
            <Grid.Column textAlign={'right'} width={8}>
             <Clock />
          </Grid.Column>
      </Grid.Row> 

        <Grid.Row width={8} style={{height: '30%'}} display="flex">
          <Grid.Column width={4} color="grey" >
          <Header color="black" inverted>Quote of Day:</Header>
          <Quote />
          </Grid.Column>

          <Grid.Column width={8} color="grey">
             <Header color="black" inverted>Todays Topic:</Header>
             add your component here
          </Grid.Column>

          <Grid.Column width={4} color="grey">
            <Header color="black" inverted>Weather</Header>
           <Weather/>
          </Grid.Column>
        </Grid.Row>

       <Grid.Row style={{height: '60%'}}>
          <Grid.Column width={5} color="black">
          <CalApp />
          </Grid.Column>
         <Grid.Column width={11} color="black">
  
         <YouTube />
         </Grid.Column>
       </Grid.Row>

       {/* <Grid.Row color="grey" style={{height: '14%'}}>
         <Grid.Column textAlign={'center'} width={16}>
          <Header color="black">Latest Tweet Here</Header>
          </Grid.Column>
      </Grid.Row> */}
     </Grid>
 </>
);



export default Home;
