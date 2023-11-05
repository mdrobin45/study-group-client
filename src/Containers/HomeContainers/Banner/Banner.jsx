import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "../../../Components/Slider/Slider";

const Banner = () => {
   return (
      <div className="relative pb-40">
         <Swiper
            pagination={{
               dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
               <Slider
                  title="Unlock Your Potential with Group Study!"
                  bgImage="https://i.ibb.co/VW8WXdK/banner-1.png"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Slider
                  title="Elevate Your Group Assignments!"
                  bgImage="https://i.ibb.co/VW8WXdK/banner-1.png"
               />
            </SwiperSlide>
            <SwiperSlide>
               <Slider
                  title="Join Forces, Ace Your Assignments"
                  bgImage="https://i.ibb.co/VW8WXdK/banner-1.png"
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
