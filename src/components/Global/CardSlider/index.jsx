import React, { useEffect, useState } from "react";

const Page = ({ set }) => {
  const [val, setval] = useState(0);
  const [styleCard, setStyleCard] = useState({
    A: "h-32 w-2/5 text-center font-bold text-base [&>p]:visible",
    B: "h-16 w-1/5 [&>p]:hidden",
  });

  useEffect(() => {
    setActivityLevel();
  }, [val]);

  function setActivityLevel() {
    let activityLevel;

    if (val >= 0 && val <= 5) {
      activityLevel = "sedentary";
    } else if (val > 5 && val <= 10) {
      activityLevel = "lightly active";
    } else if (val > 10 && val <= 15) {
      activityLevel = "moderately active";
    } else if (val > 15 && val <= 20) {
      activityLevel = "very active";
    } else {
      activityLevel = "Invalid number";
    }
    console.log("sad", activityLevel);
    set(activityLevel);
  }

  return (
    <>
      <label className="block mb-2 text-lg font-medium text-white">
        Tingkat Aktivitas
      </label>
      <div className=" flex items-end h-36">
        <div
          className={`flex flex-col justify-center py-4 px-2 bg-white rounded-lg ${
            val <= 5 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img
            className="p-1"
            src="./assets/images/flat/tidakaktif.png"
            alt=""
          />
          <p className="">Tidak Aktif</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center py-4 px-2 bg-white  rounded-lg ${
            val <= 10 && val > 5 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img
            className="p-1"
            src="./assets/images/flat/kurangaktif.png"
            alt=""
          />
          <p className="">Kurang Aktif</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center py-4 px-2 bg-white rounded-lg ${
            val <= 15 && val > 10 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img className="p-1" src="./assets/images/flat/aktif.png" alt="" />
          <p className="">Aktif</p>
        </div>
        <div
          className={`flex flex-col justify-center items-center py-4 px-2 bg-white rounded-lg ${
            val > 15 ? styleCard.A : styleCard.B
          } mx-2 transition-all ease-linear `}
        >
          <img
            className="p-1"
            src="./assets/images/flat/sangataktif.png"
            alt=""
          />
          <p className="">Sangat Aktif</p>
        </div>
      </div>
      <input
        onChange={(e) => setval(e.target.value)}
        type="range"
        min="0"
        max="20"
        value={val}
        className="w-full"
        // className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "
      />
    </>
  );
};

export default Page;
