import About from "../../Containers/HomeContainers/About/About";
import Banner from "../../Containers/HomeContainers/Banner/Banner";
import FeatureCards from "../../Containers/HomeContainers/FeatureCards/FeatureCards";
import LatesAssignment from "../../Containers/HomeContainers/LatesAssignment/LatesAssignment";

const Home = () => {
   return (
      <div>
         <Banner />
         <div className="px-4 md:px-6 lg:px-8">
            <FeatureCards />
            <About />
            <LatesAssignment />
         </div>
      </div>
   );
};

export default Home;
