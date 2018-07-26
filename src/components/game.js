import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

const generateTarget = function(){
  return Math.ceil(Math.random() * 100)
};


export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          oldGuesses: [],
          target: generateTarget(),
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        let curGuess = parseInt(e.target.userGuess.value);
        e.target.userGuess.value = '';
        if(isNaN(curGuess)){
          alert('Guess must be a number');
        } else if (curGuess < 1 || curGuess > 100){
          alert('Number is between 1 and 100');
        } else {
          this.setState({oldGuesses: this.state.oldGuesses.concat(curGuess)})
        }
    }

    handleNewGame(){
      this.setState({oldGuesses: [], target: generateTarget()});
    }

    render(){
    return (
        <div>
            <Header handleNewGame={this.handleNewGame}/>
            <GuessSection
                handleSubmit={this.handleSubmit}
                currentGuess={this.state.oldGuesses[this.state.oldGuesses.length - 1]}
                target={this.state.target} 
                />
            <GuessCount count={this.state.oldGuesses.length} />
            <GuessList guesses={this.state.oldGuesses} />
        </div>
    );
}
}

