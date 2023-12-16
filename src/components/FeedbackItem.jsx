/* eslint-disable react/prop-types */
function FeedbackItem({
  customerName,
  username,
  feedback,
  likeCount,
  userProfile,
}) {
  return (
    <div className="feedback__item">
      <div className="feedback__item__header">
        <div className="feedback__item__header__left">
          <img src={userProfile} alt="" />
          <div>
            <p className="username">{customerName}</p>
            <p className="username-tag">{username}</p>
          </div>
        </div>

        <div>
          <img src="src\assets\Twitter (Blue).svg" alt="" />
        </div>
      </div>
      <div className="feedback__item__body"> {feedback}</div>
      <div className="feedback__item__footer">
        <div>
          <p className="feedback__item__footer__like">
            <img src="src/assets/Like.svg" alt="" />{" "}
            <span className="footer-span-text">{likeCount}</span>
          </p>
        </div>{" "}
        <p className="feedback-item-date">March 2, 2021</p>
      </div>
    </div>
  );
}

export default FeedbackItem;
