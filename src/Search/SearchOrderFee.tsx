import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { getOrderFee } from '../actions';


export interface ISearchOrderFeeProps {
    getOrderFee(number:number): void ,
}

interface ISearchOrderFeeState {
    number: number,
}




class _SearchOrderFee extends React.Component<ISearchOrderFeeProps, ISearchOrderFeeState> {
    state: ISearchOrderFeeState = {
        number: 0,
    }

    onSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const { number } = this.state;
        const { getOrderFee} = this.props

        getOrderFee(number);

    }

    onChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { value } = e.target;
        const parstValue = parseInt(value)

        this.setState({ number: parstValue})
    }

    public render() {
        const { number } = this.state
        return (
            <div>
                <h2 style={{ margin: "25px" }}><u>Search Order By Shipping Fee</u></h2>
                <Form onSubmit={this.onSubmit} >
                    <input style={{ marginRight: "15px" }} value={number}
                        onChange={this.onChangeNumber} placeholder="Search order Fee" ></input>
                    <button type="submit" >Search order Fee </button>
                </Form>

                <div style={{ margin: "25px" }}>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getOrderFee,
}



export const SearchOrderFee = connect(
    undefined,
    mapDispatchToProps
)(_SearchOrderFee);
