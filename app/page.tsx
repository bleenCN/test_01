import HomeSwiper from "@/components/HomeSwiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen pt-10">
      <div className="max-w-[1352px] mx-auto">
        <HomeSwiper />
      </div>
    </main>
  );
}
