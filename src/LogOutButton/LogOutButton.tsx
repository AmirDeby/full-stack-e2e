import * as React from 'react';
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { logOut } from '../actions'

export interface ILogOutButtonProps {
    logOut(): void;
}

class _LogOutButton extends React.Component<ILogOutButtonProps> {
    
    public render() {
        const { logOut } = this.props
        return (
            <div>
                <Button onClick={logOut} style={{ marginLeft: "50px" }} >Sign Out</Button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    logOut,
}

export const LogOutButton = connect(
    undefined,
    mapDispatchToProps
)
    (_LogOutButton)

