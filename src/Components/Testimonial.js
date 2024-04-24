import React from 'react';
import defaultImage from "../assets/no-profile-image-default.png";

const Testimonial = (props) => {
    var imageContent;

    function image(props) {
        if (props.img) {
            imageContent = (
                <img className="testimonial__image" alt={props.img.alt} src={require(`../assets/${props.img.src}`)}></img>
          );
        }
        if (!props.img) {
            imageContent = (
                <img className="testimonial__image" alt="" src={defaultImage}></img>
            );
        }
    }

    // again... why the function? I'd understand if it were therefore separately testable, but it's an inner function of
  // Testimonial function, so it's not.
    image(props);

        return (
            <div className="testimonial">
                <div className="testimonial__rating-row">
                    Rating
                </div>
                <div className="testimonial__image-name-row">
                    {imageContent}
                    <h3 className="testimonial__name">{props.name}</h3>
                </div>
                <p className="testimonial__quote">{props.quote}</p>
            </div>
        )
};

export default Testimonial;