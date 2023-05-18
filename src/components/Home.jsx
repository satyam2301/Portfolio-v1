import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import wave from '../assets/wave.webp';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg z-10 mx-auto flex flex-row items-center justify-center h-full px-4 ">
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full ">
              <div className="flex flex-row">
                <span className="text-xl mb-8 uppercase tracking-widest text-gray-400">
                  Hello!
                </span>

                <span>
                  <img
                    style={{
                      width: '30px',
                      height: '30px',
                      marginRight: '10px',
                      marginLeft: '10px',
                    }}
                    src={wave}
                    alt="hello wave"
                  />
                </span>
                <span className="text-xl mb-8 uppercase tracking-widest text-gray-400">
                  I'M
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl tracking-wider font-bold uppercase text-white">
                Satyam Kumar
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-xl mb-8 uppercase tracking-widest text-gray-400">
                I'M from chandigarh
              </p>
              <h2 className="text-3xl sm:text-5xl tracking-wider font-bold uppercase text-white">
                A web Developer
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
