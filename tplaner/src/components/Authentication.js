import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Authentication = () => {
    const [signupStatus, setSignupStatus] = useState(false); 

    
    // checking wheather user have account or not

    const changeStatus = ()=>{
        if (signupStatus === false) {
            setSignupStatus(true);
        }
        else{
            setSignupStatus(false);
        }
    }
    

    //when don't have account
    if (signupStatus === false) {
        return (
            <div className="authentication">
                <div className="authenticationContainer">
                <Signup />
                <p>Already have a account? <span onClick={changeStatus}>Click here</span></p>
                </div>
            </div>
        )
    }
    // when have a account
    else {
        return (
            <div className="authentication">
                <div className="authenticationContainer">
                <Login />
                <p>Doesn't have a account? <span onClick={changeStatus}>Click here</span></p>
                </div>
            </div>
        )
    }
}

export default Authentication;