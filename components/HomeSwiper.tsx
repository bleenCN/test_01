"use client";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import { CSSProperties, useEffect, useMemo, useState } from "react";

export default function HomeSwiper() {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [swiperStatus, setSwiterStatus] = useState<
    "isBeginning" | "isEnd" | "none"
  >("isBeginning");

  const maskStyle: CSSProperties = useMemo(() => {
    if (swiperStatus === "isBeginning") {
      return {
        maskImage: "linear-gradient(to left, transparent 0%, #fff 5%)",
      };
    }
    if (swiperStatus === "isEnd")
      return {
        maskImage: "linear-gradient(to right, transparent 0%, #fff 5%)",
      };
    return {
      maskImage:
        "linear-gradient(to left, transparent 0%, #fff 5%,#fff 95%, transparent 100%)",
    };
  }, [swiperStatus]);
  useEffect(() => {
    if (!swiper) return;
    swiper.on("slideChange", (swiper) => {
      if (swiper.isBeginning) return setSwiterStatus("isBeginning");
      if (swiper.isEnd) return setSwiterStatus("isEnd");
      setSwiterStatus("none");
    });
    console.log(swiper);
  }, [swiper]);

  const cardInfo1: CardInfo1 = {
    title: "Introduction to programming",
    tags: ["Beginner"],
    content:
      "This course covers the most basic concepts in programming using Solidity as an example.",
    course: 5,
    time: 36,
    completed: 45,
  };

  const cardInfo2: CardInfo2 = {
    title: "Moonshot 2023 Summer Hackathon",
    tags: ["All Tracks", "Solidity", "ZK"],
    singup: "4/15 - 6/15",
    event: "6/15 - 7/15",
    grantSize: "200k",
  };

  const cardInfo3: CardInfo3 = {
    title: "Web 3.0 Programming Basics",
    tags: ["Beginner"],
    content:
      "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
    time: 36,
    course: 5,
  };

  const cardInfo4: CardInfo4 = {
    title: "What is Bitcoin",
    time: 36,
    img: "/img/btc_coin.png",
  };

  return (
    <div className="relative">
      <div style={maskStyle}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          onSwiper={(swiper) => setSwiper(swiper)}
          className="pt-4"
        >
          <SwiperSlide style={{ width: "fit-content" }}>
            <div className="p-1">
              <Card1 info={cardInfo1} />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "fit-content" }}>
            <div className="p-1">
              <Card2 info={cardInfo2} />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "fit-content" }}>
            <div className="p-1">
              <Card3 info={cardInfo3} />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ width: "fit-content" }}>
            <div className="p-1">
              <Card4 info={cardInfo4} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
        <PrevButton swiper={swiper} />
      </div>
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
        <NextButton swiper={swiper} />
      </div>
    </div>
  );
}

function PrevButton(props: { swiper?: SwiperClass }) {
  const [hidden, setHidden] = useState(true);
  const swiper = props.swiper;
  const handleClick = () => swiper?.slidePrev(300);

  swiper?.on("slideChange", (swiper) => {
    if (swiper.isBeginning) setHidden(true);
    else setHidden(false);
  });

  return (
    <button
      className={
        "group transition-all" +
        (hidden ? " opacity-0 pointer-events-none" : "")
      }
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="group-hover:hidden rotate-180"
      >
        <circle
          cx="24"
          cy="24"
          r="23.6"
          fill="black"
          stroke="#676767"
          strokeWidth="0.8"
        />
        <path
          d="M19 16L30 24L19 32"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="hidden group-hover:block rotate-180"
      >
        <circle cx="24" cy="24" r="24" fill="#303030" />
        <path
          d="M19 16L30 24L19 32"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </svg>
    </button>
  );
}

function NextButton(props: { swiper?: SwiperClass }) {
  const [hidden, setHidden] = useState(false);
  const swiper = props.swiper;
  const handleClick = () => swiper?.slideNext(300);

  swiper?.on("slideChange", (swiper) => {
    if (swiper.isEnd) setHidden(true);
    else setHidden(false);
  });

  return (
    <button
      className={
        "group transition-all" +
        (hidden ? " opacity-0 pointer-events-none" : "")
      }
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="group-hover:hidden"
      >
        <circle
          cx="24"
          cy="24"
          r="23.6"
          fill="black"
          stroke="#676767"
          strokeWidth="0.8"
        />
        <path
          d="M19 16L30 24L19 32"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="hidden group-hover:block"
      >
        <circle cx="24" cy="24" r="24" fill="#303030" />
        <path
          d="M19 16L30 24L19 32"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
        />
      </svg>
    </button>
  );
}

interface CardInfo1 {
  title: string;
  tags: string[];
  content: string;
  time: number;
  course: number;
  completed?: number;
}

function Card1(props: { info?: CardInfo1 }) {
  const { info } = props;

  return (
    <div className="w-[416px] h-[278px] relative text-[#EDEDED]">
      <div
        className="background w-full h-full bg-gradient-to-r from-[#0891D5] to-[#38C1A5] absolute scale-99.8"
        style={{ maskImage: "url(/img/card1.svg)" }}
      />
      <div
        className="container bg-[#131313] w-full h-full hover:translate-x-1 hover:-translate-y-1 transition-all pt-9 pb-4 flex flex-col"
        style={{ maskImage: "url(/img/card1.svg)" }}
      >
        <div className="flex flex-col gap-4 flex-1 px-10">
          <div className="line bg-gradient-to-b from-[#38C1A5] to-[#0891D5] rounded-md h-1 w-11 mb-3" />

          <h4>
            <strong>{info?.title}</strong>
          </h4>

          <div className="flex gap-2.5">
            {info?.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <section className="flex-1 text-[#676767]">
            <p className="text-xs leading-[110%]">{info?.content}</p>
          </section>
        </div>

        <div className="flex justify-between items-center pl-10 pr-4">
          <span className="flex gap-6">
            <Hour hour={info?.time} />
            <Course course={info?.course} />
          </span>
          <Completed completed={info?.completed} />
        </div>
      </div>
    </div>
  );
}

interface CardInfo2 {
  title: string;
  tags: string[];
  singup: string;
  event: string;
  grantSize: string;
}
function Card2(props: { info?: CardInfo2 }) {
  const { info } = props;
  return (
    <div className="h-[278px] w-[416px] relative text-[#ededed]">
      <div
        className="background absolute w-full h-full bg-gradient-to-b from-[#DA8AFF] to-[#719BFF] scale-99.8"
        style={{ mask: "url(/img/card2.svg)" }}
      />

      <div
        className="container bg-[#131313] w-full h-full flex flex-col pt-9 px-10 pb-10 justify-between hover:translate-x-1 hover:-translate-y-1 transition-all"
        style={{ mask: "url(/img/card2.svg)" }}
      >
        <div>
          <h4 className="title mb-5">{info?.title}</h4>

          <div className="flex gap-2.5">
            {info?.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div>
          <p className="flex justify-between border-b border-[#282828] mb-4">
            <span className="text-xs text-[#676767]">Singup</span>
            <span className="font-NEUE font-light text-sm">{info?.singup}</span>
          </p>

          <p className="flex justify-between border-b border-[#282828] mb-4">
            <span className="text-xs text-[#676767]">Event</span>
            <span className="font-NEUE font-light text-sm">{info?.event}</span>
          </p>

          <p className="flex justify-between border-b border-[#282828]">
            <span className="text-xs text-[#676767]">Grant size</span>
            <span className="font-NEUE font-light text-sm">
              {info?.grantSize}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

interface CardInfo3 {
  title: string;
  tags: string[];
  content: string;
  time: number;
  course: number;
  completed?: number;
}
function Card3(props: { info?: CardInfo3 }) {
  const { info } = props;
  return (
    <div className="h-[278px] w-[416px] relative text-[#ededed]">
      <div
        className="background absolute w-full h-full bg-gradient-to-b from-[#3CBC34] to-[#D9E313] scale-99.8"
        style={{ mask: "url(/img/card3.svg)" }}
      />

      <div
        className="container bg-[#131313] w-full h-full flex flex-col p-10 hover:translate-x-1 hover:-translate-y-1 transition-all gap-4"
        style={{ mask: "url(/img/card3.svg)" }}
      >
        <div className="line h-1 bg-gradient-to-b from-[#3CBC34] to-[#D9E313] rounded-lg w-11 mb-3" />

        <h4 className="title">{info?.title}</h4>

        <div className="flex gap-2.5">
          {info?.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>

        <section className="flex-1 text-[#676767]">
          <p className="text-xs leading-[110%]">{info?.content}</p>
        </section>

        <div className="flex gap-6">
          <Hour hour={info?.time} />
          <Course course={info?.course} />
        </div>
      </div>
    </div>
  );
}

interface CardInfo4 {
  title: string;
  time: number;
  img: string;
}
function Card4(props: { info?: CardInfo4 }) {
  const { info } = props;
  return (
    <div className="h-[278px] w-[416px] relative text-[#ededed]">
      <div className="background absolute w-full h-full bg-gradient-to-b from-[#E0AD38] to-[#EB3E1C] rounded-[36px] scale-99.8" />

      <div className="relative rounded-[36px] container bg-[#111111] w-full h-full hover:translate-x-1 hover:-translate-y-1 transition-all p-[30px]">
        <div className="inner-background pointer-events-none absolute w-full h-full top-0 left-0 p-5 pl-4">
          <div
            className="relative w-[382px] h-[240px] bg-[#b6e1d8]"
            style={{ maskImage: "url(/img/card4_mask.png)" }}
          >
            <Image
              src={info?.img || ""}
              width={243}
              height={217}
              alt=""
              className="mr-4 ml-auto pt-4"
            />
          </div>
        </div>

        <div className="line w-11 h-1 bg-gradient-to-b from-[#E0AD38] to-[#EB3E1C] rounded-[36px] mb-[145px]" />

        <div className="title mb-[40px]">{info?.title}</div>

        <div className="ml-60">
          <Hour hour={info?.time} />
        </div>
      </div>
    </div>
  );
}

function Tag(props: { text: string }) {
  return (
    <div className="py-1 px-2 rounded-3xl border border-[#676767]">
      <span className="scale-75 block text-xs leading-[10px]">
        {props.text}
      </span>
    </div>
  );
}

function Hour(props: { hour?: number }) {
  if (!props.hour) return null;

  return (
    <span className="text-[#F2F2F2] text-xs font-NEUE">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 15 15"
        fill="none"
        className="inline-block align-sub"
      >
        <path
          d="M7 14C5.14346 14 3.36303 13.2625 2.05029 11.9497C0.737494 10.637 0 8.85649 0 7C0 5.14351 0.737494 3.36303 2.05029 2.05029C3.36298 0.737495 5.14351 0 7 0C8.85649 0 10.637 0.737495 11.9497 2.05029C13.2625 3.36298 14 5.14351 14 7C14 8.85649 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85649 14 7 14ZM7 0.583346C5.29826 0.583346 3.66602 1.25942 2.46278 2.46273C1.25947 3.66615 0.583396 5.29821 0.583396 6.99995C0.583396 8.70169 1.25947 10.3339 2.46278 11.5372C3.6662 12.7405 5.29826 13.4166 7 13.4166C8.70174 13.4166 10.334 12.7405 11.5372 11.5372C12.7405 10.3337 13.4166 8.70169 13.4166 6.99995C13.4166 5.29821 12.7405 3.66597 11.5372 2.46273C10.3338 1.25942 8.70174 0.583346 7 0.583346Z"
          fill="#F2F2F2"
        />
        <path
          d="M11.3756 7.5838H6.70883C6.5478 7.5838 6.41724 7.45323 6.41724 7.2922V2.62549C6.41724 2.46445 6.5478 2.33379 6.70883 2.33379C6.86997 2.33379 7.00053 2.46445 7.00053 2.62549V7.00046H11.3755C11.5365 7.00046 11.6672 7.13102 11.6672 7.29215C11.6672 7.45319 11.5366 7.5838 11.3756 7.5838Z"
          fill="#F2F2F2"
        />
      </svg>
      <span className="ml-2">{props.hour} Hour</span>
    </span>
  );
}

function Course(props: { course?: number }) {
  if (!props.course) return null;
  return (
    <span className="text-[#F2F2F2] text-xs font-NEUE">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.2em"
        height="1.2em"
        viewBox="0 0 15 15"
        fill="none"
        className="inline-block align-sub"
      >
        <path
          d="M7.57871 12.8638V2.04656C7.19864 0.856661 4.21415 0.919762 2.76941 1.10005V11.8186C6.08183 11.2105 7.35578 12.2621 7.57871 12.8638Z"
          stroke="#F2F2F2"
          strokeWidth="0.6"
        />
        <path
          d="M7.57779 12.8638V2.04656C7.95785 0.856661 10.9423 0.919762 12.3871 1.10005V11.8186C9.07466 11.2105 7.80071 12.2621 7.57779 12.8638Z"
          stroke="#F2F2F2"
          strokeWidth="0.6"
        />
        <path
          d="M2.75602 2.42983H1V13.6857L14.0904 13.9999V2.42983H12.3343"
          stroke="#F2F2F2"
          strokeWidth="0.6"
        />
        <path d="M7.56689 13.8968V12.6798" stroke="#F2F2F2" strokeWidth="0.6" />
      </svg>
      <span className="ml-2">{props.course} Course</span>
    </span>
  );
}

function Completed(props: { completed?: number }) {
  if (!props.completed) return null;
  return (
    <button className="py-2 px-4 rounded-3xl bg-[#2A2A2A] whitespace-nowrap flex items-center text-[#9EFA13]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
        fill="none"
        className="inline-block"
      >
        <path
          d="M10.5287 9.82826L16.9374 8.27026C17.5284 8.12659 17.9277 8.85856 17.4871 9.27776L12.8109 13.7262C12.7251 13.8079 12.6656 13.9133 12.6402 14.029L11.3676 19.8186C11.2267 20.4595 10.3038 20.4323 10.2008 19.7842L9.23218 13.6867C9.20918 13.5419 9.13346 13.4107 9.01958 13.3184L4.01681 9.26343C3.51572 8.85727 3.93024 8.05587 4.55128 8.23013L10.2279 9.82298C10.3261 9.85052 10.4297 9.85234 10.5287 9.82826Z"
          fill="#9EFA13"
        />
        <path
          d="M6.908 14.6474C6.97335 14.6969 7.0153 14.7713 7.02392 14.8528L7.4785 19.1507C7.51224 19.4697 7.08635 19.6082 6.92597 19.3305L2.86686 12.2999C2.70486 12.0193 3.04527 11.719 3.30347 11.9147L6.908 14.6474Z"
          fill="#9EFA13"
        />
      </svg>
      <span className="text-xs leading-[110%]">
        {props.completed}% COMPLETED
      </span>
    </button>
  );
}
