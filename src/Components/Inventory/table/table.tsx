import React, { useState } from "react";

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

const Table: React.FC<InventoryProps> = ({ productData }) => {
    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Cost Price</th>
                        <th>Selling Price</th>
                        <th>Quantity Sold</th>
                        <th>Available Quantity</th>

                    </tr>
                </thead>

                <tbody>
                    {productData.map((data, index) => {
                        return (<tr key={index} id="custom-row">
                            <td><img src={data.image} alt={`${data.product}`} height="32px" /></td>
                            <td>{data.product}</td>
                            <td>{data.entry_price}</td>
                            <td>{data.exit_price}</td>
                            <td>{data.qunatity}</td>
                            <td>{data.sold}</td>
                            {/* <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M14.9985 20C14.9985 18.3431 13.6554 17 11.9985 17C10.3417 17 8.99854 18.3431 8.99854 20C8.99854 21.6569 10.3417 23 11.9985 23C13.6554 23 14.9985 21.6569 14.9985 20Z" fill="#191919" />
                                    <path d="M13.4985 12C13.4985 11.1716 12.827 10.5 11.9985 10.5C11.1701 10.5 10.4985 11.1716 10.4985 12C10.4985 12.8284 11.1701 13.5 11.9985 13.5C12.827 13.5 13.4985 12.8284 13.4985 12Z" fill="#191919" />
                                    <path d="M14.9985 4C14.9985 2.34315 13.6554 1 11.9985 1C10.3417 1 8.99854 2.34315 8.99854 4C8.99854 5.65685 10.3417 7 11.9985 7C13.6554 7 14.9985 5.65685 14.9985 4Z" fill="#191919" />
                                </svg>
                            </button> */}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Table;