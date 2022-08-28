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
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group className="mb-3">
                        <Form.Label> Username </Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" onChange={this.handleUsernameChange} value={this.state.username} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label> password </Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handlePasswordChange} value={this.state.password} />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Submit </Button>
                   
                </Form>
                <a href="/signup"> sing up </a>
            </div>
        )
    }
}