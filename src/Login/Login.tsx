import * as React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { logIn } from '../actions';
import { async } from 'q';
import Axios from 'axios';

export interface ILoginProps {
    logIn(): void;
}

class _Login extends React.Component<ILoginProps> {
    onSubmit = async (e: React.FormEvent) => {
        const { logIn } = this.props;
        e.preventDefault();
        const response = await Axios.post('http://localhost:4000/login', {
           
        })
        logIn();

    }

    public render() {
        return (
            <Form style={{ margin: "20px" }} onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control style={{ width: "450px", margin: "auto" }} placeholder="Enter User Name" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{ width: "450px", margin: "auto" }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Stay Login All day" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
            </Button>
            </Form>
        );
    }
}

// we can use a short version of mapDispatchToProps, which is an object (and not a function)
// the short version automatically wraps each value in the object with a call to dispatch
const mapDispatchToProps = {
    logIn,
}

/* equivalent to:
const mapDispatchToProps = (dispatch) => ({
    logIn: () => dispatch(logIn()),
});
*/

export const Login = connect(
    undefined,
    mapDispatchToProps,
)(_Login);