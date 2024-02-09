import React, { useEffect } from "react";
import "./SectionSeven.css";
import Buttons from "../buttons/buttons.jsx";
import Text from "../json/text.json";
import Images from "../json/images.json";
import GroupImg from "../assets/Group.svg";
import LogoImg from "../assets/Group_458.png";
import SliderImgF from "../assets/grillkurs_icon.png";
import SliderImgS from "../assets/zvezdice.png";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

const CommentsSwiper = ({ comments }) => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={0}
      initialSlide={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        1000: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      className="secondSwiper"
      modules={[Navigation]}
    >
      {comments.map((comment, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide">
            <img src={SliderImgF} alt="slika1"></img>
            <img src={SliderImgS} alt="slika2"></img>
            <p>{comment.text}</p>
            <p>{comment.author}</p>
            {comment.profession && <p>{comment.profession}</p>}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

function SectionSeven() {
  return (
    <div className="seventh-page">
      <div className="general-div">
        <div className="first">
          <div className="first-first">
            <div className="halfs">
              <img src={LogoImg} alt="logo" />
            </div>
            <div className="halfs">
              <h2>Metzgerei Brath ist Mitglied im Genussnetzwerk</h2>
              <Buttons color="red" text="Gehen zu site"></Buttons>
            </div>
          </div>
          <hr className="line" />
          <div className="image-container">
            <img src={GroupImg} alt="Your Image" className="centered-image" />
          </div>
        </div>
        <div className="second">
          <div className="first-first">
            <div className="half">
              <h2>Auszeichnungen</h2>
            </div>
            {Images.awards.map((award, index) => (
              <div className="halfs" key={index}>
                <img src={award.image} alt={`award-${index}`} />
                <p>{award.text}</p>
              </div>
            ))}
          </div>
          <hr className="line" />
          <div className="image-container">
            <img src={GroupImg} alt="Your Image" className="centered-image" />
          </div>
        </div>
        <div className="third">
          <div className="first-three">
            <p>Empfehlungs</p>
            <h2>Was die Leute über uns sagen</h2>
          </div>
          <div className="second-three">
            <CommentsSwiper comments={Text.comments_swiper} />
          </div>
          <div className="first-three">
            <Buttons color="red" text="Alle Berichte"></Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSeven;
