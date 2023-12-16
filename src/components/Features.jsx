import FeatureItem from "./FeatureItem";
import { MdDarkMode } from "react-icons/md";
import { FcTemplate } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
function Features() {
  return (
    <div className="features-bg">
      <div className="features">
        <p className="features__title">Features that help you Tweet smarter.</p>
        <div className="features__group">
          <div className="features__items">
            <FeatureItem
              icon={<FcLineChart size={30} />}
              title="Analytics"
              description="We constantly monitor your audence as it grows - so you can Tweet when your followers are most likely to be online and ready to engage with your content."
            />
            <FeatureItem
              icon={<FcFlashOn size={30} />}
              title="Smart Analyzer"
              description="Chirp automatically recongnizes your followers' most active times and autamatically sends you notifications if you're missing out an opportunity."
            />
          </div>
          <div className="features__items">
            <FeatureItem
              icon={<FcTemplate size={30} />}
              title="Scheduled Your Tweets"
              description="Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read."
            />
            <FeatureItem
              icon={<MdDarkMode size={30} />}
              title="Dark Mode"
              description="Firendly on the eyes, no matter what time you write your Tweets. All colors are choosen to make sure your eyes are at ease at all time."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
