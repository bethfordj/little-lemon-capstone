import { Helmet } from 'react-helmet';
import FeaturedCards from '../Components/FeaturedCards';
import MenuSection from '../Components/MenuSection';

const Menu = () => {
	const specials = {
		title: "Specials",
		class: "specials",
		first: {
				img: {
					alt: "greek salad",
					src: "greek-salad.jpg"
				},
				title: "Greek Salad",
				price: "$12.99",
				description: "Crispy lettus, olives, tomatoes, feta, and our zesty sauce. A house favorite!"
			},
		second: {
				img: {
					alt: "bruschetta which is toasted bread with tomatoes, garlic, basil, and olive oil",
					src: "bruchetta.png"
				},
				title: "Bruschetta",
				price: "$5.50",
				description: "Our bruschetta is made with fresh garlic bread..."
			},
		third: {
				img: {
					alt: "lemon cake",
					src: "lemon-dessert.jpg"
				},
				title: "Lemon Dessert",
				price: "$5.00",
				description: "A description of the lemon cake..."
			}
	}
	const sections = [
	{
		title: "Appetizers",
		cards: [
			{
				img: {
					alt: "bruschetta which is toasted bread with tomatoes, garlic, basil, and olive oil",
					src: "bruchetta.png"
				},
				title: "Bruschetta",
				price: "$5.50",
				description: "Our bruschetta is made with fresh garlic bread..."
			},
			{
				img: {
					alt: "dolmades stuffed grape leaves",
					src: "dolma.jpg"
				},
				title: "Dolmades",
				price: "$6.99",
				description: "Start your meal with grape leaves stuffed with our special blend of minced meat and vegetables."
			},
			{
				img: {
					alt: "hummus with sliced vegetables, pita chips, and falafel to dip in it",
					src: "hummus-falafel-plate.jpg"
				},
				title: "Hummus & Falafel Plate",
				price: "$7.99",
				description: "Our rich, creamy hummus with delicious falafel, pita chips, and sliced veggies just ready for dipping."
			},
			{
				img: {
					alt: "a spinach-filled pastry",
					src: "spanakopita.jpg"
				},
				title: "Spanakopita",
				price: "$6.99",
				description: "Treat yourself to thin, crispy filo dough filled with our delicious mix of spinach, cheese, and spices."
			}
		]
	},
	{
		title: "Salads",
		cards: [
			{
				img: {
					alt: "greek salad",
					src: "greek-salad.jpg"
				},
				title: "Greek Salad",
				price: "$12.99",
				description: "Crispy lettus, olives, tomatoes, feta, and our zesty sauce. A house favorite!"
			},
			{
				img: {
					alt: "A salad made of cracked wheat, tomatoes, parsley, mint, lemon juice, and olive oil",
					src: "tabbouleh.jpg"
				},
				title: "Tabbouleh",
				price: "$6.99",
				description: "Cracked wheat, diced tomatoes, parsley, mint, lemon juice, and extra virgin olive oil."
			}
		]
	},
	{
		title: "Entrees",
		cards: [
			{
				img: {
					alt: "a gyro wrapped in foil",
					src: "gyro.jpg"
				},
				title: "Gyro",
				price: "$11.00",
				description: "A warm pita wrap with spiced lamb and crisp veggies smothered in our house tsatsiki sauce."
			},
			{
				img: {
					alt: "chicken kebab and vegetables on a plate",
					src: "kebab.jpg"
				},
				title: "Kebab",
				price: "$15.99",
				description: "Our special twist on traditional kebab. Choice of chicken or lamb."
			},
			{
				img: {
					alt: "a greek quiche with fries on a plate",
					src: "moussaka.jpg"
				},
				title: "Moussaka",
				price: "$14.99",
				description: "Greek beef and eggplant lasagna with a secret ingredient you'll love."
			}
		]
	},
	{
		title: "Desserts",
		cards: [
			{
				img: {
					alt: "slices of baklava, a dessert made from many layers of thin dough, honey, and walnuts, on a plate",
					src: "walnut-baklava.jpg"
				},
				title: "Baklava",
				price: "$5.50",
				description: "Decadent honey, pastry, and walnuts merged together into pure deliciousness!"
			},
			{
				img: {
					alt: "lemon cake",
					src: "lemon-dessert.jpg"
				},
				title: "Lemon Dessert",
				price: "$5.00",
				description: "A description of the lemon cake..."
			}
		]
	},
	{
		title: "Beverages",
		cards: [
			{
				img: {
					alt: "2 glasses of brown soda on ice with straws",
					src: "soda.jpg"
				},
				title: "Soft Drinks",
				price: "$2.50",
				description: "Pepsi, Mountain Dew, Dr. Pepper, and Starry available"
			},
			{
				img: {
					alt: "water with bubbles in it in a glass",
					src: "sparkling-water.jpg"
				},
				title: "Sparkling Water",
				price: "$3.00",
				description: "Water with a bit of life to it"
			},
			{
				img: {
					alt: "a glass of white wine",
					src: "white-wine.jpg"
				},
				title: "House White Wine",
				price: "$8.00",
				description: "A light wine with floral overtones"
			},
			{
				img: {
					alt: "a glass of red wine",
					src: "red-wine.jpg"
				},
				title: "House Red Wine",
				price: "$8.00",
				description: "A robust wine with a full body"
			},
			{
				img: {
					alt: "sangria, also known as a glass of wine with fruit in it",
					src: "sangria.jpg"
				},
				title: "Sangria",
				price: "$10.00",
				description: "A delicious treat perfect for a hot summer day!"
			}
		]
	}
];
	return (
		<article className={`container menu`}>
			<Helmet>
                <title>Menu</title>
				<description>See the dishes offered at the Little Lemon Restaurant.</description>
            </Helmet>
			<div className="title">
				<h1>Menu</h1>
			</div>
			<div className="menu-container">
				<p className="menu__call-to-action">See what's available for dine-in orders!</p>
				<FeaturedCards key="menu__featured-cards" {...specials} />
				{ sections ? (sections).map((section) => {return <MenuSection {...section}/>}): <p className="no-sections">Pardon our dust - our online menu is coming soon!</p>}
			</div>
		</article>
	);
};

export default Menu;