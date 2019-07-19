import React from 'react'
import axios from 'axios' 
import {Image, Grid, } from 'semantic-ui-react'


class Instagram extends React.Component {
state = {
  images: [],

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
   
      <Grid className="instafeed">
                <Image.Group>
                { images.map(image => 
                    <Image 
                    src={image.images.thumbnail.url}
                    key={image.id}
                    width={image.width}
                    height={image.height} />
                    )}
                </Image.Group>
            </Grid>
  )
}

}
// {images.map( image =>
//   <Image key={image.id}>{images}</Image>
//   )
// }
export default Instagram