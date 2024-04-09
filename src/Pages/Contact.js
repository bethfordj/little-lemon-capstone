import { Helmet } from 'react-helmet';

const Contact = () => {
	
	return (
		<article className={`container contact`}>
			<Helmet>
                <title>Login</title>
				<description>Login to see your account.</description>
            </Helmet>
			<div className="title">
				<h1>Contact Us</h1>
			</div>
			<div className="contact-container">

				<section className="contact__contact-information">
					<p className="contact__phone">Call: <a href="tel:1-111-111-1111">(111)111-1111</a></p>
					<p className="contact__email">Email: LittleLemon@littlelemon.com</p>
					<p className="contact__hours">Hours: 11:00 AM to Midnight Tuesday to Saturday. Noon to 8:00 PM Sunday. Closed Monday.</p>
					<p className="contact__address">1234 Main Street, Chicago, IL, 60007</p>
				</section>
				Contact form and information goes here
			</div>
		</article>
	);
};

export default Contact;