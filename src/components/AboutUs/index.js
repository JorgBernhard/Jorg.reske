import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Email from '../../assets/icons/email.png';

import W4Y from '../../assets/w4y-around.png';
import "./styles.css";



export default function AboutUs() {

    return (
        <div id="about-us">

            <h1>About Us</h1>

            <Swiper
                slidesPerView={window.screen.width < 800 ? 1 : 1}
                spaceBetween={30}
                slidesPerGroup={window.screen.width < 800 ? 1 : 1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={window.screen.width < 800 ? false : true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="img-box">
                    <img src={W4Y} alt="Foto" />
                    </div>
                    <h3>The company We 4 You (W4Y)</h3>
                    <p>
                        W4Y was created early 2022, the idea was to atend to all the companies world-wide with need of especial 
                        internet design, web-interfaces, mobile-applications and all you mid think of.
                        We believe that you can create a application, make it tailer-made, fit to serve the specific person 
                        or company and if needed interface with all existing aplications if possible.<br></br><br></br>
                        We believe that working world-wide we can still attemt to have a perfect dialog with the client, 
                        personal touch of understanding and profesional contact recieving the complete information, true it all
                        be able to design a perfect porduct with all specifications required.
                        Our teams are specialized in all area's from collecting data up do desin and develop the product.<br></br><br></br>
                        If you have any question or like to get in contact with us, please feel free to send us a email. As soon as 
                        possible, we will replay to you. Thank you for your interest.
                    </p>

                    <div className="ourteam-links">
                        <a href="mailto:jorg.reske@gmail.com">
                            <img src={Email} alt="email icon" />
                        </a>

                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
