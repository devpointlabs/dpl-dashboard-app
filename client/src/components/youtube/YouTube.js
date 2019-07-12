import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'



class YouTube extends React.Component {
 

  render() {
  return(
    <ResponsiveEmbed 
           className="videoContainer"
           title="YT"
           id="ytplayer" 
           type="text/html" 
           width="1920" 
           height="1080"
           src="https://www.youtube.com/embed/n5uz7egB9tA?autoplay=1&loop=1&modestbranding=1"
           frameBorder="0"
           allowFullScreen
           />
  
  )
  }

}





// 4k ratio settings below:
//width="1920" 
//height="1080"
//Two Channels 
// ChillHop "https://www.youtube.com/embed/n5uz7egB9tA?autoplay=1&loop=1&modestbranding=1"
// DPL Youtube PlayList: https://www.youtube.com/embed?listType=playlist&list=PL50JhZpTWVPIbp_XsZ5mZKSbS19wYvOoD&autoplay=1&loop=1&modestbranding=1
export default YouTube
