import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
}

const FeaturedCards = (props) => {
    let first = props.first;
    let second = props.second;
    let third = props.third;

        return (
            <div className="featured-cards">
                <div className="featured-cards__title-row">
                    <h2 className="featured-cards__title">{props.title}</h2>
                    <ButtonLink  className="featured-cards__button button" to={props.btnLink}>{props.btnText}</ButtonLink>
                </div>

                <Card {...first} />
                <Card {...second} />
                <Card {...third} />
            </div>
        )
};

export default FeaturedCards;