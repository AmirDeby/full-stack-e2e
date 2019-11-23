import * as React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { async } from 'q';
import { Link } from 'react-router-dom';


export interface IRegisterProps {

}
interface IRegisterState {
    userName: string,
    firstName: string,
    lastName: string,
    password: string,
    isRegistered: boolean,

}


export default class Register extends React.Component<IRegisterProps, IRegisterState> {
    state: IRegisterState = {
        firstName: "",
        lastName: "",
        password: "",
        userName: "",
        isRegistered: false,
    }

    generateOnChangeHandler = (fieldName: keyof IRegisterState) => {
        return (e: React.ChangeEvent<HTMLInputElement>): void => {
            const { value } = e.target;
            this.setState({
                [fieldName]: value
            } as any);
        }
    }

    onSubmit = async (e: React.FormEvent) => {
        const { userName, lastName, password, firstName } = this.state
        e.preventDefault();
         const response = await axios.post('http://localhost:4000/register', {
            userName,
            firstName,
            password,
            lastName
         });
        
        if (response.status === 200) {
            this.setState({
                isRegistered:true,
            })
        }
    }


    public render() {

        const { password, lastName, firstName, userName ,isRegistered} = this.state;

        
        return (
            <Form onSubmit={this.onSubmit}>
                <h2 style={{ margin: "25px" }}><u><b> 
                    <Badge pill variant="dark">Registration Page</Badge>
                </b></u></h2>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control style={{ width: "450px", margin: "auto" }}
                            onChange={this.generateOnChangeHandler('password')}
                            value={password} type="password" placeholder="🔑 Password 🔑" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    {/* <Form.Label>User Name</Form.Label> */}
                    <Form.Control style={{ width: "450px", margin: "auto" }}
                        onChange={this.generateOnChangeHandler('userName')}
                        value={userName} placeholder="Choose Your Unique UserName 🤷‍♀️🤷‍♂️" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    {/* <Form.Label>First Name</Form.Label> */}
                    <Form.Control style={{ width: "450px", margin: "auto" }}
                        onChange={this.generateOnChangeHandler('firstName')}
                        value={firstName} placeholder="First Name" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="Last Name">
                        {/* <Form.Label>Last Name</Form.Label> */}
                        <Form.Control style={{ width: "450px", margin: "auto" }}
                            onChange={this.generateOnChangeHandler('lastName')}
                            value={lastName} placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                 </Button>
                {isRegistered
                    ?
                    <div style={{ margin:"10px"}}>
                        <h2>Register Complete</h2>
                        <Link to="/login">Link to Login</Link>
                    </div>
                    :
                    null
                }
            </Form>
        );
    }
}
