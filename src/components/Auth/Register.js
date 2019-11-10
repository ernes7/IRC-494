import React from 'react';
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
  } from "semantic-ui-react";

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      };
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSubmit = event => {
        event.preventDefault(); //prevent reload
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          //promise then
          .then(createdUser => {
            console.log(createdUser);
          })
          .catch(err => {  //error handling
            console.error(err);
          });
      };
    render() {
        const { username, email, password, passwordConfirmation } = this.state;

        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon color="green" textAlign="center">
                    <Icon name="comments outline" color="green" />
                    Register for Ernesto-IRC
                </Header>
                <Form onSubmit={this.handleSubmit} size="large">
                    <Segment stacked>
                    <Form.Input
                        fluid
                        name="username"
                        icon="user"
                        iconPosition="left"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={username}
                        type="text"
                    />
    
                    <Form.Input
                        fluid
                        name="email"
                        icon="mail"
                        iconPosition="left"
                        placeholder="Email Address"
                        onChange={this.handleChange}
                        value={email}
                        type="email"
                    />
    
                    <Form.Input
                        fluid
                        name="password"
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={password}
                        type="password"
                    />
    
                    <Form.Input
                        fluid
                        name="passwordConfirmation"
                        icon="repeat"
                        iconPosition="left"
                        placeholder="Password Confirmation"
                        onChange={this.handleChange}
                        value={passwordConfirmation}
                        type="password"
                    />
    
                    <Button color="green" fluid size="large">
                        Submit
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    Already a user? <Link to="/login">Login</Link>
                </Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Register;