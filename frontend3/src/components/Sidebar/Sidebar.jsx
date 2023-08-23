import React, {useEffect, useState} from 'react';
import './Sidebar.Module.scss';
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/category/';
export default function Sidebar() {
    const [categories, setCategories] = useState([]);

    const getCategories = () => {
        if (!categories.length) {
            axios.get(API_URL)
                .then(response => {
                    setCategories(response.data);
                    return response.data;
                })
                .catch(e => console.log(e));
        }
    };


    useEffect(() => {
        getCategories();
    });

    return (
        <aside>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "200px"}}>
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                    </svg>
                    <span className="fs-4">Категории</span>
                </a>
                <div>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                <svg className="bi me-2" width="16" height="16">
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                </svg>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                </svg>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                </svg>
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                </div>
            </div>
        </aside>
    )
}

