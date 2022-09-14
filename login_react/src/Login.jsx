import { Button, Form } from "react-bootstrap";
import { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = ({ username: "", password: "" });

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    the company logo goes here
                </div>

                <div>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="username" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username} />
                        </Form.Group>
                        <Form.Group className="mb-3">

                            <Form.Control type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password} placeholder="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Submit </Button>

                    </Form>
                    <a href="/signup"> sing up </a>
                </div>
            </div>
        )
    }
}

function fetchapi(){
    console.log("featching");
    fetch("http://localhost:3000/api/v1.0/login", {method:"get", mode:"cors"}).
    then(d=>{return d.json()})
    .catch(e=>console.log(e))
    .then(d=>console.log(d));

}
fetchapi();

// react hook 
