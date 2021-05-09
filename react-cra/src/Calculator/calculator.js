import React, { useState } from 'react';
import './calculator.css';

function Button(props) {
    function align() {
        if (props.id === 'Clr' || props.id === ')' || props.id === '/') {
            return <br />;
        }
    }

    function handlerFn() {
        if (props.id === '=') {
            return () => { console.log('Submitted') };
        }
        else if (props.id === 'Back') {
            return () => { props.setInput(props.input.slice(0, -1)) }
        }
        else if (props.id === "Clr") {
            return () => { props.setInput('') }
        }
        return () => { props.setInput(props.input + props.id) };
    }

    return (
        <>
            <button type={(props.id === "=") ? 'submit' : 'button'}
                onClick={handlerFn()} >
                {props.id}
            </button>
            {align()}
        </>
    );
}

function GenerateButtons(props) {
    const buttons = [1, 2, 3, 'Back', 'Clr', 4, 5, 6, '(', ')', 7, 8, 9, '*', '/', '.', 0, '=', '+', '-'];
    return (
        <div>
            {buttons.map((button) => (
                <Button
                    key={button}
                    id={button}
                    input={props.input}
                    setInput={props.setInput}
                />
            ))}
        </div>
    );
}


export default function Main() {
    const [input, setInput] = useState('');

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log("Submit pressed");
                try {
                    setInput(Function('"use strict";return ' + input)());
                }
                catch (err) {
                    alert('Enter a valid expression');
                }
            }}>
                <input type="text" id="calculate" name="calculate" value={input}
                    onChange={(event) => { setInput(event.target.value) }} /><br />
                <GenerateButtons input={input} setInput={setInput} />
            </form>
            <p>{ }</p>
        </div>
    )
}