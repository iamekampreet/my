import React from 'react';
import {Helmet} from 'react-helmet';

export default function fun(){
    return(
        <div>
            <Helmet>
                <title>Hello Brother</title>

                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            </Helmet>
            {/* <div> */}
            <i className="material-icons my-auto" style={{fontSize:'170px'}}>keyboard_backspace</i>

            <p>This is paragraph</p>
            {/* </div> */}
        </div>

    )
}