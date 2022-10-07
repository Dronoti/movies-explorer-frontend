import './App.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);

  function onClickMenu() {
    setMenuOpened(!isMenuOpened);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header
        onClickMenu={onClickMenu}
        isMenuOpened={isMenuOpened}
        isLoggedIn={isLoggedIn}
      />
    </CurrentUserContext.Provider>
  );
}
