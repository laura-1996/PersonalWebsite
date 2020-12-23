import React, { useState, useEffect } from 'react';

export default function Counter (props) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Hai cliccato ${counter} times`;
    });
    
    return (
        <div>
            <h2>Hai cliccato {counter} volte</h2>
            <button onClick={() => setCounter(counter + 1 )}>
                Non Cliccarmi
            </button>
        </div>
    );
}