import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Navigation({ isLoggedIn }) {
  const [isMenuOpened, setMenuOpened] = useState(false);

  function onClickMenu() {
    setMenuOpened(!isMenuOpened);
  }

  return (
    <>
      {isLoggedIn ? (
        <>
          <nav className="nav-menu nav-menu_auth">
            <NavLink className="nav-menu__link nav-menu__link_auth" activeClassName="nav-menu__link_active" to="/movies">Фильмы</NavLink>
            <NavLink className="nav-menu__link nav-menu__link_auth" activeClassName="nav-menu__link_active" to="/saved-movies">Сохраненные фильмы</NavLink>
          </nav>
          <NavLink className="nav-menu__link nav-menu__link_account" activeClassName="nav-menu__link_active" to="/profile">Аккаунт</NavLink>
          <button className="burger-nav" onClick={onClickMenu} type="button"></button>
          <BurgerMenu isMenuOpened={isMenuOpened} onClickMenu={onClickMenu} />
        </>
      ) : (
        <nav className="nav-menu">
          <NavLink className="nav-menu__link" to="/signup">Регистрация</NavLink>
          <NavLink className="nav-menu__link nav-menu__link_signin" to="/signin">Войти</NavLink>
        </nav>
        )
      }
    </>
  );
}
