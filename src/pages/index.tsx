import { useEffect, useRef, useState } from "react";
import CardSlider from "@/components/Global/CardSlider";
import SelectionCard from "@/components/Global/SelectionCard";
import ResultBMI from "@/components/ResultBMI";
import Figure from "@/components/Figure";
import Accordion from "@/components/Global/Accordion";
import Link from "next/link";
import { useIsVisible } from "@/hooks";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
  const [name, setName] = useState("");
  const [usia, setUsia] = useState();
  const [berat, setBerat] = useState();
  const [tinggi, setTinggi] = useState();
  const [pekerjaan, setPekerjaan] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("sedentary");
  const [result, setResult] = useState();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("");
  const [calorie, setCalorie] = useState();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const ref6 = useRef(null);
  // const ref7 = useRef(null);/
  // const ref8 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);
  const isVisible3 = useIsVisible(ref3);

  function calculateCaloriesNeeded() {
    // Calculate Basal Metabolic Rate (BMR) using the Harris-Benedict equation
    let bmr;
    console.log(gender);
    if (gender === "male") {
      // BMR formula for males
      bmr = 88.362 + 13.397 * berat + 4.799 * tinggi - 5.677 * usia;
    } else if (gender === "female") {
      // BMR formula for females
      bmr = 447.593 + 9.247 * berat + 3.098 * tinggi - 4.33 * usia;
    } else {
      throw new Error("Invalid gender provided");
    }

    // Activity multiplier based on activity level
    let activityMultiplier;
    console.log(activity);
    switch (activity) {
      case "sedentary":
        activityMultiplier = 1.2;
        break;
      case "lightly active":
        activityMultiplier = 1.375;
        break;
      case "moderately active":
        activityMultiplier = 1.55;
        break;
      case "very active":
        activityMultiplier = 1.725;
        break;
      default:
        throw new Error("Invalid activity level provided");
    }

    // Calculate daily calorie needs
    let dailyCalories = bmr * activityMultiplier;
    let num = Number(dailyCalories);
    let rounded = num.toFixed(2);
    setCalorie(Number(rounded));
  }

  useEffect(() => {
    function BMICategory() {
      console.log("result", result);
      if (result < 18.5) {
        setCategory("Kurus");
      } else if (result >= 18.5 && result < 24.9) {
        setCategory("Normal");
      } else if (result >= 24.9 && result < 29.9) {
        setCategory("Kelebihan Berat Badan");
      } else {
        setCategory("Obesitas");
      }
    }
    BMICategory();
  }, [result]);

  function handleSubmit() {
    if (!usia || !berat || !usia) {
      alert("Lengkapi Data Anda");
      return;
    }
    calculateCaloriesNeeded();
    console.log(name, usia, berat, tinggi, pekerjaan);
    let num = Number((berat / (tinggi * tinggi)) * 10000);
    let rounded = num.toFixed(2);
    setResult(Number(rounded));
    setShow(true);
  }

  return (
    <div>
      {/* hero */}
      <div
        className=" w-full bg-cover bg-center "
        style={{ backgroundImage: "url('assets/images/flat/bg-image.jpg')" }}
      >
        <div
          id="home"
          className=" overflow-hidden bg-gradient-custom pt-[120px] md:pt-[130px] lg:pt-[160px]"
        >
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                <div className="flex flex-row mx-auto justify-center mb-4">
                  <img
                    className="h-20"
                    src="assets/images/logo/lp2m.png"
                    alt=""
                  />
                  <img
                    className="h-20"
                    src="assets/images/logo/kemdik.png"
                    alt=""
                  />
                  <img
                    className="h-20"
                    src="assets/images/logo/bima.png"
                    alt=""
                  />
                  <img
                    className="h-20"
                    src="assets/images/logo/km.png"
                    alt=""
                  />
                </div>
                <div
                  className="hero-content wow  animation-fadeInUp Up mx-auto max-w-[780px] text-center"
                  data-wow-delay=".2s"
                >
                  <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                    GIZI SEIMBANG
                  </h1>
                  <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                    REMAJA SEHAT BEBAS OBESITAS
                  </p>
                  <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                    <li>
                      <Link
                        href="https://links.tailgrids.com/play-download"
                        className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                      >
                        Cek Lebih Lanjut
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4">
                <div
                  className="wow  animation-fadeInUp Up relative z-10 mx-auto max-w-[845px]"
                  data-wow-delay=".25s"
                >
                  <div className="mt-0">
                    <img
                      src="assets/images/hero/hero-image.jpg"
                      alt="hero"
                      className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="absolute -left-9 bottom-0 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="absolute -right-6 -top-6 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3333 104)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 60.3333 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 88.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 117.667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 74.6667 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 103 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="31.0001"
                        r="1.66667"
                        transform="rotate(-90 132 31.0001)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 31 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 103 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="16.3336"
                        r="1.66667"
                        transform="rotate(-90 132 16.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 31 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3336"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3336)"
                        fill="white"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={103}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 103 1.66707)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="white"
                      />
                      <circle
                        cx={132}
                        cy="1.66707"
                        r="1.66667"
                        transform="rotate(-90 132 1.66707)"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero */}

      <section
        id="about"
        className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] "
      >
        <div className="container">
          <div className="wow  animation-fadeInUp Up" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className={`w-full px-4 lg:w-1/2 `}>
                <div
                  ref={ref1}
                  className={`transition-all ease-out duration-700 
                  ${
                    isVisible1
                      ? "opacity-100 -translate-x-0"
                      : "-translate-x-[100%] opacity-0"
                  }
                  `}
                >
                  <div className="mb-12 max-w-[540px] lg:mb-0">
                    <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                      Mengapa Gizi Seimbang Penting?
                    </h2>
                    <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                      Gizi seimbang yaitu apabila asupan makanan cukup secara
                      kuantitas, kualitas, dan mengandung berbagai zat gizi yang
                      dibutuhkan tubuh. Tujuannya agar kesehatan tubuh terjaga,
                      pertumbuhan sempurna (pada anak-anak), zat gizi tersimpan,
                      dan aktivitas fungsi kehidupan sehari-hari berjalan
                      optimal.
                    </p>
                    <Link
                      href={"/mengapa-gizi-seimbang-penting"}
                      className="cursor-pointer inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                    >
                      Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 ">
                <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                      <img
                        src="./assets/images/about/about-image-01.jpg"
                        alt="about image"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                    <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                      <img
                        src="./assets/images/about/about-image-02.jpg"
                        alt="about image"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden  py-12 sm:mb-8 sm:h-[160px] lg:mb-4 xl:mb-8">
                      <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                        <img
                          src="./assets/images/about/about-image-03.jpg"
                          alt="about image"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-96 h-96 bg-black absolute"></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div
          ref={ref3}
          className={`transition-all ease-out duration-1000
                  ${
                    isVisible3
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }
                  `}
        >
          <div className="container mx-auto">
            <div className="relative overflow-hidden">
              <div className="-mx-4 flex flex-wrap items-stretch">
                <div className="w-full px-4 ">
                  <div className="mx-auto max-w-[570px] text-center ">
                    <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                      <span>
                        Cek Berat Badan Ideal Anda dengan Kalkulator BMI
                      </span>
                    </h2>
                  </div>
                  <div className=" flex md:flex-row flex-col py-5 px-14 justify-center ">
                    <div className="mx-4 md:w-80 ">
                      <form className=" mx-auto">
                        <div className="mb-5">
                          <label
                            htmlFor=""
                            className="block mb-2 text-lg font-medium text-white"
                          >
                            Nama
                          </label>
                          <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id=""
                            className=" bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor=""
                            className="block mb-2 text-lg font-medium text-white"
                          >
                            Usia
                          </label>
                          <input
                            onChange={(e) => setUsia(e.target.value)}
                            type="number"
                            id=""
                            className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor=""
                            className="block mb-2 text-lg font-medium text-white"
                          >
                            Berat Badan (kg)
                          </label>
                          <input
                            onChange={(e) => setBerat(e.target.value)}
                            type="number"
                            id=""
                            className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <label
                            htmlFor=""
                            className="block mb-2 text-lg font-medium text-white"
                          >
                            Tinggi Badan (cm)
                          </label>
                          <input
                            onChange={(e) => setTinggi(e.target.value)}
                            type="number"
                            id=""
                            className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                          />
                        </div>
                      </form>
                    </div>
                    <div className="mx-4 md:w-80">
                      <form className=" mx-auto">
                        <div className="mb-5">
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-lg font-medium text-white"
                          >
                            Pekerjaan
                          </label>
                          <select
                            onChange={(e) => setPekerjaan(e.target.value)}
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option>Ibu Rumah Tangga</option>
                            <option>PNS</option>
                            <option>SWASTA</option>
                            <option>Lainnya</option>
                          </select>
                        </div>

                        <div className="mb-5">
                          <SelectionCard set={setGender} />
                        </div>
                        <div className="mb-5">
                          <CardSlider set={setActivity} />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="mx-auto max-w-[570px] text-center"
                    onClick={() => handleSubmit()}
                  >
                    <div className="cursor-pointer inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">
                      Hitung BMI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="absolute left-0 top-0">
              <svg
                width={495}
                height={470}
                viewBox="0 0 495 470"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={55}
                  cy={442}
                  r={138}
                  stroke="white"
                  strokeOpacity="0.04"
                  strokeWidth={50}
                />
                <circle
                  cx={446}
                  r={39}
                  stroke="white"
                  strokeOpacity="0.04"
                  strokeWidth={20}
                />
                <path
                  d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                  stroke="white"
                  strokeOpacity="0.08"
                  strokeWidth={12}
                />
              </svg>
            </span>
            <span className="absolute bottom-0 right-0">
              <svg
                width={493}
                height={470}
                viewBox="0 0 493 470"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={462}
                  cy={5}
                  r={138}
                  stroke="white"
                  strokeOpacity="0.04"
                  strokeWidth={50}
                />
                <circle
                  cx={49}
                  cy={470}
                  r={39}
                  stroke="white"
                  strokeOpacity="0.04"
                  strokeWidth={20}
                />
                <path
                  d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                  stroke="white"
                  strokeOpacity="0.06"
                  strokeWidth={13}
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
      {/* ====== CTA Section End */}
      {/* ====== Pricing Section Start */}

      {/* {show && ( */}
      <section
        id="pricing"
        className={`relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] img-bg ${
          show ? "visible" : "invisible"
        }`}
      >
        <div className="relative z-10 overflow-hidden   py-20 lg:py-[115px]">
          <div
            ref={ref2}
            className={`transition-all ease-out duration-700 
                  ${
                    show && isVisible2
                      ? "opacity-100 translate-y-0"
                      : "translate-y-[20%] opacity-0"
                  }
                  `}
          >
            <h1 className="text-center text-white text-5xl font-bold mb-14">
              Hasil Perhitungan
            </h1>
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <ResultBMI imtval={result} kategori={category} cal={calorie} />
            <div className="mx-5"></div>
            <Figure kategori={category} cal={calorie} />
          </div>
          </div>
        </div>
      </section>
      {/* )} */}

      <section>{/* <Accordion /> */}</section>
    </div>
  );
}

export default App;
