import React from 'react'

class Toggle extends React.Component{
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <div>
        {this.state.on && (
          null
        )}
        <button onClick={this.toggle()}>
          Toggle Navbar
        </button>
      </div>
    )
  }
}

export default Toggle