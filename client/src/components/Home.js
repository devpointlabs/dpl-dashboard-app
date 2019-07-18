import React from "react"
import Quote from './quotes/RandQuote'
import Weather from './Weather'
import YouTube from './youtube/YouTube'
import CalApp from './calendar/CalApp'
import DisplayTweet from './twitter/DisplayTweet'
import { Header, Grid, Responsive,} from "semantic-ui-react"
import Clock from './Clock'
import DisplayTopic from './Topics/DisplayTopic'
import '../App.css'


const CurrentDate = () => {
  var tempDate = new Date();
  var date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' +  tempDate.getFullYear()
  const today = date;
  return (
   <div className= "App-header">{today}</div>
  );
}

const Home = () => (

  
  

  
<div style={{overflowX: "hidden"}}>
  <Grid style={{height: '100vh', width: '100vw', position: "absolute", marginTop: "0px", fontFamily: 'Karla',}} >
    <Grid.Row textAlign={'center'} style={{height: '30%',}} display="flex">
        <Grid.Column width={5} color="black" textAlign={"right"}>
          <CurrentDate/>
           <hr/>
          <DisplayTweet/>
        </Grid.Column>
        <Grid.Column  width={8} color="grey" >
           <div className= "App-header" inverted >Todays Topic:</div>
            <DisplayTopic  />
              <hr/>
           <Quote />
        </Grid.Column>
         <Grid.Column textAlign={'center'} width={3} color="black">
           <Clock/>
              <hr/>
           <Weather/>
        </Grid.Column>
     </Grid.Row>
      <Grid.Row style={{height: '70%'}} display="flex">
        <Grid.Column width={5} color="black">
          <CalApp />
        </Grid.Column>
        <Grid.Column width={11} color="black">
          <YouTube />
        </Grid.Column>
     </Grid.Row>
  </Grid>
</div>

    )
  
  



export default Home;
