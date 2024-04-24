import React from 'react';
import AddToCart from './AddToCart';

// This is a "me" thing, but I really, really like class comments that say "what does this do and why does it exist"
// It's the most useful documentation for the lowest effort, and also helps class everything up when you're scanning through something

const Card = (props) => {
    let item = {};

    // again -- why a function if it's only called once?
    function defineItem() {
        if(props.price) {
            item = {
                name: props.title,
                price: props.price,
                img: props.img
            }
        }
    }
    defineItem();

        return (
            <div className="card">
                { props.img && (
                    <div className="card__img-container">
                        <img className="card__image" alt={props.img.alt} src={require(`../assets/${props.img.src}`)}></img>
                    </div>
                )}
                
                <div className="card__text-container">
                    <div className="card__title-row">
                        <h3 className="card__title">{props.title}</h3>
                        { (props.price) && <span className="card__price">{props.price}</span> }
                    </div>
                    <p className="card__description">{props.description}</p>
                    { (props.linkText && props.price) && <AddToCart className="card__order-link" linkText={props.linkText} section={props.class} name={props.title} item={item}/>}
                </div>
            </div>
        )
};

export default Card;