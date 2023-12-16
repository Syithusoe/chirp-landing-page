import FeedbackItem from "./FeedbackItem";

const feedbacks = [
  {
    customerName: "Sara May",
    userProfile: `/assets/userAvatar01.svg`,
    username: "@sara_may",
    likeCount: "2",
    feedback:
      "I just tried out @chirp and its amazing, love all the analytics I can see.",
  },
  {
    customerName: "Jack Scott",
    userProfile: `/assets/userAvatar07.svg`,
    username: "@jackscott_",
    likeCount: "32",
    feedback:
      "I initially started out using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
  },
  {
    customerName: "Jessica May",
    userProfile: `/assets/userAvatar05.svg`,
    username: "@jmay98",
    likeCount: "221",
    feedback:
      "Absolutely love everything about Chirp, from the desing to how everything works smoothly.",
  },
];

function Feedback() {
  return (
    <div className="feedback-bg">
      <div className="feedback">
        <div className="feedback-title">
          <h2 className="feedback__title">What our customers say</h2>
        </div>
        <div className="feedback__item__group">
          {feedbacks.map((feedback) => (
            <FeedbackItem
              customerName={feedback.customerName}
              username={feedback.username}
              likeCount={feedback.likeCount}
              feedback={feedback.feedback}
              userProfile={feedback.userProfile}
              key={feedback.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
