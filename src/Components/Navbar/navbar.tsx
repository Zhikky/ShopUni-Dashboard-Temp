import React, { useState } from "react";
import './navbar.scss';
import { Sling as Hamburger } from 'hamburger-react';
import logo from "../images/FAvicon.png"

function Navbar() {

    const [isOpen, setOpen] = useState(false)
    return (
        <div className="navbar_container">
            <div className="navbar">

                
                <div className="nav_title">
                    <h1>Dashboard</h1>
                </div>

                {/* <div className="nav_profile">
                        <div className="img" style={{ backgroundImage: `url(data:image/jpeg;base64,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)` }}>
                        </div>

                        <div>
                            <h3>Edward Lore</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M25.9962 10.652L16.0002 20.396L6.00415 10.652C5.82556 10.4776 5.58581 10.3799 5.33615 10.3799C5.0865 10.3799 4.84675 10.4776 4.66815 10.652C4.58168 10.7368 4.51298 10.8379 4.46608 10.9495C4.41918 11.0611 4.39502 11.181 4.39502 11.302C4.39502 11.4231 4.41918 11.5429 4.46608 11.6546C4.51298 11.7662 4.58168 11.8673 4.66815 11.952L15.3022 22.32C15.4889 22.5021 15.7394 22.6039 16.0002 22.6039C16.2609 22.6039 16.5114 22.5021 16.6982 22.32L27.3322 11.954C27.4192 11.8692 27.4885 11.7679 27.5357 11.6559C27.583 11.5439 27.6073 11.4236 27.6073 11.302C27.6073 11.1805 27.583 11.0602 27.5357 10.9482C27.4885 10.8362 27.4192 10.7348 27.3322 10.65C27.1536 10.4756 26.9138 10.3779 26.6642 10.3779C26.4145 10.3779 26.1747 10.4756 25.9962 10.65V10.652Z" fill="#191919" />
                            </svg>
                        </div>
                    </div> */}

                <div className={`nav_menu ${isOpen ? "menu_open" : "maenu_close"}`}>

                    <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.8} color={isOpen ? "#fff" : "#286feb"} rounded />
                </div>

                <div className={`nav_links ${isOpen ? "links_open" : "links_close"}`}>
                    <div>
                        <img src={logo} alt="ShopUnI logo" />

                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="#191919" />
                                </svg>

                                <p>Dashboard</p></li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 21.5C11.3137 21.5 14 18.8137 14 15.5C14 12.1863 11.3137 9.5 8 9.5C4.68629 9.5 2 12.1863 2 15.5C2 18.8137 4.68629 21.5 8 21.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 21.5C19.3137 21.5 22 18.8137 22 15.5C22 12.1863 19.3137 9.5 16 9.5C12.6863 9.5 10 12.1863 10 15.5C10 18.8137 12.6863 21.5 16 21.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Inventory</p></li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                    <path d="M2 21V3H20V21H2ZM8.837 13.329L11.837 15.729L16.0595 10.9995L14.9405 10.0005L11.663 13.671L8.663 11.271L4.4405 16.0005L5.5595 16.9995L8.837 13.329ZM18.125 8.25C18.125 7.95163 18.0065 7.66548 17.7955 7.4545C17.5845 7.24353 17.2984 7.125 17 7.125C16.7016 7.125 16.4155 7.24353 16.2045 7.4545C15.9935 7.66548 15.875 7.95163 15.875 8.25C15.875 8.54837 15.9935 8.83452 16.2045 9.0455C16.4155 9.25647 16.7016 9.375 17 9.375C17.2984 9.375 17.5845 9.25647 17.7955 9.0455C18.0065 8.83452 18.125 8.54837 18.125 8.25Z" fill="#191919" />
                                </svg>
                                <p>Analytics</p></li>
                        </ul>

                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 21C4.45 21 3.97933 20.8043 3.588 20.413C3.19667 20.0217 3.00067 19.5507 3 19V5C3 4.45 3.196 3.97933 3.588 3.588C3.98 3.19667 4.45067 3.00067 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="#191919" />
                            </svg>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;