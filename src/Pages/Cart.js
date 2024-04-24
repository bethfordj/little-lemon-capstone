import React from 'react';
import { Helmet } from 'react-helmet';
import EditableCart from '../Components/EditableCart';

const Cart = () => {
// inconsistent classing -- none on h1. afaik it's good practice to put your namespaced classes on everything
	// even if you aren't doing anything with them.
	return (
		<article className={`container cart`}>
			<Helmet>
                <title>Cart</title>
				<description>See what's in your cart.</description>
            </Helmet>
			<div className="title">
				<h1>My Cart</h1>
			</div>
			<EditableCart />
		</article>
	);
};

export default Cart;