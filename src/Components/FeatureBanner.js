import React from 'react';

const FeaturedBanner = (props) => {
    var imageContent;

    function image(array) {
        let length = array.length;
        if (length > 1) {
            imageContent = (
                <div className="featured-banner__img-container">
                    <img className="featured-banner__back-image" alt={props.img[0].alt} src={require(`../assets/${props.img[0].src}`)}></img>
                    <img className="featured-banner__front-image" alt={props.img[1].alt} src={require(`../assets/${props.img[1].src}`)}></img>
                </div>
          );
        }
        else {
            imageContent = (
                <div className="featured-banner__img-container">
                    <img className="featured-banner__one-image" alt={props.img[0].alt} src={require(`../assets/${props.img[0].src}`)}></img>
                </div>
            );
        }
    }
    image(props.img);

        return (
            <section className={`featured-banner full-width-wrapper`}>
                <div className="featured-banner__text-container">
                    <h2 className="featured-banner__title">{props.title}</h2>
                    <p className="featured-banner__subtitle">{props.subtitle}</p>
                    <p className="featured-banner__text">{props.text}</p>
                </div>
                {imageContent}
            </section>
        )
};

export default FeaturedBanner;