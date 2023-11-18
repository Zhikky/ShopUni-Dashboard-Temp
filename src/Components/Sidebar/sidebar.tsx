import React from "react";
import "./sidebar.scss";

import logo from "../images/FAvicon.png"

function SideBar() {
    return (
        <div className="sidebar_container">

            <div className="sidebar_logo">
                <img src={logo} alt="" width="100px" />
                {/* <p>ShopUnI</p> */}
            </div>

            <div className="sidebar_links">
                <h2>GENERAL</h2>
                <ul>
                    <li> <i className="fa-solid fa-chart-line"></i> <p>Dashboard</p></li>
                    <li> <i className="fa-solid fa-truck-ramp-box"></i> <p>Inventory</p></li>
                    <li> <i className="fa-solid fa-chart-column"></i> <p>Reports</p></li>
                </ul>
            </div>

            <div className="side_support">
                <h2>SUPPORT</h2>
                <ul>
                    <li> <i className="fa-solid fa-circle-info"></i> <p>Help</p></li>
                    <li> <i className="fa-solid fa-gears"></i> <p>Settings</p></li>
                    <li> <i className="fa-solid fa-arrow-right-from-bracket"></i> <p>Log out</p></li>
                </ul>
            </div>

            <div className="sidebar_footer">
                <div className="footer_icons">
                    <a href="">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    
                </div> 
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>@2024 ShopUnI</p>
            </div>

        </div>
    )
};

export default SideBar;