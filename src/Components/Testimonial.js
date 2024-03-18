import React from 'react';

const Testimonial = (props) => {
    var imageContent;

    function image(props) {
        if (props.img) {
            imageContent = (
                <img className="testimonial__image" alt={props.img.alt} src={props.img.src}></img>
          );
        }
        if (!props.img) {
            imageContent = (
                <img className="testimonial__image" alt="" src="./src/assets/no-profile-image-default.png"></img>
            );
        }
    }
    image(props);

        return (
            <div className="testimonial">
                <div className="testimonial__rating-row">
                    Rating
                </div>
                {imageContent}
                <h3 className="testimonial__name">{props.name}</h3>
                <p className="testimonial__quote">{props.quote}</p>
            </div>
        )
};

export default Testimonial;