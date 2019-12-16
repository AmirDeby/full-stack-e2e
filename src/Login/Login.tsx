import * as React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { logIn } from '../actions';
import { IState } from '../reducer';

export interface ILoginProps {
    logIn(userName: string, password: string): void;
    isLogged: boolean;
}

interface ILoginState {
    userName: string,
    password: string,

}


class _Login extends React.Component<ILoginProps, ILoginState> {
    state: ILoginState = {
        userName: "",
        password: "",
    }

    onSubmit = async (e: React.FormEvent) => {
        const { logIn } = this.props;
        const { password, userName } = this.state
        e.preventDefault();
        logIn(userName, password);
    }

    generateOnChangeHandler = (fieldName: keyof ILoginState) => {
        return (e: React.ChangeEvent<HTMLInputElement>): void => {
            const { value } = e.target;
            this.setState({
                [fieldName]: value
            } as any);
        }
    }

    public render() {
        const { password, userName } = this.state
        const { isLogged } = this.props;
        if (isLogged) {
            return <Redirect to="/" />;
        }

        return (

            <Form style={{ margin: "20px" }} onSubmit={this.onSubmit}>
                <h2 style={{ margin: "25px" }}>
                    <Badge variant="dark">Login Page</Badge>
                </h2>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>User Name</Form.Label> */}
                    <Form.Control onChange={this.generateOnChangeHandler('userName')}
                        value={userName}
                        style={{ width: "450px", margin: "auto" }}
                        placeholder="Enter User Name" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control onChange={this.generateOnChangeHandler('password')}
                        value={password}
                        style={{ width: "450px", margin: "auto" }}
                        type="password" placeholder="Password" />
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

const mapStateToProps = (state: IState) => ({
    isLogged: state.isLogged,
})

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
    mapStateToProps,
    mapDispatchToProps,
)(_Login);