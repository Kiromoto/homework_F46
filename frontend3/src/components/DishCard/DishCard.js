import React from 'react';
import './DishCard.Module.scss'


export default function DishCard(one_dish, key, props) {

    return (
        <div>
            <h1> Карточка блюда </h1>
            {/*<h1>{one_dish[0].title}</h1>*/}
            {/*<h3> {one_dish.category} </h3>*/}
            {/*<img href={one_dish.picture} alt='Фото блюда'></img>*/}
            {/*<p> {one_dish.text} </p>*/}
            {/*<p> {one_dish.datetime} </p>*/}
        </div>
    )
}