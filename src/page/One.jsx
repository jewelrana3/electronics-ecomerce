
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const One = () => {
  return (
    <>
      <Swiper
      
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className=""
      >
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-80 h-64 p-10' src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default One;
