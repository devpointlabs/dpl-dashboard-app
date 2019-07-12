import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import YTApp from "./components/youtube/YTApp"
import CalApp from "./components/calendar/CalApp";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import QuoteShow from "./components/quotes/QuoteShow"
import QuoteForm from './components/quotes/QuoteForm'
import SingleQuote from './components/quotes/SingleQuote'
// import ProtectedRoute from "./components/ProtectedRoute";


const App = () => (

  <>

    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/youtube" component={YTApp} />
          {/* <ProtectedRoute exact path="/calendar" component={CalApp} /> */}
          <Route exact path="/calendar" component={CalApp} />
          <Route exact path="/quotes" component={QuoteShow} />
          <Route exact path="/quotes/new" component={QuoteForm} />
          <Route exact path="/quotes/:id" component={SingleQuote} />
          <Route exact path="/quotes/:id/edit" component={QuoteForm} />
          <Route exact path="/quotes/:id/edit" render={props => <QuoteForm edit {...props} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>

  </>

);

export default App;
