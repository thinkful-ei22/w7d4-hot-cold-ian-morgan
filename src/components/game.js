import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            oldGuesses: [],
            target: Math.ceil(Math.random() * 100),
            won: false,
            temp: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        let curGuess = e.target.userGuess.value;
        this.setState({oldGuesses: this.state.oldGuesses.concat(curGuess)})
    }


    render(){
    return (
        <div>
            <Header />
            <GuessSection 
                handleSubmit={this.handleSubmit}
                feedback={this.state.oldGuesses[this.state.oldGuesses.length - 1]}
                target={this.state.target} />
            <GuessCount count={this.state.oldGuesses.length} />
            <GuessList guesses={this.state.oldGuesses} />
        </div>
    );
}
}

