import React from "react"
import Quote from './Quote'
import Weather from './Weather'
import YouTube from './YouTube'
import { Header, Grid,  } from "semantic-ui-react";
import Clock from './Clock'

// I don't really like this function, I would like to Change the 
// month and day to the words instead of numbers
// if any one would like has a better way or idea, go with it. This is temp solution
function CurrentDate() {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + '-' +  tempDate.getFullYear()
  const today = "Today's date:  "+date;
  return (
   <p>{today}</p>
  );
}

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
          <CurrentDate/> <Clock/>

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
