import React, { useState } from "react";
import BarChart from "./chart/Barchart";
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

    const [userData, setUserData] = useState({
        labels: productData.map((tableData) => `(${tableData.qunatity}) ${tableData.product}`),
        datasets: [{
            label: "Amount Sold",
            data: productData.map((tableData) => tableData.sold),
            backgroundColor: ["#22B2F2"],
    }]
    })

    return (
        <div className="inventory_dashboard">
            <div>
                <p>Most Sold Products</p>
            </div>

            <div className="barchart"><BarChart userData={userData}/></div>
        </div>
    )
};

export default Inventory2;