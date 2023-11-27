import React, {useState} from "react";

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
        setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Cost Price</th>
                        <th>Sales Price</th>
                        <th>Exp. Date</th>
                        <th>Amount Sold</th>

                    </tr>
                </thead>

                <tbody>
                    {currentProducts.map((data, index) => {
                        return (<tr key={index} id="custom-row">
                            <td><img src={data.image} alt={`${data.product}`} height="32px" /></td>
                            <td>{data.product}</td>
                            <td>{data.qunatity}</td>
                            <td>{data.entry_price}</td>
                            <td>{data.exit_price}</td>
                            <td>{data.qunatity}</td>
                            <td>{data.qunatity}</td>
                        </tr>)
                    })}
                </tbody>
            </table>

            <div className="pagination_dashboard">
                {/* Pagination buttons */}
                <button onClick={handlePrev} ><i className="fa-solid fa-chevron-left"></i></button>
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

export default Table;