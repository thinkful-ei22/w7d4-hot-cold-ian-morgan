import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    

    function heatCheck(curGuess, target) {
        let feedback;
        const difference = Math.abs(target - curGuess)
        switch(true){
            case(!curGuess):
                return feedback = 'Make a Guess!';
            case (difference === 0):
                return feedback = 'WINNER WINNER';
            case (difference <= 5):
                return feedback = 'Really Hot';
            case (difference <= 15):
                return feedback = 'Hot';
            case (difference <= 25):
                return feedback = 'Warm';
            case (difference > 25):
                return feedback = 'Cold';
        }
    }
    
    
    return (
        <section>
            <h2 id="feedback">{heatCheck(props.feedback, props.target)}</h2>
            <GuessForm handleSubmit={props.handleSubmit}/>
        </section>
    );
}

