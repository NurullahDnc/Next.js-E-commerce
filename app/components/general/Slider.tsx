"use client";
import React from "react";
import Slider from "react-slick";
import Head from "next/head";

export default function SliderComp() {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderStyle = {
    overflow: "hidden",
  };

  return (
    <div style={sliderStyle}>
      <header>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </header>

      <Slider {...settings}>
        <div className="  w-1/2 h-[550px] flex items-center ">
          <img src="./images/yagmur-efektli.gif" alt="" />
        </div>

        <div className="!flex items-center   ">
          <div className="px-5 w-1/2 ">
            <h3 className="text-5xl font-bold text-blacks ">
              Yaz'a Özel Dev İndirim Burda
            </h3>
            <p className="text-lg my-4 text-blacks ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              dicta impedit iste iusto dignissimos nemo eligendi architecto.
              Quia, libero dolor hic voluptatum veritatis, molestiae quas dicta
              voluptatem tenetur facilis quisquam!
            </p>
            <button className="rounded-full border py-2 px-5 text-2xl bg-yellows outline-none">
              İncele
            </button>
          </div>
          <div className="  w-1/2 h-[550px] flex items-center ">
            <img
              src="./images/Ekran görüntüsü 2023-12-13 211358.png"
              className="object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="!flex items-center   ">
          <div className="px-5 w-1/2 ">
            <h3 className="text-5xl font-bold text-blacks ">
              Yaz'a Özel Dev İndirim Burda
            </h3>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              dicta impedit iste iusto dignissimos nemo eligendi architecto.
              Quia, libero dolor hic voluptatum veritatis, molestiae quas dicta
              voluptatem tenetur facilis quisquam!
            </p>
            <button className="rounded-full border py-2 px-5 text-2xl bg-yellows outline-none">
              İncele
            </button>
          </div>
          <div className="  w-1/2 h-[550px] flex items-center ">
            <img
              src="./images/superfly-9-academy-mercurial-dream-speed-mg-yüksek-bilekli-krampon-39fWKG.png"
              className="object-cover"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
