import React from 'react';
import logo from "../../assets/img/logo.png";
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
// import ButtonLink from './components/ButtonLink';

function Menu() {
	return (
		<nav className="Menu">
			<Link to="/">
				<img className="Logo" src={logo} alt="ALogo da Feioflix" />
			</Link>

			<Button as={Link} className="ButtonLink" to="/">
				Novo vídeo
			</Button>
		</nav>
	);
}

export default Menu;