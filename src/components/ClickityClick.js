// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {

    constructor() {
        super();

        this.state = {
            hasBeenClicked: false,
            count: 0
        };
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked,
                count: previousState.count + 1 
            }
        })
    }

    render(){
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked {this.state.count} times!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}