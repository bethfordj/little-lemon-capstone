import React from 'react';
import Testimonial from './Testimonial';

const TestimonialsBanner = (props) => {
        return (
            <section className={`testimonial-banner full-width-wrapper`}>
                <h2 className="testimonial-banner__title">{props.title}</h2>
                <div className="testimonial-banner__testimonial-container">
                        {
                                // I'm not sure that it matters that key values here don't have whitespace, it's
                                // just an internal string id for react.
                        }
                    {(props.cards).map(review => {return <Testimonial key={(review.name).replace(/\s+/g, '-').toLowerCase()} {...review}/> })}
                </div>
            </section>
        )
};

export default TestimonialsBanner;