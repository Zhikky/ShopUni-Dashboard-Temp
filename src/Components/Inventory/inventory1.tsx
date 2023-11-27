import React, { useState } from "react";

import "./inventory.scss";

// import filter from "../images/plus.png";
import Table from "./table/table";
import Button from "./table/addProduct";

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

const Inventory1: React.FC<InventoryProps> = ({ productData }) => {
    return (
        <div className="inventory_dashboard">
            <div>
                <p>Material Inventory Overview</p>
                <Button />
            </div>

            <Table productData={productData} />
        </div>
    )
};

export default Inventory1;