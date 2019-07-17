import React from "react";
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu, } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";


class Navbar extends React.Component {

  state = {
    show: false,
  }

  rightNavItems = () => {
    const {
      auth: { user, handleLogout },
      location
    } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            onClick={() => handleLogout(this.props.history)}
          />
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              id="login"
              name="login"
              active={location.pathname === "/login"}
            />
          </Link>
          <Link to="/register">
            <Menu.Item
              id="register"
              name="register"
              active={location.pathname === "/register"}
            />
          </Link>
        </Menu.Menu>
      );
    }
  };

  handleToggle = () => {
    this.setState(state => ({
      show: !state.show
    }))
  }

  render() {
    if (this.state.show) {
    return (
      <div >
        <Menu pointing secondary>
        <button onClick={this.handleToggle}>
          Toggle Navbar
        </button>
          <Link to="/">
            <Menu.Item
              name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            />
          </Link>
//           {/* <Link to="/Youtube">
//             <Menu.Item
//               name="Youtube"
//               id="Youtube"
//               active={this.props.location.pathname === "/youtube"}
//             />

          </Link>
          <Link to="/quotes">
            <Menu.Item
              name="Quotes"
              id="Quotes"
              active={this.props.location.pathname === "/quotes"}
            />
          </Link>
          <Link to="/twitter">
            <Menu.Item
              name="Twitter"
              id="Twitter"
              active={this.props.location.pathname === "/twitter"}
            />
          </Link>
          <Link to='/topics'>
            <Menu.Item 
              name="Topics"
              id="Topics"
              active={this.props.location.pathname === "/topics"}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    );
    }
    else 
      return (
        <button onClick={this.handleToggle}>
        </button>
      )
  }
}


export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Navbar {...this.props} auth={auth} />}
      </AuthConsumer>
    );
  }
}

export default withRouter(ConnectedNavbar);


