import React, { useState } from 'react';
import './calculator.css';
import { useSelector, useDispatch } from 'react-redux';
import { setInput } from './Actions';


function Button(props) {
    const dispatch = useDispatch();

    function handlerFn() {
        const temp = props.input;

        if (props.id === '=') {
            return () => { console.log('Submitted') };
        }
        else if (props.id === 'Back') {
            return () => dispatch(setInput(temp.slice(0, -1)));
        }
        else if (props.id === "Clr") {
            return () => { dispatch(setInput('')) }
        }
        return () => { dispatch(setInput(temp.toString() + props.id)) };
    }

    return (
        <>
            <button type={(props.id === "=") ? 'submit' : 'button'}
                onClick={handlerFn()} >
                {props.id}
            </button>
            {(props.id === 'Clr' || props.id === ')' || props.id === '/') ? <br /> : ''}
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
                />
            ))}
        </div>
    );
}


export default function Main() {
    const input = useSelector(state => state.input);
    const dispatch = useDispatch();

    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log("Submit pressed");
                try {
                    dispatch(setInput(Function('"use strict";return ' + input)()));
                }
                catch (err) {
                    alert('Enter a valid expression');
                }
            }}>
                <input type="text" id="calculate" name="calculate" value={input}
                    onChange={(event) => { dispatch(setInput(event.target.value)) }} /><br />
                <GenerateButtons input={input} />
            </form>
        </div>
    )
}