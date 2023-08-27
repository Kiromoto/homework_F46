import React, {useEffect, useState} from 'react';
import './SingleCategory.Module.scss'
import axios from 'axios';
import {useParams} from "react-router-dom";
import DishCard from "../DishesList/DishCard/DishCard";


const API_URL = 'http://localhost:8000/api/category/';
export default function CategoryList() {
    const params = useParams()
    const [singleCategory, setSingleCategory] = useState({});

    const getDishesForOneCategory = () => {
        if (!singleCategory.length) {
            axios.get(API_URL+params.id)
                .then(response => {
                    setSingleCategory(response.data);
                    return response.data;
                })
                .catch(e => console.log(e));
        }
    };


    useEffect(() => {
        getDishesForOneCategory();
    });

    if (singleCategory.length) {
        return (
            <div>
                <div className="album py-5" style={{margin: "0 10px 0 10px"}}>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {singleCategory.map((dish) =>
                            <div className="col">
                                <DishCard key={dish.id} one_dish={dish}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="album py-5" style={{margin: "0 10px 0 10px"}}>
                    <h3>В данной категории блюд еще нет!</h3>
                </div>
            </div>
        )
    }
}