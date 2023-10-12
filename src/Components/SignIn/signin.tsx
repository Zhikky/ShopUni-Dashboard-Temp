import React from "react";
import "./signin.scss";

function SignIn() {
    return (
        <div className="signin_container">
            <div>
                <div className="signin_text">
                    <h1>ShopUnI</h1>
                    <p>Welcome to ShopUnI. A cutting edge e-commerce platform that aims to connect vendors to customers within the university environment. We create a virtual shopping mall for the plethora of products retailed by university students, while ensuring top quality and maintaining customer trust.</p>
                    <p>Our vision is to create a dynamic ecosystem within university environments, where the exchange of goods not only simplifies student life, but also nurtures a sense of unity and collaboration among both buyers and sellers. Are you a vendor? Register now!</p>
                    <button>Sign Up</button>
                </div>
            </div>
            <div>
                <form>
                    <h2>Sign In</h2>
                    <div>
                        <label>Username</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" />
                    </div>
                    <button>Sign In</button>
                </form>
                <div></div>
            </div>
        </div>
    )
};

export default SignIn;