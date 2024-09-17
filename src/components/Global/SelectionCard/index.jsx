import React, { useState } from "react";

const Page = ({ set }) => {
  const [selected, setSelected] = useState(0);
  const [styleCard, setStyleCard] = useState({
    A: "h-32 w-11/12 text-center font-bold text-base [&>p]:visible",
    B: "h-28 w-10/12  [&>p]:invisible",
  });
  return (
    <>
      <label className="block mb-2 text-lg font-medium text-white">
        Jenis Kelamin
      </label>

      <div className=" flex items-end h-36">
        <div
          onClick={() => {
            setSelected(0);
            set("male");
          }}
          className={`cursor-pointer flex flex-col justify-center items-center bg-white  rounded-lg ${
            selected == 0 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img
            className="h-20 w-20"
            src="./assets/images/flat/men.png"
            alt=""
          />
          <p className="">Laki-Laki</p>
        </div>
        <div
          onClick={() => {
            setSelected(1);
            set("female");
          }}
          className={`cursor-pointer flex flex-col justify-center items-center bg-white rounded-lg ${
            selected == 1 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img
            className="h-20 w-20"
            src="./assets/images/flat/women.png"
            alt=""
          />
          <p className="">Perempuan</p>
        </div>
      </div>
    </>
  );
};

export default Page;
