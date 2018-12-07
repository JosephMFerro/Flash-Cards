import React from 'react';
import {Button, Segment, Icon} from 'semantic-ui-react';

class Card extends React.Component {
  render() {
    return(
      <Segment 
        secondary
        padded = "very" 
        textAlign = "center" 
        style = {{marginRight: "300px", marginLeft: "300px"}}
      >
        <h3>{this.props.front}</h3>
        <br/>
        <Button icon color = "blue">
          <Icon name = "redo alternate" style = {{paddingLeft: "27px", paddingRight: "40px"}}/>
        </Button>
        <Button icon color = "blue">
          <Icon name = "pencil"/>
        </Button>
        <Button icon color = "red" onClick={() => this.cards.remove(this.cards.id)} >
          <Icon name = "trash" />
        </Button>
      </Segment>
    )
  }
};

export default Card;