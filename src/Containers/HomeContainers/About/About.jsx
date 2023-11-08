import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import AboutLeft from "./AboutLeft/AboutLeft";
import Faq from "./Faq/Faq";

const About = () => {
   return (
      <>
         <SectionHeader title="About & FAQ" subtitle="Know more" />
         <div className="flex flex-col lg:flex-row pt-0 md:pt-6 gap-20 justify-between">
            <AboutLeft />
            <Faq />
         </div>
      </>
   );
};

export default About;
