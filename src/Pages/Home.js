import { useNavigate } from 'react-router-dom';
import FeaturedBanner from '../Components/FeatureBanner';
import { Helmet } from 'react-helmet';
import FeaturedCards from '../Components/FeaturedCards';
import TestimonialsBanner from '../Components/TestimonialsBanner';

var featuredValues = {
    title: "Specials",
    btnText: "Online Menu",
    btnLink: "/menu",
    first: {
        img: {
            alt: "greek salad",
            src: "src/assets/greek salad.jpg"
        },
        title: "Greek Salad",
        price: "$12.99",
        description: "Something crispy lettus olives and our zesty sauce with blah...",
        href: "/order-online/add-to-cart?item=greek-salad",
        linkText: "Order delivery",
    },
    second: {
        img: {
            alt: "bruschetta which is toasted bread with tomatoes, garlic, basil, and olive oil",
            src: "../assets/bruchetta.svg"
        },
        title: "Bruschetta",
        price: "$5.50",
        description: "Our bruschetta is made with fresh garlic bread...",
        href: "/order-online/add-to-cart?item=bruschetta",
        linkText: "Order delivery",
    },
    third: {
        img: {
            alt: "lemon cake",
            src: "../assets/lemon-dessert.jpg"
        },
        title: "Lemon Dessert",
        price: "$5.00",
        description: "A description of the lemon cake...",
        href: "/order-online/add-to-cart?item=lemon-dessert",
        linkText: "Order delivery",
    }
};
var testimonialValues = [
    {
        rating: 5,
        name: "Jane Doe",
        quote: "My favorite place to eat!",
        img: {
            alt: "Jane Doe's photo",
            src: "./src/assets/jane-doe.jpg"
        }
    },
    {
        rating: 4,
        name: "Joe Schoe",
        quote: "Good food"
    },
    {
        rating: 3.5,
        name: "John Smith",
        quote: "Unusual but good"
    },
    {
        rating: 4,
        name: "Mary Jane",
        quote: "Delicious!"
    }
];

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="container">
            <Helmet>
                <title>Home</title>
            </Helmet>
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
                ]}
            />
            <FeaturedCards {...featuredValues} />
            <TestimonialsBanner title="Testimonials" cards={testimonialValues} />
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