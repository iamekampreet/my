//This file will return the function that is going to get rendered.
import React, { useState } from 'react';
import './myCss.css';

export default function Main() {
    const [enteredValue, setEnteredValue] = useState('');
    return (
        <div>
            <h1>Github User Search</h1>
            <form onSubmit={event => {
                event.preventDefault();
                console.log('Submit was pressed');
            }}>
                <label htmlFor="searchUser">Enter Username</label>
                <input
                    type="text"
                    id="searchUser"
                    name="searchUser"
                    value={enteredValue}
                    onChange={(event) => {
                        setEnteredValue(event.target.value);
                    }}
                />
                <button type="submit" >Submit</button>
            </form>
            <p>{enteredValue}</p>
        </div>
    )
}


// https://api.github.com/users/tj