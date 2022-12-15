import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardComponent from '../../../../components/Card';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';

import './styles.scss';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function ProjectsHome() {
  return (
    <div className="containerProjecsHome">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        spaceBetween={50}
        slidesPerView={5}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <CardComponent
            title="LamShoes"
            description="loremp5ada asljdasjdsabdhasa asoduhasuod"
            image="https://i.ytimg.com/vi/eBKcGAhkZUI/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            title="LamShoes"
            description="loremp5ada asljdasjdsabdhasa asoduhasuod"
            image="https://miro.medium.com/max/1135/1*E5VQSUDJZ-mfc_G7NkIZIw.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            title="LamShoes"
            description="loremp5ada asljdasjdsabdhasa asoduhasuod"
            image="https://reactscript.com/wp-content/uploads/2016/05/react-slick.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            title="LamShoes"
            description="loremp5ada asljdasjdsabdhasa asoduhasuod"
            image="https://i.ytimg.com/vi/eBKcGAhkZUI/maxresdefault.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardComponent
            title="LamShoes"
            description="loremp5ada asljdasjdsabdhasa asoduhasuod"
            image="https://blog.openreplay.com/static/3151737dc09dd5b114f55155f1e0aa66/6050d/hero.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProjectsHome;
