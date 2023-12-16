import Button from "./Button";
import { BsTwitter } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Twitter analytics taken to a whole new level.
        </h1>
        <p className="hero__title-description">
          Chirp is a suite of Twitter analytics that will help you better
          understand your audience, which tweets they like, and most importantly
          when they are the most active on Twitter.
        </p>
        <div className="hero__btn-group">
          <Button>
            <span>
              <BsTwitter />
            </span>
            Sign in with Twitter
          </Button>
          <p className="hero__btn-group__learn-more">
            Learn more {""}
            <span>
              <FaArrowRightLong size={10} />
            </span>
          </p>
        </div>
        <div className="avatars">
          <img
            src="src\assets\userAvatar01.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar02.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar03.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar04.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar05.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar06.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar07.svg"
            alt=""
            className="avatars__item"
          />
          <img
            src="src\assets\userAvatar08.svg"
            alt=""
            className="avatars__item"
          />
        </div>
        <p className="join-message">
          Join <span className="span-bold">195</span> others who have analyzed
          their followers and scheduled <span className="span-bold">1242</span>{" "}
          tweets.
        </p>
      </div>
      {/**Image Section */}
      <div className="hero__right">
        <img
          src="src\assets\Hero Image (Desktop View).png"
          alt=""
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default Hero;
