import './App.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header isLoggedIn={isLoggedIn} />
    </CurrentUserContext.Provider>
  );
}
