import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// import images 
import img1 from '../../../assets/All images/1.png';
import img2 from '../../../assets/All images/2.png';
import img3 from '../../../assets/All images/3.png';
import img4 from '../../../assets/All images/4.png';
import img5 from '../../../assets/All images/5.png';
import img6 from '../../../assets/All images/6.png';
import img7 from '../../../assets/All images/7.png';
import img8 from '../../../assets/All images/8.png';
import img9 from '../../../assets/All images/9.png';
import img10 from '../../../assets/All images/10.png';
import img11 from '../../../assets/All images/11.png';
import img12 from '../../../assets/All images/12.png';
import img13 from '../../../assets/All images/13.png';
import img14 from '../../../assets/All images/14.png';
import img15 from '../../../assets/All images/15.png';
import img16 from '../../../assets/All images/16.png';
import img17 from '../../../assets/All images/17.png';
import img18 from '../../../assets/All images/18.png';
import img19 from '../../../assets/All images/19.png';
import img20 from '../../../assets/All images/20.png';
import img21 from '../../../assets/All images/21.png';
import img22 from '../../../assets/All images/22.png';
import img23 from '../../../assets/All images/23.png';
import img24 from '../../../assets/All images/24.png';

const SlideCoconuts = () => {
    return (
        <div className='my-10'>
            <h2 className='text-yellow-400 text-2xl md:text-4xl font-semibold my-4'>OUR PRODUCTS SLIDE -------</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img13} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img14} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img15} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img16} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img17} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img18} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img19} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img20} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img21} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img22} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img23} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img24} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlideCoconuts;