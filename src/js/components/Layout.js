import React from 'react';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Welcome',
            subtitle: 'React Bootstrap'
        };
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
            </div>
        );
    }
}
