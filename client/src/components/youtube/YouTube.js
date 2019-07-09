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
           width="1080" 
           height="450"
           src="https://www.youtube.com/embed/n5uz7egB9tA?autoplay=1&loop=1&modestbranding=1"
           frameBorder="0">
           </iframe>
  
  )
  }

}
// ChillHop "https://www.youtube.com/embed/n5uz7egB9tA?autoplay=1&loop=1&modestbranding=1"
// DPL Youtube PlayList: https://www.youtube.com/embed?listType=playlist&list=PL50JhZpTWVPIbp_XsZ5mZKSbS19wYvOoD&autoplay=1&loop=1&modestbranding=1
export default YouTube
