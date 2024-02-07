import React, { useEffect } from "react";
import "./Section_one.css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperCore.use([Navigation, Pagination]);

function SectionOne() {
  return (
    <>
      <div className="first-page">
        <div className="text-container hide-on-small">
          <h1>Heiko Brath Metzgermeister</h1>
          <p>
            Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit
            argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam
            Aperol Spritz probatus pertinax.
          </p>
        </div>
        <div className="swiper firstSwiper">
          <Swiper
            className="swiper-container"
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="swiper-slide"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
