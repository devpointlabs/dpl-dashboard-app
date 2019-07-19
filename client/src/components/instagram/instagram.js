import React from 'react'
import axios from 'axios' 
import { Grid, } from 'semantic-ui-react'
import posed, {PoseGroup, } from 'react-pose'


const Image = posed.img({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
})

class Instagram extends React.Component {
state = {
  images: [],
  isVisible: false,
}

componentDidMount() {
  
  axios.get("https://api.instagram.com/v1/users/1341161557/media/recent/?access_token=1341161557.4dfa049.9df7c290ccaf45c9aacbb9ed4816d242")
  .then(res => {
    this.setState({images: res.data.data})
    console.log(res.data.data)
  })
  .catch( err => {
    console.log(err.response)
  })
  
}

render() {
  const {images } = this.state
  return (
   
      <Grid>
              <PoseGroup>
                { images.map(image => 
                    <Image 
                    className="image"
                    data-key={image}
                    src={image.images.thumbnail.url}
                    key={image.id}
                    width={image.width}
                    height={image.height} />
                    )}
              </PoseGroup>
            </Grid>
  )
}

}

export default Instagram