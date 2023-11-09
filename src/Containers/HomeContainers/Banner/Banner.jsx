import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../../Components/Slider/Slider";

// Slider content
const slides = [
   {
      title: "Unlock Your Potential with Group Study!",
      bgImage: "https://i.ibb.co/VW8WXdK/banner-1.png",
   },
   {
      title: "Unlock Your Potential with Group Study!",
      bgImage: "https://i.ibb.co/2kX0zv9/image.jpg",
   },
   {
      title: "Elevate Your Group Assignments!",
      bgImage: "https://i.ibb.co/VW8WXdK/banner-1.png",
   },
   {
      title: "Join Forces, Ace Your Assignments",
      bgImage: "https://i.ibb.co/2kX0zv9/image.jpg",
   },
];

const Banner = () => {
   return (
      <div className="relative pb-10 md:pb-20 lg:pb-40">
         <Swiper
            loop={true}
            navigation={true}
            autoplay={{ delay: 2000 }}
            modules={[Autoplay, EffectFade, Navigation]}
            className="mySwiper">
            {slides.map((slide, index) => (
               <SwiperSlide key={index}>
                  <Slider title={slide.title} bgImage={slide.bgImage} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Banner;
