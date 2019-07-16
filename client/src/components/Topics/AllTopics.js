import React from "react"
import axios from 'axios'
import {Link, } from "react-router-dom"
import {Card, Grid, Button, Icon, Container, } from "semantic-ui-react"


class AllTopics extends React.Component {
state = { topics: [],   }

  componentDidMount() {
    axios.get("/api/topics")
      .then( res => { 
        this.setState({ topics: res.data })
     })
     .catch( err => {
       console.log(err.response)
     })
  }


  allTopics = () => {
    const {topics } = this.state
    if (topics.length <= 0)
    return <h2>No Topics Yet...</h2>
    return (
      
      <Grid style={{marginTop: "25px"}}>
      <Grid.Column>
        <Card.Group itemsPerRow={4}>
         { topics.map( topic => 
           <Card key={topic.id}>
            <Card.Content>
              <Card.Header>
               {topic.language}
              </Card.Header>
              <Card.Meta>
               {topic.body}
              </Card.Meta>
              <Card.Meta>
               {topic.date}
              </Card.Meta>
             
            </Card.Content>

         <Card.Content extra>
          <Button 
           color='red' 
           icon basic 
           onClick={() => this.destroyTopic(topic.id)}
           >
           <Icon name='trash' /> 
          </Button>

          <Link to={`/topics/${topic.id}/edit`}>
          <Button 
          color='blue' 
          icon basic 
          >
          <Icon name='pencil' />
          </Button>
          </Link>

          
          {/* <Button 
          color="green"
          basic
          onClick={() => this.currentTopic(topic.id)}
          >
          Daily Topic
          </Button> */}
         
         </Card.Content>
         </Card>
          )}
        </Card.Group>
        </Grid.Column>
      </Grid>
    )}

    currentTopic = (id) => {
      axios.put(`/api/current/${id}`)
        .then( ({ data }) => {
          const topics = this.state.topics.map( topic => {
            if (topic.id === id)
              return data
            return topic
          });
  
          this.setState({ topics });
        });
    }
  
    
    destroyTopic = (id) => {
      axios.delete(`/api/topics/${id}`)
      .then(res => {
        const {topics, } = this.state
        this.setState({topics: topics.filter(t => t.id !== id), })
      })
    }
    
    
    render() {
      return(
        
        <Container style={{marginTop: "25px"}}>
          <Link to="/topics/new">
           <Button inverted color="green">
            <Icon name="add" />
              Add a Topic!
            </Button>
          </Link>
        {this.allTopics()}
      </Container>
      
      )
    }
  }
  
  export default AllTopics
 