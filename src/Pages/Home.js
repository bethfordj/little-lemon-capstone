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
            src: "greek-salad.jpg"
        },
        title: "Greek Salad",
        price: "$12.99",
        description: "Crispy lettus, olives, tomatoes, feta, and our zesty sauce. A house favorite!",
        href: "/order-online/add-to-cart?item=greek-salad",
        linkText: "Order delivery",
    },
    second: {
        img: {
            alt: "bruschetta which is toasted bread with tomatoes, garlic, basil, and olive oil",
            src: "bruchetta.png"
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
            src: "lemon-dessert.jpg"
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
            src: "jane-doe.jpg"
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
	
	return (
		<article className={`container home`}>
            <Helmet>
                <title>Home</title>
            </Helmet>
			<div className="title">
				<h1 className="sr-only">Home</h1>
			</div>
            <FeaturedBanner key="home__hero-banner"
                title="Hero Banner" 
                subtitle="Subtitle"
                text="This is the small paragraph that shows in the hero banner."
                btnLink="/reservations"
                btnText="Reserve a Table"
                class="hero-banner"
                img={[
                    {
                        alt:"",
                        src:"restaurant.jpg"
                    }
                ]}
            />
            
            <FeaturedCards key="home__featured-cards" {...featuredValues} />
            <TestimonialsBanner key="home__testimonials" title="Testimonials" cards={testimonialValues} />
            <FeaturedBanner 
                key="home__about-banner"
                title="Little Lemon" 
                subtitle="Chicago"
                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                class="about-banner"
                img={[
                    {
                        alt:"Mario and Adrian laughing together in the kitchen",
                        src:"Mario and Adrian b.jpg"
                    },
                    {
                        alt:"Maro and Adrian cooking together",
                        src:"Mario and Adrian A.jpg"
                    }
                ]}
            />
		</article>
	);
};

export default Home;