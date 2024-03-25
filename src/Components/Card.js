import React from 'react';

const Card = (props) => {

        return (
            <div className="card">
                <div className="card__img-container">
                    <img className="card__image" alt={props.img.alt} src={require(`../assets/${props.img.src}`)}></img>
                </div>
                <div className="card__text-container">
                    <div className="card__title-row">
                        <h3 className="card__title">{props.title}</h3>
                        <span className="card__price">{props.price}</span>
                    </div>
                    <p className="card__description">{props.description}</p>
                    <a className="card__order-link" href={props.href}>{props.linkText}</a>
                </div>
            </div>
        )
};

export default Card;