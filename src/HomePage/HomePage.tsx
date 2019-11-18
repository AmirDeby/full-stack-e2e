import * as React from 'react';

export interface IHomePageProps {
}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <div style={{margin:"25px"}}>
        <h2>Welcome Home</h2>
      </div>
    );
  }
}
