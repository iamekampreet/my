//This file will return the function that is going to get rendered.
import React,{useState} from 'react';
import './myCss.css';



export default function Main(){
    const [enteredValue,setEnteredValue]= useState('');
    return(
        <div>
            <h1>Github User Search</h1>
            <form >
            <label htmlFor="searchUser">Enter Username</label>
            <input 
                type="text" 
                id="searchUser" 
                name="searchUser" 
                onChange={(event)=>{
                    setEnteredValue(event.target.value)
                    // console.log(enteredValue);
                    // console.log(event.target.value);
                }}
            />
            <input type="submit" value="Submit" 
                // onSubmit={event=>{
                //     setEnteredValue(event.target.value);
                //     console.log(enteredValue);
                // }}
            />
            </form>
            <p>{enteredValue}</p>
        </div>
    )
}


// https://api.github.com/users/tj