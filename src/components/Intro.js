import introImg from '../assets/intro-img.jpg';
import introImgTop from '../assets/intro-top-comp.png';

const Intro = () => {
  return (
    <div className="container">
      <div className="intro">
        <img src={introImgTop} className="intro-top"></img>
        <div className="intro-info">
          <h1 className="intro-info__title">
            <span>Stan Smith</span>, Forever!
          </h1>
          <button className="intro-info__btn btn">Купить</button>
        </div>
        <div className="intro-img">
          <img src={introImg}></img>
        </div>
      </div>
    </div>
  );
};
export default Intro;
