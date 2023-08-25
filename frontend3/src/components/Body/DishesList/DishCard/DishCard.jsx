import React from 'react';
import './DishCard.Module.scss'


export default function DishCard(props) {
    const date = new Date(props.one_dish.datetime).toLocaleString('ru', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });
    const url = "/dishes/" + props.one_dish.id
    return (
        <div key={props.one_dish.id} className="card shadow-sm">
            <a href={url}><img className="bd-placeholder-img card-img-top" src={props.one_dish.picture}
                               alt='Фото блюда'></img></a>
            <div className="card-body">
                <a href={url} style={{textDecoration: "none", color: "black"}}><p className="card-text"
                                                                                  style={{margin: "0 0 20px 0"}}>{props.one_dish.title}</p>
                </a>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <a href={url}>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Подробнее</button>
                        </a>
                        <a href={`/category/${props.one_dish.category}`}>
                            <button type="button" className="btn btn-sm btn-outline-secondary"
                                    style={{margin: "0 0 0 5px"}}>{props.one_dish.category_name}</button>
                        </a>
                    </div>
                    <small className="text-muted">{date}</small>
                </div>

            </div>
        </div>
    )
}