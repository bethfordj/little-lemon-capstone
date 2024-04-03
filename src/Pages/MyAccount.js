import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { GlobalLoginContext } from '../Components/GlobalStateContext';


const MyAccount = (props) => {

	const context = useContext(GlobalLoginContext);

	const goTo = useNavigate();
    let content = (<></>);

	function checkLogin() {
		if (context.loginState) {
			content = (
                <article  className={`container my-account`}>
                    <Helmet>
                        <title>My Account</title>
                        <description>You have already logged in, so we are showing your account.</description>
                    </Helmet>
                    <div className="title">
                        <h1>Welcome, {context.name}!</h1>
                        <p>What do you want to do?</p>
                    </div>
                </article>
            );
		}
		else {
            goTo("/login", { replace: true });
		}
	}
    checkLogin();
	return (
        <>
            {content}
        </>
	);
};

export default MyAccount;