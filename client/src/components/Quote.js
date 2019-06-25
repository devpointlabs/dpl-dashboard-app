import React from 'react'

class Quote extends React.Component{
  constructor(){
    super();
    this.state = "";
    
  }
  
  componentDidMount(){
    
    fetch ("https://quotes.rest/quote/random")
    .then(res => {
      this.setState
      return res
    }) 
  }
  
  render(){
    return (
      <div>{this.state}</div>
    )
  }
}

export default Quote