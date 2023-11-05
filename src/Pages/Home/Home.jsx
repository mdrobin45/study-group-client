import Banner from "../../Containers/HomeContainers/Banner/Banner";
import FeatureCards from "../../Containers/HomeContainers/FeatureCards/FeatureCards";

const Home = () => {
   return (
      <div>
         <Banner />
         <div className="px-4 md:px-6 lg:px-8">
            <FeatureCards />
         </div>
      </div>
   );
};

export default Home;
