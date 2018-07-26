import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    let modal = <InfoModal handleInfo={props.handleInfo}/>
   
    if(props.displayInfo === false){
        modal = '';
    }
    
    return (
        <header>
            <TopNav handleNewGame={props.handleNewGame}
                    handleInfo={props.handleInfo}
            />
            {modal}
            <h1>HOT or COLD</h1>
        </header>
    );
};
