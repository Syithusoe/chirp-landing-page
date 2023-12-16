/* eslint-disable react/prop-types */
function FeatureItem({ icon, title, description }) {
  return (
    <div className="features__card">
      <div>{icon}</div>
      <div className="features__card__title">{title}</div>
      <div className="features__card__description">{description}</div>
    </div>
  );
}

export default FeatureItem;
