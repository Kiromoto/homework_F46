import React, {useEffect, useState} from 'react';
import DishCard from './DishCard/DishCard'
import './DishesList.Module.scss'
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/dishs/';

export default function DishesList() {
    const [dishDate, setDishDate] = useState([]);

    const getDishes = () => {
        if (!dishDate.length) {
            axios.get(API_URL)
                .then(response => {
                    setDishDate(response.data);
                    return response.data;
                })
                .catch(e => console.log(e));
        }
    };


    useEffect(() => {
        getDishes();
    });


    return (
        <div>
            <h1>Список блюд</h1>
            <h3> Количество рецептов: {dishDate.length} </h3>
            {dishDate.map((dish) =>
                <div>
                    <DishCard key={dish.id} one_dish={dish}/>
                </div>
            )}
        </div>
    )
}