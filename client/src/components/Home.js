import React from "react"
import Quote from './quotes/RandQuote'
import Weather from './Weather'
import YouTube from './youtube/YouTube'
import CalApp from './calendar/CalApp'
import DisplayTweet from './twitter/DisplayTweet'
import { Header, Grid, Responsive, } from "semantic-ui-react"
import Clock from './Clock'
import DisplayTopic from './Topics/DisplayTopic'

const CurrentDate = () => {
  var tempDate = new Date();
  var date = (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
  const today = date;
  return (
    <Responsive as="h2">{today}</Responsive>
  );
}


class Home extends React.Component {

  state = {
    showInsta: false
  }

  handleInsta = () => {
    this.setState(state => ({
      showInsta: !state.showInsta
    }))
  }

  render() {
    if (this.state.showInsta) {
      return (

        <div style={{ overflowX: "hidden" }}>
        <Grid style={{ height: '100vh', width: '100vw', position: "absolute" }} margin="0px">


          <Grid.Row textAlign={'center'} style={{ height: '30%' }} display="flex">
            <Grid.Column width={5} color="black" textAlign={"left"}>
              <CurrentDate />
              <hr />
              <DisplayTweet />
            </Grid.Column>

            <Grid.Column width={8} color="grey" >
              <Header style={{ fontSize: "3em", }} color="black" inverted >Todays Topic:</Header>
              <DisplayTopic />
              <hr />
              <Quote />

            </Grid.Column>

            <Grid.Column textAlign={'center'} width={3} color="black">
              <Clock />
              <hr />
              <Weather />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ height: '70%' }}>
            <Grid.Column width={5} color="black">
              <CalApp />
              <button style={{ position: "absolute", zIndex: "1000", left: "150px", opacity: "0.0", cursor: "pointer", padding: "40px 40px" }}
                onClick={this.handleInsta} ></button>
            </Grid.Column>
            <Grid.Column width={11} color="black">
              <h1>Instagram API will go here</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div >
      )
    } else {
      return (
        <div style={{ overflowX: "hidden" }}>
          <Grid style={{ height: '100vh', width: '100vw', position: "absolute" }} margin="0px">


            <Grid.Row textAlign={'center'} style={{ height: '30%' }} display="flex">
              <Grid.Column width={5} color="black" textAlign={"left"}>
                <CurrentDate />
                <hr />
                <DisplayTweet />
              </Grid.Column>

              <Grid.Column width={8} color="grey" >
                <Header style={{ fontSize: "3em", }} color="black" inverted >Todays Topic:</Header>
                <DisplayTopic />
                <hr />
                <Quote />

              </Grid.Column>

              <Grid.Column textAlign={'center'} width={3} color="black">
                <Clock />
                <hr />
                <Weather />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{ height: '70%' }}>
              <Grid.Column width={5} color="black">
                <CalApp />
                <button style={{ position: "absolute", zIndex: "1000", left: "150px", opacity: "0.0", cursor: "pointer", padding: '40px 40px' }}
                  onClick={this.handleInsta} ></button>
              </Grid.Column>
              <Grid.Column width={11} color="black">
                <YouTube />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div >
      )
    }
  }
}



export default Home;
