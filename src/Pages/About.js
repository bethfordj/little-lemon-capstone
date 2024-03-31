import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
	const navigate = useNavigate();
	return (
		<div className={`container about`}>
			<Helmet>
                <title>About</title>
				<description>Learn more about the owners and restaurant background</description>
            </Helmet>
			<div className="title">
				<h1>About the Little Lemon Restaurant</h1>
			</div>
			<div className="about-container">
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
		</div>
	);
};

export default About;