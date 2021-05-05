import React from 'react';

function Login(){

    return(
        <div>

            <div className="container" >
                <a href="#" className="d-flex my-3" style={{textDecoration:'none', color:'#00a3da', fontSize:'17px'}}>
                    <i className="material-icons my-auto" style={{fontSize:'17px'}}>keyboard_backspace</i>
                    <span className="mx-1">Back To Previous</span>
                </a>
            </div>

            <div className="myBox container py-5">
                <div className="row">
                    <div className="col-md-4 myProfilePic">
                        <div className="text-center "><i className="material-icons" style={{fontSize:'200px', color:'#ace3f5'}}>account_circle</i></div>
                        <p className="text-center">Update Photo</p>
                    </div>
                    <div className="col-md-8 myEnterInfo">
                        <h2 className="pb-5">Hi, Dave Lambert</h2>
                        <form className="form-floating">
                        <input type="number" className="form-control" id="hisCode" placeholder="name@example.com" defaultValue="7425" />
                        <label htmlFor="hisCode">Code</label>
                        </form>
                        <hr />
                        <form className="form-floating">
                        <input type="text" className="form-control" id="firstName" placeholder="Your Name" defaultValue="Dave" />
                        <label htmlFor="firstName">First Name</label>
                        </form>
                        <hr />
                        <form className="form-floating">
                        <input type="text" className="form-control" id="lastName" placeholder="Your Last Name" defaultValue="Lambert" />
                        <label htmlFor="lastName">Last Name</label>
                        </form>
                        <hr /> 
                        <form className="form-floating">
                        <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com" defaultValue="dave.lambert@gmail.com" />
                        <label htmlFor="emailAddress">E-mail</label>
                        </form>
                        <hr />
                        <form className="form-floating">
                        <input type="text" className="form-control" id="mobileNumber" placeholder="Mobile Number" defaultValue="+44 12345678" />
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        </form>
                        <hr />
                        <a className="mySave" href="/cart">Save</a>
                        <button className="myCancel">Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;




















