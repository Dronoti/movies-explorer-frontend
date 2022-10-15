import './BurgerMenu.css';
import { NavLink } from 'react-router-dom';

export default function BurgerMenu({ isMenuOpened, onClickMenu }) {
  return (
    isMenuOpened &&
      <div className="burger">
        <button className="burger__close" onClick={onClickMenu}></button>
        <ul className="burger__menu">
          <li>
            <NavLink onClick={onClickMenu} className="burger__link" activeClassName="burger__link_active" to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink onClick={onClickMenu} className="burger__link" activeClassName="burger__link_active" to="/movies">Фильмы</NavLink>
          </li>
          <li>
            <NavLink onClick={onClickMenu} className="burger__link" activeClassName="burger__link_active" to="/saved-movies">Сохранённые фильмы</NavLink>
          </li>
          <li className="burger__account">
            <NavLink onClick={onClickMenu} className="burger__link burger__link_account" activeClassName="burger__link_active" to="/profile">Аккаунт</NavLink>
          </li>
        </ul>
      </div>
  );
}
