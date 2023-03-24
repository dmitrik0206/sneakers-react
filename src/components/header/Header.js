import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-item">
          <a className="header-item__logo" href="#header">
            <img src="images/logo.png" alt="logo"></img>
          </a>
          <div className="header-item__inner">
            <h3 className="header-item__title">REACT SNEAKERS</h3>
            <p className="header-item__text">Магазин лучших кроссовок</p>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};
export default Header;
