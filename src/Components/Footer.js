import React from 'react';
import NavigationLinks from './NavigationLinks';
import LinkColumn from './LinkColumn';

var contactList = [
    {
        href: "/contact/address",
        text: "Address"
    },
    {
        href: "/contact/phone",
        text: "Phone Number"
    },
    {
        href: "/contact/email",
        text: "Email"
    }
];
var socialList = [
    {
        href: "https://twitter.com/?lang=en",
        text: "X (Twitter)"
    },
    {
        href: "https://www.facebook.com/",
        text: "Facebook"
    },
    {
        href: "https://www.pinterest.com/",
        text: "Pinterest"
    }
]

const Footer = () => {
	return (
			<footer className={`footer full-width-wrapper`}>
                <div className="footer__column-1">
                    <img className="footer__logo" alt="little lemon restaurant's logo" src={require("../assets/logo-upright.png")}></img>
                </div>
                <LinkColumn parent="footer" title="Navigation" hlevel={2} i="2" content={<NavigationLinks/>} />
                <LinkColumn parent="footer" title="Contact" hlevel={2} i="3" list={contactList} />
                <LinkColumn parent="footer" title="Social Media Links" hlevel={2} i="4" list={socialList} />
            </footer>
	);
};

export default Footer;