import * as React from 'react';
import { connect } from 'react-redux';
import { Login } from '../Login/Login';
import Badge from 'react-bootstrap/Badge'
import { Redirect } from 'react-router';
import Button from 'react-bootstrap/Button';
import { getSecret } from '../actions';
import { IState } from '../reducer';

export interface IMembersAreaProps {
    isLogged: boolean,
    getSecret(): void,
    secret: string,
}

class _MembersArea extends React.Component<IMembersAreaProps> {
    public render() {
        const { isLogged, getSecret,secret } = this.props;
        
        if (!isLogged) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                <h1 style={{ margin: "25px" }}>
                    <Badge pill variant="dark">
                        Member's Area
                      </Badge>
                </h1>
                <div>
                    <Button onClick={getSecret}>Get Your Secret</Button>
                </div>
                <div>
                    <h3>{secret}</h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => ({
    isLogged: state.isLogged,
    secret: state.secret,
})

const mapDispatchToProps = {
    getSecret,
}


export const MembersArea = connect(
    mapStateToProps,
    mapDispatchToProps,
)(_MembersArea)