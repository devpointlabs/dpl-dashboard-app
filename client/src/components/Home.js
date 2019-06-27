<<<<<<< HEAD
import React from "react";
import { Header, Grid, Image, } from "semantic-ui-react";
import Quote from './Quote';
=======
import React from "react"
import Quote from './Quote'
import Weather from './weather'
>>>>>>> e464cc025f7226aca104642cdef8cf97ad894ef4
import YouTube from './YouTube'
import { Header, Grid,  } from "semantic-ui-react";



const Home = () => (
<<<<<<< HEAD
  <>
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={4}>
          <Header>Quote of Day:<Quote /></Header>
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

=======

 

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


>>>>>>> e464cc025f7226aca104642cdef8cf97ad894ef4
);


const style = () => {
  
}
export default Home;
