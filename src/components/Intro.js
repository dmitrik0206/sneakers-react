const Intro = () => {
  return (
    <div className="container">
      <div className="intro">
        <img
          src="images/intro-top-comp.png"
          className="intro-top"
          alt="intro-top"
        ></img>
        <div className="intro-info">
          <h1 className="intro-info__title">
            <span>Stan Smith</span>, Forever!
          </h1>
          <button className="intro-info__btn btn">Купить</button>
        </div>
        <div className="intro-img">
          <img src="images/intro-img.jpg" alt="intro"></img>
        </div>
      </div>
    </div>
  );
};
export default Intro;
