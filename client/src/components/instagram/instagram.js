import React, { Fragment } from 'react'
import axios from 'axios' 

class Instagram extends React.Component {
state = {
  images: {},

}


componentDidMount() {
  const username = "nomadic_boots"
  axios.get('https://api.github.com/users/' + username)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });

}

render() {
  return (
    <div>Test</div>
  )
}

}
 
export default Instagram