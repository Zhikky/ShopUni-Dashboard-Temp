import React from "react";
import "./sidebar.scss";

import logo from "../images/FAvicon.png"

function SideBar() {
    return (
        <div className="sidebar_container">

            <div className="sidebar_logo">
                <img src={logo} alt="ShopUnI logo" />
                {/* <p>ShopUnI</p> */}
            </div>

            <div className="sidebar_links">
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
    )
};

export default SideBar;