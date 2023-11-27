import React from "react";
import "./dashboard.scss";
import SideBar from "./Sidebar/sidebar";
import Header from "./header/header";
import Inventory1 from "./Inventory/inventory1";
import Inventory2 from "./Inventory/inventory2";

// import logoIcon from "./images/zhikky.jpg"

function Dashboard() {

    const productData = [
        {
            product: "spoon",
            qunatity: 13,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 4,
        }, {
            product: "sock",
            qunatity: 15,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 9,
        },
        {
            product: "belt",
            qunatity: 32,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 14
        }, {
            product: "Cylinder",
            qunatity: 18,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 2,
        },
        {
            product: "jean",
            qunatity: 3,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 3,
        },
        {
            product: "Cylinder",
            qunatity: 19,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 2,
        },
        {
            product: "Watch",
            qunatity: 25,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 7
        },
        {
            product: "Cylinder",
            qunatity: 1,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 9,
        },
        {
            product: "jean",
            qunatity: 3,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 3,
        },
        {
            product: "Watch",
            qunatity: 22,
            entry_price: "#7,683",
            exit_price: "#9,542",
            image: "https://media.istockphoto.com/id/680359656/photo/red-gas-cylinder-isolated.jpg?s=612x612&w=0&k=20&c=rkfyxyuNgcc4q4HUgtA_y1gc63cHGzJjVFNfNt3I3Lw=",
            sold: 7
        }
    ]


    return (
        <div className="dashboard_container">
            <><SideBar /></>

            <div className="dashboard">
                <div><Header /></div>

                <div>
                    <Inventory2 productData={productData} />
                    <Inventory1 productData={productData} />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;