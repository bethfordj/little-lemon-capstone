import { Helmet } from 'react-helmet';
import FeaturedCards from '../Components/FeaturedCards';
import MenuSection from '../Components/MenuSection';

const OrderOnline = () => {
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
				description: "Crispy lettus, olives, tomatoes, feta, and our zesty sauce. A house favorite!",
				href: "/order-online/add-to-cart?item=greek-salad",
				linkText: "Add to Cart",
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
				linkText: "Add to Cart",
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
				linkText: "Add to Cart",
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
				description: "Our bruschetta is made with fresh garlic bread...",
				href: "/order-online/add-to-cart?item=bruschetta",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "dolmades stuffed grape leaves",
					src: "dolma.jpg"
				},
				title: "Dolmades",
				price: "$6.99",
				description: "Start your meal with grape leaves stuffed with our special blend of minced meat and vegetables.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "hummus with sliced vegetables, pita chips, and falafel to dip in it",
					src: "hummus-falafel-plate.jpg"
				},
				title: "Hummus & Falafel Plate",
				price: "$7.99",
				description: "Our rich, creamy hummus with delicious falafel, pita chips, and sliced veggies just ready for dipping.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "a spinach-filled pastry",
					src: "spanakopita.jpg"
				},
				title: "Spanakopita",
				price: "$6.99",
				description: "Treat yourself to thin, crispy filo dough filled with our delicious mix of spinach, cheese, and spices.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
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
				description: "Crispy lettus, olives, tomatoes, feta, and our zesty sauce. A house favorite!",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "A salad made of cracked wheat, tomatoes, parsley, mint, lemon juice, and olive oil",
					src: "tabbouleh.jpg"
				},
				title: "Tabbouleh",
				price: "$6.99",
				description: "Cracked wheat, diced tomatoes, parsley, mint, lemon juice, and extra virgin olive oil.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
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
				description: "A warm pita wrap with spiced lamb and crisp veggies smothered in our house tsatsiki sauce.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "chicken kebab and vegetables on a plate",
					src: "kebab.jpg"
				},
				title: "Kebab",
				price: "$15.99",
				description: "Our special twist on traditional kebab. Choice of chicken or lamb.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "a greek quiche with fries on a plate",
					src: "moussaka.jpg"
				},
				title: "Moussaka",
				price: "$14.99",
				description: "Greek beef and eggplant lasagna with a secret ingredient you'll love.",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
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
				description: "Decadent honey, pastry, and walnuts merged together into pure deliciousness!",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "lemon cake",
					src: "lemon-dessert.jpg"
				},
				title: "Lemon Dessert",
				price: "$5.00",
				description: "A description of the lemon cake...",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
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
				description: "Pepsi, Mountain Dew, Dr. Pepper, and Starry available",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			},
			{
				img: {
					alt: "water with bubbles in it in a glass",
					src: "sparkling-water.jpg"
				},
				title: "Sparkling Water",
				price: "$3.00",
				description: "Water with a bit of life to it",
				href: "/order-online/add-to-cart?item=lemon-dessert",
				linkText: "Add to Cart",
			}
		]
	}
];

	// doesn't that MenuSelection map statement throw a react complaint about not having a key on the generated elements? See https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
	return (
		<article className={`container order-online`}>
			<Helmet>
				<title>Order Online</title>
				<description>Place an order for pickup.</description>
			</Helmet>
			<div className="title">
				<h1>Place an Order Online</h1>
			</div>
			<div className="order-container">
				<p className="order__call-to-action">Order for pickup or delivery today!</p>
				<FeaturedCards key="menu__featured-cards" {...specials} />
				{ sections ? (sections).map((section) => {return <MenuSection {...section}/>}): <p className="no-sections">Pardon our dust - our online menu is coming soon!</p>}
			</div>
		</article>
	);
};

export default OrderOnline;