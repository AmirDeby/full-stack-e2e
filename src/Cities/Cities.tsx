import * as React from 'react';
import { connect } from 'react-redux';
import { statement } from '@babel/template';
import { IState } from '../reducer';

export interface ICitiesProps {
    cities: string[],
}


class _Cities extends React.Component<ICitiesProps> {
    public render() {
      const{cities} =this.props
        return (
        
      <div>
            {cities.map(city => <div>{city}</div> )}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({
    cities: state.cities
}) 

export const Cities = connect(
    mapStateToProps,
)(_Cities);
