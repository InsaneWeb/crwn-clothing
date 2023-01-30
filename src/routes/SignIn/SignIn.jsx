import {
	singInWithGooglePopup,
	createUserDocFromAuth
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await singInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);
	};

	return (
		<div>
			<h1>SignIn</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
