import React from "react";
import "./sidebar.scss";

function SideBar() {
    return (
        <div className="sidebar_container">
            <div className="side_buttons">
                <button><i className="fa-solid fa-chart-line"></i></button>
                <button><i className="fa-solid fa-dolly"></i></button>
                <button><i className="fa-solid fa-box-open"></i></button>
                <button><i className="fa-solid fa-user"></i></button>
            </div>
            <button className="side_logout"><i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
    )
};

export default SideBar;