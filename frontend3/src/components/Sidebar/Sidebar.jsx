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
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "300px", height: ("100% - 50px"), margin: "50px 0 0 0"}}>
                <div>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link text-white" aria-current="page">Все категории</a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
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

