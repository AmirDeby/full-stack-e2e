import * as React from 'react';
import { connect } from 'react-redux';
import { searchCities } from '../actions';
import { Cities } from '../Cities/Cities';
import Form from 'react-bootstrap/Form'

export interface ISearchProps {
    searchCities(keyword: string): void,
}

interface ISearchState {
    text: string,
}

class _Search extends React.Component<ISearchProps, ISearchState> {
    state: ISearchState = {
        text: "",
    }

    onSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        const { text } = this.state;
        const { searchCities } = this.props;
        searchCities(text);
    }

    onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.setState({ text: value })
    }

    public render() {
        const { text } = this.state
        return (
            <div>
                <h2 style={{ margin: "25px" }}><u>Search Cities By Name</u></h2>
                <Form onSubmit={this.onSubmit} >
                    <input style={{ marginRight: "15px" }} value={text}
                        onChange={this.onChangeText} placeholder="search your city" ></input>
                    <button type="submit" >Search Your City </button>
                </Form>

                <div style={{margin:"25px"}}>
                    <Cities/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    searchCities,
}


export const Search = connect(
    undefined,
    mapDispatchToProps,
)(_Search);