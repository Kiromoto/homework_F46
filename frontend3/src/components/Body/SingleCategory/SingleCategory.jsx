import React, {useEffect, useState} from 'react';
import './SingleCategory.Module.scss'
import axios from 'axios';
import {useParams} from "react-router-dom";


const API_URL = 'http://localhost:8000/api/category/';
export default function CategoryList() {
    const params = useParams()
    const [singleCategory, setSingleCategory] = useState({});


    return (
        <div className="categoryContainer">
            <div className="categoryTitle">Категория: {params.id}</div>
            <div className="categoryTitle">В данной категории блюд еще нет!</div>

        </div>
    )
}