import React from 'react'
import axios from 'axios' 
import { Grid, Image } from 'semantic-ui-react'
import dplmtn from '../../images/DplMtn.jpg'
import styled from 'styled-components'
import posed from 'react-pose'


const Photo = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  
})

class Instagram extends React.Component {
  state = {
    images: [],
    isVisible: true,
    
    
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
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 6000)
  }
  
  


render() {
  const {images, isVisible } = this.state
  // const pictures = images.forEach((image)=>console.log(image.thumbnail.url,image.id))
   console.log(this.state.images[0])
   console.log(this.state.imagesj)
  return (
    <Grid>
    <Grid.Row columns={6} style={{padding: "0px", justifyContent: "center"}} >  
    { images.map(image => 
     <Image 
      className="image"
      data-key={image}
      src={image.images.standard_resolution.url}
      key={image.id}
      width="220px"
      height="200px"
      pose={isVisible ? 'visible' : 'hidden'}
   />
     )}
    </Grid.Row>
   
   
  </Grid>  
    )
  }
}

export default Instagram