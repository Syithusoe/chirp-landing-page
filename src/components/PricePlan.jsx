/* eslint-disable react/prop-types */
import { BsTwitter } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";

function PricePlan() {
  //for horizontal line
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
      }}
    />
  );

  return (
    <div className="price-plan-container">
      <div className="price-plan">
        <div className="price-plan__header">
          <h2 className="price-plan__title">One simple price plan.</h2>
          <p className="price-plan__subtitle">
            Start growing your Twitter account by analyzing your followers
            patterns.
          </p>
        </div>

        <div className="price-plan__card">
          <div className="price-plan__card__header">
            <p className="monthly-title">Monthly</p>
            <p>
              <span className="price">$9</span>{" "}
              <span className="span-month">/mo</span>
            </p>
          </div>
          <ColoredLine color="black" />
          <div className="price-plan__card__body">
            <p className="price-plan__card__feature">
              <span>
                <FcCheckmark size={22} />
              </span>
              Unlimited* scheduled tweets and threads.
            </p>
            <p className="price-plan__card__feature">
              <span>
                <FcCheckmark size={22} />
              </span>
              Schedule up to 3 weeks in advance
            </p>
            <p className="price-plan__card__feature">
              <span>
                <FcCheckmark size={22} />
              </span>
              Real-time audience analytics tracking up to 5k followers.
            </p>
          </div>
          <ColoredLine color="black" />
          <div className="price-plan__card__footer">
            <button className="price-plan__card__footer__btn">
              <span>
                <BsTwitter />
              </span>
              Start Trial with Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePlan;
