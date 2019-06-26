import React from 'react'
import axios from 'axios'



class YouTube extends React.Component {
 state = { video: [] }



 componentDidMount() {
  axios.get("")
  .then( res => this.setState({ video: res.data, }) );
 
}
  

  
  render() {
  return(
    <iframe 
           title="YT"
           id="ytplayer" 
           type="text/html" 
           width="700" 
           height="400"
           src="https://www.youtube.com/embed?listType=playlist&list=PL50JhZpTWVPIbp_XsZ5mZKSbS19wYvOoD&autoplay=1&loop=1&modestbranding=1"
           frameBorder="0">
           </iframe>
  
  )
  }

}

export default YouTube
