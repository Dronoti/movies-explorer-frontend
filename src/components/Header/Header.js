import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to='/' className="header__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}
