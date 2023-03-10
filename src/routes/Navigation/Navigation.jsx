import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './Navigation.scss'

const Navigation = () => {
	return (
		<>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<CrwnLogo />
				</Link>

				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						SHOP
					</Link>
					<Link to="/sign-in" className="nav-link">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	)
}

export default Navigation
