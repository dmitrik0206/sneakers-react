import logo from '../../assets/logo.png';
import { BiMenu } from 'react-icons/bi';

import Navigation from './Navigation';
import { useState } from 'react';

const Header = () => {
  const [isVisibleNav, setIsVisibleNav] = useState(false);

  const navToggleHandler = () => {
    setIsVisibleNav((state) => !state);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-item">
          <a className="header-item__logo" href="#">
            <img src={logo}></img>
          </a>
          <div className="header-item__inner">
            <h3 className="header-item__title">REACT SNEAKERS</h3>
            <p className="header-item__text">Магазин лучших кроссовок</p>
          </div>
        </div>
        <Navigation isVisible={isVisibleNav} />
        <button onClick={navToggleHandler} className="header-burger">
          <BiMenu className="header-burger__icon" />
        </button>
      </div>
    </div>
  );
};
export default Header;
