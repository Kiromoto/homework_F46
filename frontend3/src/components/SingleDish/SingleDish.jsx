import React, {useEffect, useState} from 'react';
import './SingleDish.Module.scss'
import {useParams} from "react-router-dom";
import axios from 'axios';


let API_URL = 'http://localhost:8000/api/dishs/';

export default function SingleDish(props) {
    const params = useParams()
    const [singleDish, setSingleDish] = useState({});

    const getSingleDish = () => {
        if (JSON.stringify(singleDish) === '{}') {
            axios.get(API_URL+params.id)
                .then(response => {
                    setSingleDish(response.data);
                    return response.data;
                })
                .catch(e => console.log(e));
        }
    };


    useEffect(() => {
        getSingleDish();
    });


    const date = new Date(singleDish.datetime).toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric'});
    return (
        <div key={params.id} className={"oneDishCard"}>
            <>{singleDish[0]}</>
            <h1>Название: {singleDish.title}</h1>
            <h3>Категория: {singleDish.category} - {singleDish.category_name} </h3>
            <img src={singleDish.picture} alt='Фото блюда'></img>
            <p> {singleDish.text} </p>
            <p>Опубликовано: {date} </p>
        </div>
    )
}