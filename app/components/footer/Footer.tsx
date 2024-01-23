import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" md:flex bg-blacks text-grays p-8  md:p-12 mt-5 ">
      <div className="md:w-2/4 w-full justify-center space-y-9 ">
        <h1 className=" font-bold text-2xl text-yellows  ">Trendyol</h1>
        <p className="text-sm md:text-[14px] leading-6 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ex a
          sunt odio reprehenderit laborum officia? Quis reprehenderit dolor at
          fugit! Nulla, quis. Itaque rem quidem recusandae ad est molestias.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem, eum quas assumenda alias facilis vero placeat debitis
          architecto itaque
        </p>
        <div>
          <ol className="flex text-3xl gap-3 md:gap-9 text-yellows">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
          </ol>
        </div>
        <p className="text-sm">
          Türkiye © 2023 Nike, Inc. Tüm Hakları Saklıdır
        </p>
      </div>

      <div className="ml-auto m-auto md:mt-0 mt-4">
        <div className="w-full space-y-5 md:space-y-9 ">
          <h1 className=" font-bold text-lg text-graysLight ">
            Bültenimize kaydolun
          </h1>
          <div className="flex gap-5  border-none  ">
            <input
              placeholder="E-posta adresiniz"
              className="py-2 w-[180px] h-[40px] md:h-[50px] md:w-[350px] outline-none bg-black rounded-full pl-4 "
            />
            <button className="w-[70px] md:w-[140px] h-[35px] md:h-[45px] text-[9px] md:text-lg bottom-2 md:bottom-5   bg-yellows text-blacks flex justify-center items-center rounded-full ">
              Gönder
            </button>
          </div>
          <div className="flex gap-6 md:gap-[10rem] text-grays text-[17px] ">
            <ol className="space-y-0.5 text-[16px] ">
              <li className="font-bold text-xl mb-2 text-yellows">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ol>

            <ol className="space-y-0.5">
            <li className="font-bold text-xl mb-2 text-yellows">
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Helps</a>
              </li>
              <li>
                <a href="#">Help Help</a>
              </li>
               
            </ol>

            <ol className="space-y-0.5 ">
            <li className="font-bold text-xl mb-2 text-yellows">
                <a href="#">Social</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
