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
        <div key={params.id} className={"oneDish"}>
            <div className="dishTitle">{singleDish.title}</div>
            <div><img src={singleDish.picture} alt='Фото блюда'></img></div>

            <div className="dishText">{singleDish.text}</div>
            <div className="dishConteiner">
                <div className="dishCategory">{singleDish.category_name} {singleDish.category}</div>
                <div className="dishDate">Опубликовано: {date}</div>
            </div>
        </div>
    )
}