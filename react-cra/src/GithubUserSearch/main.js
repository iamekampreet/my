//This file will return the function that is going to get rendered.
import React, { useState } from 'react';
import './myCss.css';

function Card(props) {
    return (
        <div>
            <br /><br />
            <b>Login: </b><span>{props.profile.login}</span>
            <br />
            <img height="200px" width="200px" src={props.profile.avatar_url} alt="Profile"></img>
            <br />
            <b>Name:</b><span>{props.profile.name}</span>
            <br />
            <b>Company:</b><span>{props.profile.company}</span>
        </div>
    )
}

function ListOfCards(props) {
    return (
        <div>
            {props.profiles.map(profile => (
                <Card key={profile.id} profile={profile} />
            ))
            }
        </div>
    )
}

export default function Main() {

    const [profiles, setProfiles] = useState([]);
    const [enteredValue, setEnteredValue] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('Submit was pressed');

        const newProfile = await fetch(`https://api.github.com/users/${enteredValue}`);
        const value = await newProfile.json();

        if (value.message == 'Not Found') return;
        for (let profile of profiles) {
            if (value.id === profile.id) {
                console.log(value.name);
                return;
            }
        }
        setProfiles(() => { return ([].concat(value).concat(profiles)) });
    };

    return (
        <div>
            <h1>Github User Search</h1>
            <form onSubmit={submitHandler}>
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
            <ListOfCards profiles={profiles} />
        </div>
    )
}

//The api that i had used:
// https://api.github.com/users/tj