import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import GithubIcon from '../../assets/icons/github-icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon.png';
import VS from '../../assets/icons/visual-basic.png';
import ILL from '../../assets/icons/illustrator.png';
import XD from '../../assets/icons/xd.png';
import PS from '../../assets/icons/photoshop.png';
import Corel from '../../assets/icons/Coreldraw.png';
import DW from '../../assets/icons/dreamweaver.png';
import Figma from '../../assets/icons/figma.png';
import JS from '../../assets/icons/js.png';
import Linux from '../../assets/icons/linux.png';
import Node from '../../assets/icons/nodejs.png';
import Rea from '../../assets/icons/react.png';
import PG from '../../assets/icons/postgre.png';
import English from '../../assets/JorgReskeCVeng.pdf';
import Portugues from '../../assets/JorgReskeCVpt-br.pdf';
import Jorg from '../../assets/jbr-color.png';
import Work from '../../assets/softskills02.png'
import Certificado from '../../assets/certificados.png';
import PDF from '../../assets/PDF.png';
import "./style.css";
import ArrowUp from '../../assets/icons/arrow-up.png'

export default function Wall() {

    return (
        <div id="wall">

            <h1>My Wall</h1>

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
                        <img className="foto-J" src={Jorg} alt="Foto" />
                    </div>
                    <div className="text">
                    <p className="dark">Some Stuff about me then...</p>
                    <p>
                    Hallo, my name is Jorg, Working over 8 years with design and the role of creating web, mobile 
                    and product shapes for many companies. I am focused on working with a team and achieved excelent 
                    results.<br></br> <br></br>At the moment I am working freelancer with a small team creating interfaces to connect 
                    diferent programms with each other. It comes handy that I have a Diplom in Front-end and Back-end 
                    Development as well. I am happy to join your team. 
                    <br></br><br></br>
                    I startet in 1996 teaching Photoshop, Flash, Dream Weaver etc. Created over 100 aplications 
                    like web-pages, Logos and Art-creations for companies world wide. 
                    Being a UX/UI makes me happy. Creating, designing and showing how you can change the world 
                    brings me to life.
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img className="foto-cv" src={PDF} alt="Foto" />
                    </div>
                    <div className="text">
                    <h3>If you like please download my resume for analyze.</h3>
                    <div className="Documents">
                    <a className="English" href={English} download="English">Download Resume English</a> 
                    <a className="Portugues" href={Portugues} download="Portugues">Download Resume Portugues</a> 
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img className="foto-docu" src={Certificado} alt="Foto" />
                    </div>
                    <div className="text">
                    <p className="dark">Things I have accomplished</p>
                    <p>
                        Over the years I achieved some degrees in: <br></br>
                        International Administration, <br></br>
                        Transport, Warehouse and Administration Logistics, <br></br>
                        Frond-End Developer, <br></br>
                        Back-End Programmer,<br></br>
                        UX/UI Designer.(Here I found my self.)
                    </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                    <img className="foto-skills" src={Work} alt="Foto" />
                    </div>
                    <div className="text">
                    <p className="dark">What I use (Hard-Skills)</p>
                    <p>
                        UX / UI Designer, You can't get without Photoshop, Corel-Draw, Adobe-XD, Adobe-Illustrator, 
                        Dream-Weaver and Figma and Ink-scape.
                        <br></br> <br></br>
                        Front-End Coding with Java-Script is probably the best way, you can use many Lybaries like 
                        React, React-Dom, Mui, Swiper and so on.......
                        <br></br> <br></br>
                        Back-End Programming, I use Java-Script, Postgres-Data-bank or SQL. 
                        A lot of interfacing applications are made with jaca-script, it's the best way to connect 
                        them all. <br></br> <br></br>
                        </p>
                        
                    <div className="wall-links">
                    <img src={Linux} alt="linux-icon" />
                    <img src={ILL} alt="ai-icon" />
                    <img src={XD} alt="xd-icon" />
                    <img src={PS} alt="ps-icon" />
                    <img src={DW} alt="dw-icon" />
                    <img src={Corel} alt="corel-icon" />
                    <img src={Figma} alt="figma-icon" />
                    <img src={JS} alt="js-icon" />
                    <img src={Node} alt="node-icon" />
                    <img src={Rea} alt="react-icon" />
                    <img src={PG} alt="postgres-icon" />
                    <img src={VS} alt="vs-icon" />
                    <img src={LinkedinIcon} alt="linkedin icon" />
                    <img src={GithubIcon} alt="github icon" />   
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="ende">
            <a className="feil" href="# "><img src={ArrowUp} alt="up" /></a>
           </div>
        </div>
    );
}
