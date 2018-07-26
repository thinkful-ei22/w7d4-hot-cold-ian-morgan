import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  let button = <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>

  if(props.currentGuess === props.target){
    button = '';
  }



  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
        <input type="text" name="userGuess" id="userGuess"
            className="text" maxLength="3" autoComplete="off"
            placeholder="Enter your Guess" required />
        {button}
    </form>
);
};

