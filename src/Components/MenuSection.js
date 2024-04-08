import React from 'react';
import Card from './Card';


const MenuSection = (props) => {
    let sectionClass;
    if(props.class) {
        sectionClass = `menu-cards-section full-width-wrapper ${props.class}`;
    }
    else {
        sectionClass = `menu-cards-section full-width-wrapper`;
    }
        return (
            <section className={sectionClass}>
                <div className="menu-cards-section__title-row">
                    <h2 className="menu-cards-section__title">{props.title}</h2>
                    <p className="menu-cards-section__intro">{props.intro}</p>
                </div>
                <div className="menu-cards-section__card-row">
                    { (props.cards) ? (props.cards).map((card) => {return <Card {...card}/>}): <p className="no-cards">We have no {props.title} options at this time.</p>}
                </div>
            </section>
        )
};

export default MenuSection;