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

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(productData.length / productsPerPage);

    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else {
            return;
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else {
            return;
        }
    }

    return (
        <div className="inventory_dashboard">
            <div>
                <div className="dashboard_search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder="Search for products" />
                </div>
                <Button />
            </div>

            <Table productData={currentProducts} />

            <div className="pagination_dashboard">
                <button onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i + 1} onClick={() => handlePagination(i + 1)} className={i + 1 === currentPage ? "active" : ""}>
                        {i + 1}
                    </button>
                ))}

                <button onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    )
};

export default Inventory1;