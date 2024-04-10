import { Helmet } from 'react-helmet';

const About = () => {
	
	return (
		<article className={`container about`}>
			<Helmet>
                <title>About</title>
				<description>Learn more about the owners and restaurant background</description>
            </Helmet>
			<div className="title">
				<h1>About the Little Lemon Restaurant</h1>
			</div>
			<div className="about-container">
				<div className="about__text-column">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
						eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
						aliquid ratione facere enim eveniet modi necessitatibus quas
						asperiores pariatur, amet velit?
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
						eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
						aliquid ratione facere enim eveniet modi necessitatibus quas
						asperiores pariatur, amet velit?
					</p>
				</div>
				<img className="about__img-column" alt="outdoor restaurant seating at with umbrellas and a deck" src={require(`../assets/restaurant.jpg`)}></img>
			</div>
		</article>
	);
};

export default About;