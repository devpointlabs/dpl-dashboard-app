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
import Weather from "./components/Weather";

const App = () => (
<<<<<<< HEAD
  <>
=======

  <>

>>>>>>> e464cc025f7226aca104642cdef8cf97ad894ef4
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
  </>
=======

  </>

>>>>>>> e464cc025f7226aca104642cdef8cf97ad894ef4
);

export default App;
