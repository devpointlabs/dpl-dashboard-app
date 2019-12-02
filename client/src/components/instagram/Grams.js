import React from 'react'
import axios from 'axios' 
import { Grid, Image } from 'semantic-ui-react'
import DplMtn from '../../images/DplMtn.jpg'



class Grams extends React.Component {
  state = {
    images: [],
    isVisible: true,
    
    
  }
  
  componentDidMount() { 
    axios.get(process.env.REACT_APP_IG_URL)
    .then(res => {
      this.setState({images: res.data.data})
    })
    .catch( err => {
      console.log(err.response)
    }) 

  }
  
  


render() {
  const {images, isVisible } = this.state
  // const pictures = images.forEach((image)=>console.log(image.thumbnail.url,image.id))
   console.log(this.state.images[0])
   console.log(this.state.images)
  return (
    <Grid>
    <Grid.Row columns={6} style={{padding: "0px", justifyContent: "center"}} >  
    { images.map(image => 
     <Image 
      className="image"
      data-key={image}
      src={image.images.standard_resolution.url}
      key={image.id}
      width="150px"
      height="150px"
   />
     )}
     
    </Grid.Row>
  </Grid>  
    )
  }
}

export default Grams