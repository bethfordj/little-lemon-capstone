import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const MyAccount = (props) => {

	const goTo = useNavigate();

	function forwardUser(destination, isLoggedIn) {
		if (destination.length > 0) {
			goTo({ to: {destination}, data: { isLoggedIn: {isLoggedIn}}});
		}
		else {
			
		}
	}

	var loginContent = (<></>);
	

	return (
		<>
			{loginContent}
		</>
	);
};

export default MyAccount;