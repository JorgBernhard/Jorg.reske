import './style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import Work01 from '../../assets/work01.png';
import Work02 from '../../assets/work02.png';
import Work03 from '../../assets/work03.png';
import Work04 from '../../assets/work04.png';
import Work05 from '../../assets/work05.png';
import Work06 from '../../assets/work06.png';
import Work07 from '../../assets/web-eco-page.png';
import Work08 from '../../assets/w4y.png';

export default function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Work01} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work02} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work03} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work07} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work08} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work05} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work04} alt='1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Work06} alt='1'/>
                </SwiperSlide>
               </Swiper>
       
        </div>
    );
}