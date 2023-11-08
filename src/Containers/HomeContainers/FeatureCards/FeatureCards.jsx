import FeatureCard from "../../../Components/FeatureCard/FeatureCard";
import icon3 from "../../../assets/images/Grading.svg";
import icon1 from "../../../assets/images/assignment-creation.svg";
import icon4 from "../../../assets/images/feedback.svg";
import icon2 from "../../../assets/images/submission.svg";

const FeatureCards = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:absolute -bottom-2 left-5 right-5 z-10">
         <FeatureCard
            icon={icon1}
            text="Assignment Creation"
            bgColor="#10C45C"
         />
         <FeatureCard
            icon={icon2}
            text="Assignment Submission"
            bgColor="#1EC1D9"
         />
         <FeatureCard
            icon={icon3}
            text="Assignment Grading"
            bgColor="#307AD5"
         />
         <FeatureCard
            icon={icon4}
            text="Feedback and Ratings"
            bgColor="#D94DA6"
         />
      </div>
   );
};

export default FeatureCards;
