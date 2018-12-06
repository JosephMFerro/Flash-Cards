import React from "react";
import { Form, } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { front: "", back: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ front: "", back: "" });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render() {
    return (
      // I know this is a poor way to align an element 
      <Form onSubmit={this.handleSubmit} style={{ marginLeft: "15em" }}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            placeholder="Front" 
            name="front" 
            value={this.state.front} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            placeholder="Back" 
            name="back" 
            value={this.state.back} 
            onChange={this.handleChange}
          />
          <Form.Button color = "blue" style={{ marginTop: "0.5px", padding: "11.4px"}}>
            Create
          </Form.Button>
        </Form.Group>
      </Form>
    )  
  }
}

export default CardForm;