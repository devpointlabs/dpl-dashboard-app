import React from 'react'
import axios from 'axios'



class YouTube extends React.Component {
 state = { video: [] }



 componentDidMount() {
  axios.get("https://www.youtube.com/embed/bebuiaSKtU4?autoplay=1&origin=http://example.com")
  .then( res => this.setState({ video: res.data, }) );
  debugger
}
  

  
  render() {
  return(
    <iframe 
           title="YT"
           id="ytplayer" 
           type="text/html" 
           width="700" 
           height="400"
           src="https://www.youtube.com/embed/bebuiaSKtU4?autoplay=1&origin=http://example.com"
           frameborder="0">
           </iframe>
  
  )
  }

}

export default YouTube
