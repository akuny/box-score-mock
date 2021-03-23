import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item"><FontAwesomeIcon icon={faBaseballBall} /></a>
				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className="navbar-menu">
				<div className="navbar-start">
				<a className="navbar-item">
					Home
				</a>
				<a className="navbar-item">
					Archives
				</a>
				<a className="navbar-item">
					About
				</a>
				</div>

				<div className="navbar-end">
				</div>
			</div>
		</nav>
	);
}