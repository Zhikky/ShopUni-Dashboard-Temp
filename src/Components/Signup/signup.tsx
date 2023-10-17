import React from "react";
import "./signup.scss";

function SignUp() {
    return (
        <div className="signup_container">
            <div>
                <div></div>
                <form>
                    <h2>Sign Up</h2>
                    <div className="input_group">
                        <input type="text" id="username" className="input_group_input" required />
                        <label htmlFor="username" className="input_group_label">Username</label>
                    </div>
                    <div className="input_group">
                        <input type="password" id="password" className="input_group_input" required />
                        <label htmlFor="password" className="input_group_label">Password</label>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
            <div>
                <div className="signup_text">
                    <h1>ShopUnI</h1>
                    <p>Welcome to ShopUnI. A cutting edge e-commerce platform that aims to connect vendors to customers within the university environment. We create a virtual shopping mall for the plethora of products retailed by university students, while ensuring top quality and maintaining customer trust.</p>
                    <p>Our vision is to create a dynamic ecosystem within university environments, where the exchange of goods not only simplifies student life, but also nurtures a sense of unity and collaboration among both buyers and sellers. Are you a vendor? Register now!</p>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
};

export default SignUp;