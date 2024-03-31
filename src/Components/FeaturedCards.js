import React from 'react';
import Card from './Card';
import ButtonLink from './ButtonLink';


const FeaturedCards = (props) => {
    let first = props.first;
    let second = props.second;
    let third = props.third;

        return (
            <section className="featured-cards">
                <div className="featured-cards__title-row">
                    <h2 className="featured-cards__title">{props.title}</h2>
                    <ButtonLink  className={`featured-cards__button button`} to={props.btnLink}>{props.btnText}</ButtonLink>
                </div>
                <div className="featured-cards__card-row">
                    <Card {...first} />
                    <Card {...second} />
                    <Card {...third} />
                </div>
            </section>
        )
};

export default FeaturedCards;