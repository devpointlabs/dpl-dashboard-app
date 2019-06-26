import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import YTApp from "./components/youtube/YTApp"
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
<<<<<<< HEAD
  <Fragment>
=======
  <>
>>>>>>> 73e3a502f8beed57341317d4cff79597b6bfd876
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/youtube" component={YTApp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
<<<<<<< HEAD
  </Fragment>
=======
  </>
>>>>>>> 73e3a502f8beed57341317d4cff79597b6bfd876
);

export default App;
