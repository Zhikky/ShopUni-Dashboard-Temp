import React, { useState } from "react";
import "../sign.scss";
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
        <div className="sign_container">

            <div className="sign_icon">
                <img src={icon} alt="ShopUnI Icon" />
            </div>


            {/* The class name Sign and other classnames have their scss designs in the "sign.scss" directory while the class name "sign_up" has its related deisgns in the signup.scss directory */}
            <div className="sign sign_up">
                <h1>Sign up</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Enter Email</label>
                        <input type="email" placeholder="Email" name="email" />
                    </div>
                    <button>Send Code</button>

                    <div className="form_bottom_links">
                        <p>Already have an account?  <a href="#" target="_blank" >login here</a></p>
                    </div>
                </form>


            </div>
        </div>
    )
};

export default SignUp;