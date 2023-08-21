import React from 'react';
import './DishCard.Module.scss'


export default function DishCard(props) {
    const date = new Date(props.one_dish.datetime).toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric'});
    return (
        <div key={props.one_dish.id} className={"oneDishCard"}>
            <h1>Название: {props.one_dish.title}</h1>
            <h3>Категория: {props.one_dish.category} </h3>
            <img src={props.one_dish.picture} alt='Фото блюда'></img>
            <p> {props.one_dish.text} </p>
            <p>Опубликовано: {date} </p>
        </div>
    )
}