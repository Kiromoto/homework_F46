import React, {useEffect, useState} from 'react';
import './CategoryList.Module.scss'
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/category/';
export default function CategoryList() {
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
        <div>
            <h1>Всего категорий: {categories.length}</h1>
            <ul>
                {categories.map((category) =>
                    <li key={category.id}>
                        {category.name}
                    </li>
                )}
            </ul>
        </div>
    )
}