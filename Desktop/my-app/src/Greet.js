import React from 'react';
import './Greet.css'

function Greet({name,age, address, school}) {
    console.log(name, 'name')
    return(
        <div className='greeting-card'>
            <h1>Hello {name}</h1>
            <p>I am {age} years old </p>
            <p>I stay at {address}</p>
            <p>My school is {school}</p>
        </div>
    )
}


export default Greet;


// theory questions and answers
// JSX is used for combining or concartnating javascript and html code together
//  by the use of callybrackets{}

// hooks are used as onclics for website buttons to change the value