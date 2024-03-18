import { useNavigate } from 'react-router-dom';
import FeaturedBanner from '../Components/FeatureBanner';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
			<div className="title">
				<h1 className="sr-only">Home</h1>
			</div>
            <FeaturedBanner 
                title="Hero Banner" 
                subtitle="Subtitle"
                text="This is the small paragraph that shows in the hero banner."
                img={[
                    {
                        alt:"",
                        src:"../assets/restaurant.jpg"
                    }
                ]}/>
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
            <FeaturedBanner 
                title="About" 
                subtitle="Subtitle"
                text="This is the small paragraph that shows in the hero banner."
                img={[
                    {
                        alt:"Maro and Adrian cooking together",
                        src:"../assets/Mario and Adrian A.jpg"
                    },
                    {
                        alt:"Mario and Adrian laughing together in the kitchen",
                        src:"../assets/Mario and Adrian b.jpg"
                    }
                ]}
            />
		</div>
	);
};

export default Home;