import React from "react";
import Cartİmage from "../general/Cartİmage";
import { log } from "console";
import Heading from "../general/Heading";

//3 tane buyuk resim

const cartList = [
  {
    id: 1,
    image: "./images/air-jordan-1-low-se-craft-ayakkabısı-mT5vr2.png",
    text: "Ayakkabi",
  },
  {
    id: 2,
    image: "./images/jordan-flight-heritage-dolgulu-ceketi-8Q86vn.png",

    text: "Mont",
  },
  {
    id: 3,
    image: "./images/Ekran görüntüsü 2023-12-13 211358.png",
    text: "Ayakkabi",
  },
];

export default function Cart() {
  return (
    <div >
      <Heading text="Daha Fazlasını Keşfet" />

      <div className="w-[100%] flex h-[150px] md:h-[500px] ">
        {cartList.map((cart) => (
          <Cartİmage text={cart.text} image={cart.image} />
        ))}
      </div>
    </div>
  );
}
