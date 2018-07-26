import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    

    function heatCheck(curGuess, target) {
        let feedback;
        const difference = Math.abs(target - curGuess)

        switch(true){
            case(!curGuess):
                feedback = 'Make a Guess!';
                break;
            case(typeof curGuess !== 'number'):
                feedback = 'Must enter a number';
                break;
            case(curGuess > 100 || curGuess < 1):
                feedback = 'Number is between 1 and 100';
                break;
            case (difference === 0):
                feedback = 'WINNER WINNER! Click NEW GAME to play again.';
                break;
            case (difference <= 5):
                feedback = 'Really Hot';
                break;
            case (difference <= 15):
                feedback = 'Hot';
                break;
            case (difference <= 25):
                feedback = 'Warm';
                break;
            case (difference > 25):
                feedback = 'Cold';
                break;
        }

      return feedback;

    }

    
    return (
        <section>
            <h2 id="feedback">{heatCheck(props.currentGuess, props.target)}</h2>
            <GuessForm handleSubmit={props.handleSubmit}
                  currentGuess={props.currentGuess}
                  target={props.target}
            />
        </section>
    );
}

