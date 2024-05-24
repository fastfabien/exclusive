"use client";
import { A11y, Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export const PromotionCarousel = () => {
  return (
    <div className="max-w-[800px]">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black flex flex-row gap-10">
              <div className="flex flex-col w-1/2 px-16 py-14">
                <div className="flex flex-row gap-6 items-center">
                  <Image
                    alt="Logo apple"
                    src="/apple_logo.png"
                    width={40}
                    height={49}
                  />
                  <span className="font-base font-normal leading-6 text-white">
                    iPhone 14 Series
                  </span>
                </div>
                <h2 className="text-4xl font-semibold leading-tight text-white mt-5 mb-6">
                  Up to 10% off Voucher
                </h2>
                <Link
                  href="/"
                  className="flex flex-row gap-2 items-center text-white capitalize font-medium px-0 hover:no-underline relative after:block w-fit after:w-[70%] after:absolute after:bottom-[-2px]  after:h-[1px] after:bg-white"
                >
                  shop now
                  <ArrowRight className="text-white" />
                </Link>
              </div>
              <div className="w-1/2 scale-90 bg-hero" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
