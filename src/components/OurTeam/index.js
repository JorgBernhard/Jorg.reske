import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import GithubIcon from '../../assets/icons/github-icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg';
import Jorg from '../../assets/jbr.png';
import Joas from '../../assets/joas.png';
import Emerson from '../../assets/emerson.png';
import Will from '../../assets/will.png';
import Leo from '../../assets/leo.png';
import "./styles.css";



export default function AboutUs() {

    return (
        <div id="ourteam">

            <h1>Our Team</h1>

            <Swiper
                slidesPerView={window.screen.width < 800 ? 1 : 3}
                spaceBetween={30}
                slidesPerGroup={window.screen.width < 800 ? 1 : 3}
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
                    <img src={Emerson} alt="Foto" />
                    </div>
                    <h3>Emerson Lopes (Co Founder)</h3>
                    <p>
                        Emerson Lopes, 8 years coding Front-End. Specialized in Java Script, React and Mui. 
                        Responsable for our front-end team.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/emerson-lopes-a30b06167/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Joas} alt="Foto" />
                    </div>
                    <h3>Joas Sousa (Co Founder)</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/joas--silva/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        <img src={Jorg} alt="Foto" />
                    </div>
                    <h3>Jörg Bernhard Reske (Co Founder)</h3>
                    <p>
                        Jörg Bernhard Reske, german, 28 years of experience im Web-Design UX/UI, Startet in 1996 teaching Photoshop, Flash, Dream Weaver etc.
                        Created over 100 aplications like web-pages, Logos and Art-creations for companies world wide. One of the founders of W4Y and responsible for 
                        UX/UI and sales of the company.
                        Degrees: Administration, Logistics, FullStack Developer, UX/UI Designer.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/jorg-reske-b327699b//'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/JorgBernhard'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img src={Leo} alt="Foto" />
                    </div>
                    <h3>Leonardo Melo (Co Founder)</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                 <SwiperSlide>
                    <div className="img-box">
                    <img src={Will} alt="Foto" />
                    </div>
                    <h3>William Portela (Co Founder)</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/william-portela-72a91b135/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
