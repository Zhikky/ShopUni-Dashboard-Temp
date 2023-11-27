import React from "react";
import "./header.scss";
// import img from "../images/zhikky.jpg";

function Header() {
    return (
        <div className="header_container">
            <div className="text">
                <h2>Welcome Back, <span>Edward</span></h2>
                <p>Here are your daily updates</p>
            </div>

            <div>

                <div className="search">
                    <div>
                        {/* <input type="search" placeholder="Search..." />
                        <i className="fa-solid fa-magnifying-glass"></i> */}
                    </div>

                    <div><i className="fa-regular fa-bell"></i></div>
                </div>

                <div className="profile">
                    <div className="img" style={{ backgroundImage: `url(data:image/jpeg;base64,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)` }}>
                    </div>

                    <div>
                        <h3>Edward Lore</h3>
                        <p>Product Manager</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Header;