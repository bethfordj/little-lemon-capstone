import React from 'react';

const FeaturedBanner = (props) => {
    var imageContent;

    function image(array) {
        let length = array.length;
        if (length > 1) {
            imageContent = (
                <div className="featured-banner__img-container">
                    <img className="featured-banner__back-image" alt={props.img[0].alt} src={props.img[0].src}></img>
                    <img className="featured-banner__front-image" alt={props.img[1].alt} src={props.img[1].src}></img>
                </div>
          );
        }
        else {
            imageContent = (
                <div className="featured-banner__img-container" style={{backgroundImage: props.img[0].src}}></div>
            );
        }
    }
    image(props.img);

        return (
            <div className="featured-banner">
                <div className="featured-banner__text-container">
                    <h2 className="featured-banner__title">{props.title}</h2>
                    <p className="featured-banner__subtitle">{props.subtitle}</p>
                    <p className="featured-banner__text">{props.text}</p>
                </div>
                {imageContent}
            </div>
        )
};

export default FeaturedBanner;