import React, {useEffect, useState} from 'react';
import DishCard from './DishCard/DishCard'
import './DishesList.Module.scss'
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/dishes/';

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
            <div className="album py-5" style={{margin: "0 10px 0 10px"}}>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {dishDate.map((dish) =>
                        <div className="col">
                            <DishCard key={dish.id} one_dish={dish}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}