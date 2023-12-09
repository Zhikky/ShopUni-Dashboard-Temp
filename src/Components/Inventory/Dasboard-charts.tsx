import React, { useState } from "react";
import BarChart from "./chart/Barchart";
import LineChart from "./chart/linechart";
import "./inventory.scss"

interface Product {
    product: string;
    qunatity: number;
    entry_price: string;
    exit_price: string;
    image: string;
    sold: number;
}

interface InventoryProps {
    productData: Product[];
}


const Inventory2: React.FC<InventoryProps> = ({ productData }) => {

    // Creating new array of top 5 product sold
    // Sort the productData array based on the "sold" property in descending order
    productData.sort((a, b) => b.sold - a.sold);

    // Extract the top 5 objects with the highest "sold" values
    const top5SoldProducts = productData.slice(0, 5);

    const [userData, setUserData] = useState({
        // labels: productData.map((tableData) => `
        // (${tableData.qunatity})
        //  ${tableData.product}`),
        labels: top5SoldProducts.map((tableData) => `${tableData.product}`),
        datasets: [{
            label: "Amount Sold",
            data: top5SoldProducts.map((tableData) => tableData.sold),
            backgroundColor: ["#286feb"],
        }]
    })


    return (
        <div className="inventory_dashboard chart_container">
            <div>
                <p>Most Sold Products</p>
                <p>Most Sold Products</p>
            </div>

            <div className="chart">
                <div className="barchart"><BarChart userData={userData} /></div>
                <div className="barchart"><LineChart userData={userData} /></div>

            </div>
        </div>
    )
};

export default Inventory2;