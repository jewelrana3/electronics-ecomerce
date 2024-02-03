import React from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import "./About.css";

import { AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useAbout from "../../hooks/useAbout";
import FourMan from "./FourMan";

const About = () => {
  const [about] = useAbout();

  return (
    <div className="">
      <div className="mb-20">
        <div className="relative">
          <img
            style={{ height: "700px" }}
            className="w-full"
            src="https://i.ibb.co/QXW2dKQ/cheerful-woman-using-laptop-workplace-109710-60-1.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div>
            <p className="text-xl">About us</p>
            <h1 className="lg:text-5xl text-3xl font-bold">
              Welcome to our <br />
              Harri Shop
            </h1>
          </div>
        </div>
        <div className="mt-48 px-10 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="" style={{ width: "1100px" }}>
            <h2 className="text-3xl font-bold">
              It started with a <br /> bang now we are here.
            </h2>
          </div>
          <div className="text-gray-500 text-lg w-11/12 text-justify gap-6">
            <p>
              Ut at maximus magna. Vestibulum interdum sapien in facilisis
              imperdiet. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Proin ac placerat risus.
              Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam
              non luctus elementum. Cras sollicitudin, nisi in semper viverra,
              felis diam consequat mi, quis tincidunt ligula
            </p>
            <p className="mt-4">
              Nam nibh diam, varius quis lectus eget, laoreet cursus metus.
              morbi augue lectus, dapibus eget justo nec, consectetur auctor nis
              luctus neque.!
            </p>
          </div>
        </div>
        <div className="mt-28 lg:px-32 px-10 grid grid-cols-1 md:grid-cols-3 gap-9 ">
          <div className="card-container border border-gray-300">
            <div className="card-details text-2xl py-6 px-4 w-full ">
              <div className="flex justify-between">
                <p className="icons text-3xl">
                  <AiOutlineCloudServer />
                </p>
                <p>
                  <BsArrowUpRight />
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base">10k</p>
                <p className="font-bold">
                  {" "}
                  <span className="cardP">Listed Products</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card-container border border-gray-300">
            <div className="card-details text-2xl py-6 px-4">
              <div className="flex justify-between">
                <p className="icons">
                  <AiOutlineCloudServer />
                </p>
                <p>
                  <BsArrowUpRight />
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base">5k</p>
                <p className="font-bold">
                  {" "}
                  <span className="cardP">Lovely Customer</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card-container border border-gray-300">
            <div className="card-details text-2xl py-6 px-4 ">
              <div className="flex justify-between">
                <p className="icons">
                  <AiOutlineCloudServer />
                </p>
                <p>
                  <BsArrowUpRight />
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base">5k</p>
                <p className="font-bold">
                  <span className="cardP">Support</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://i.ibb.co/ZLJhVYW/about-gallery-slider-1.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://i.ibb.co/JFbCdcg/about-gallery-slider-2.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://i.ibb.co/R9r554j/about-gallery-slider-3.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
      <div className="px-20">
        <h1 className="text-5xl font-bold mt-10 text-center">Our Awards.</h1>
        <div className="border-b-2 border-t-2 md:flex items-center py-6 justify-between mx-auto mt-10">
          <div>
            <h1>FREE SHIPPING</h1>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Modern painting award jump</h2>
            <p>Runner Up - “ Decor of the week “</p>
          </div>
          <div>
            <span className="text-3xl">
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
        <div className="border-b-2  md:flex items-center py-6 justify-between mx-auto mt-10">
          <div>
            <h1>FREE RETURN</h1>
          </div>
          <div>
            <h2 className="text-3xl font-bold">People's choice: best design</h2>
            <p>Runner Up - “ Decor of the week “</p>
          </div>
          <div>
            <span className="text-3xl">
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
        <div className="border-b-2  md:flex items-center py-6 justify-between mx-auto mt-10">
          <div>
            <h1>SECURE PAYMENT</h1>
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              Webby's,mean Site of the Year
            </h2>
            <p>Runner Up - “ Decor of the week “</p>
          </div>
          <div>
            <span className="text-3xl">
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex mt-20 items-center">
        <div className="lg:w-1/2 ">
          <img
            className="w-full h-auto"
            src="https://i.ibb.co/NW7CXKw/21617779046.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 px-4 py-8 lg:py-20 border border-black">
          <p className="text-base md:text-lg lg:text-xl">
            Get in touch with us to see how
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mt-2 lg:mt-4">
            Provide smart and flexible digital services
          </h1>
          <div className="collapse collapse-plus bg-base-200 mt-5">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-lg md:text-xl lg:text-2xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-6">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl lg:text-2xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 mt-6">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-lg md:text-xl lg:text-2xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 md:px-28 px-2">
        <div className="flex justify-between">
          <div>
            <h1 className="md:text-5xl text-3xl font-bold">
              One Team ,<br />
              Many Talents
            </h1>
          </div>
          <div className="flex items-center cursor-pointer hover:text-red-900 underline font-bold">
            <p>Join Our team</p>
            <p>
              <AiOutlineArrowRight />
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-28 mt-10">
          {about.map((product) => (
            <FourMan key={product._id} product={product}></FourMan>
          ))}
        </div>
      </div>
      {/* scroll animation */}
      <div>
        <div className="container-img3 mt-28">
          <div className="slide-container3">
            <div className="slide-image3">
              <img src="https://i.ibb.co/8NF1pqV/brand-8-1.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/vDH4rKB/brand-5.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/zxWYnBj/brand-4.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/T0nSgwz/brand-7.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/stmmMWY/brand-2.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/8NF1pqV/brand-8-1.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/vDH4rKB/brand-5.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/zxWYnBj/brand-4.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/T0nSgwz/brand-7.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/stmmMWY/brand-2.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="container-img2 -mt-20">
          <div className="slide-container2">
            <div className="slide-image3">
              <img src="https://i.ibb.co/vDH4rKB/brand-5.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/zxWYnBj/brand-4.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/T0nSgwz/brand-7.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/8NF1pqV/brand-8-1.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/stmmMWY/brand-2.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/8NF1pqV/brand-8-1.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/vDH4rKB/brand-5.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/zxWYnBj/brand-4.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/T0nSgwz/brand-7.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/stmmMWY/brand-2.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
            <div className="slide-image3">
              <img src="https://i.ibb.co/yfWH9vg/brand-6.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
