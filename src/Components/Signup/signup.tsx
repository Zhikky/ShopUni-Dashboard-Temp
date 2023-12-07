import React, { useState } from "react";
import "./signup.scss";

import icon from "../images/FAvicon.png"

function SignUp() {

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Any additional logic can be added here if needed
    };
    return (
        <div className="signup_container">

            <div className="sign_icon">
                <img src={icon} alt="ShopUnI Icon"/>
            </div>

            <div className="signup">
                <h1>Login to your Account</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="signup_passowrd"> 
                        <label htmlFor="password">Enter Password</label>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" />
                        <i className={`fa-solid password-toggle-icon ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                            onClick={handleTogglePassword}
                        >
                        </i>
                    </div>

                    <button>Next</button>

                    <div>
                        <p>New here?  <a href="#" target="_blank" >Sign up now</a></p>
                        <a href="#" target="_blank" >Forgot Password?</a>
                    </div>
                </form>


            </div>
        </div>
    )
};

export default SignUp;