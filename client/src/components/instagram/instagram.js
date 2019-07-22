import React from 'react'
import axios from 'axios' 
import { Grid, Image } from 'semantic-ui-react'
import dplmtn from '../../images/DplMtn.jpg'
import styled from 'styled-components'

// { images.map(image => 
//   <Image 
//   className="image"
//   data-key={image}
//   src={image.images.thumbnail.url}
//   key={image.id}
//   width={image.width}
//   height={image.height}
//    />
//   )}
// <Image 
// src={dplmtn} 
// width= "150px"
// height="150px"
// />

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
  // const pictures = images.forEach((image)=>console.log(image.thumbnail.url,image.id))
  //  console.log(this.state.images[0]
  return (
    <Grid>
    <Grid.Row columns={6} style={{padding: "0px"}}>
     
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={this.state.images[0]}
        width="150px"
        height="150px"
        padding="0px" 
        />
      </Grid.Column>
  
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={dplmtn}
        width="150px"
        height="150px"
        padding="0px" />
      </Grid.Column>
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={dplmtn}
        width="150px"
        height="150px"
        padding="0px" />
      </Grid.Column>
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={dplmtn}
        width="150px"
        height="150px"
        padding="0px" />
      </Grid.Column>
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={dplmtn}
        width="150px"
        height="150px"
        padding="0px" />
      </Grid.Column>
      <Grid.Column style={{ padding: "0px 0px"}}>
        <Image 
        src={dplmtn}
        width="150px"
        height="150px"
        padding="0px" />
      </Grid.Column>
    </Grid.Row>
   
   
  </Grid>  
    )
  }
}

export default Instagram