import React, { useState } from "react";
import "../sign.scss";
import "./signin.scss";

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
        <div className="sign_container">

            <div className="sign_icon">
                <img src={icon} alt="ShopUnI Icon" />
            </div>

            {/* The class name Sign and other classnames have their scss designs in the "sign.scss" directory while the class name "sign_in" has its related deisgns in the signin.scss directory */}
            <div className="sign sign_in">
                <h1>Login to your Account</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="sign_passowrd">
                        <label htmlFor="password">Enter Password</label>
                        <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" />
                        <i className={`fa-solid password-toggle-icon ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                            onClick={handleTogglePassword}
                        >
                        </i>
                    </div>

                    <button>Next</button>

                    <div className="form_bottom_links">
                        <p>New here?  <a href="#" target="_blank" >Sign up now</a></p>
                        <a href="#" target="_blank" >Forgot Password?</a>
                    </div>
                </form>


            </div>
        </div>
    )
};

export default SignUp;