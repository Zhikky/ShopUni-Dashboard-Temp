import React from "react";
import "./dashboard.scss";
import SideBar from "./Sidebar/sidebar";
import Header from "./header/header";
import logoIcon from "./images/zhikky.jpg"

function Dashboard() {

    const productData = [
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        }, {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        },
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        }, {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        },
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        },
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        },
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        },
        {
            product: "Cylinder",
            qunatity: "13",
            entry_price: "#7,683",
            exit_price: "#9,542"
        }
    ]


    return (
        <div className="dashboard_container">
            <><SideBar /></>

            <div className="dashboard">
                <div><Header /></div>

            </div>
        </div>
    )
};

export default Dashboard;