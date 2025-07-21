import React from "react";
import Image from "next/image";
import Button from "../components/Button";

export default function HeroSection() {
  return (
    <section>
      <h1 className="text-[#404040] font-manrope font-bold text-[38px] text-center leading-tight">
        Prenez soin de votre esprit, quelques minutes par jour.
      </h1>
      <p className="text-[16px] text-[#404040] font-manrope text-center mt-6">
        Un outil simple pour réduire le stress, suivre vos émotions et retrouver
        le calme.
      </p>
      <div className="flex flex-col gap-4 mt-10">
        <Button variant="primary">Commencer gratuitement</Button>
        <Button variant="secondary">Comment ça marche ?</Button>
      </div>
      <div className="flex gap-4 justify-center mt-10 relative">
        <div className="absolute right-45 ">
          <p className="font-gloria text-[12px] text-[#B9B9B9] text-center mb-2 ">
            avant
          </p>
          <Image
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] rotate-2"
            src={"/sad.webp"}
            alt="happy"
            width={150}
            height={150}
          />
        </div>
        <div className="absolute left-45">
          <p className="font-gloria text-[12px] text-[#B9B9B9] text-center mb-2">
            après
          </p>
          <Image
            className="rounded-3xl shadow-lg ring-4 ring-[#F3F3F3] -rotate-2"
            src={"/happy.webp"}
            alt="sad"
            width={150}
            height={150}
          />
        </div>
      </div>
    </section>
  );
}
