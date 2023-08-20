import React, {useEffect} from 'react';
import DishCard from './DishCard/DishCard'
import './DishesList.Module.scss'
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/dishs/';
let dishDate = []
export default function DishesList() {



    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                dishDate = response.data;
                console.log('dishDate');
                console.log(dishDate);
                console.log(dishDate.length);
            })
            .catch(e => console.log(e));
    });


    console.log('dishDate: ');
    console.log(dishDate);

    return (
        <div>
            <h1>Список блюд здесь будет! {dishDate}</h1>
            {dishDate.map((dish) =>
                <div>
                    <h1>Название блюда из DishsList </h1>
                    <DishCard />
                </div>
            )}
            <h2>Окончание списка</h2>
        </div>
    )
}