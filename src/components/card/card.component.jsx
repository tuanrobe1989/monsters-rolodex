import React from 'react';
import './card.styles.css';

export const Card = props => {
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}.png?set=set2size=180X180`}/>
            <h2 key={props.monster.id}>{props.monster.name}</h2>
            <p>{ props.monster.email }</p>
        </div>
    )
}