import React from "react";
import Image from "next/image";
import Button from "../components/Button";

export default function PersonalMoment() {
  return (
    <section className="font-manrope relative ">
      <h2 className="text-center text-[#404040] text-[28px] md:text-[56px]  font-bold leading-tight ">
        Prenez un moment rien que{" "}
        <span className="text-[#B0B0B0] ">pour vous.</span>
      </h2>
      <div className="content-container w-full flex flex-col xl:flex-row xl:items-center xl:gap-10 justify-center mt-8 xl:mt-12 ">
        <div className="img-container relative xl:w-1/2 ">
          <Image
            className="rounded-2xl shadow-md shadow-[#86C0FA] md:w-full "
            src={"/happy-person.webp"}
            alt="happy"
            width={400}
            height={400}
          />
          <Button className="absolute top-[-10px] " variant="blur">
            &quot;Je prends une pause&quot;
          </Button>
          <Button
            className="absolute bottom-[-10px] right-0 flex gap-1"
            variant="blur"
          >
            &quot;Besoin de souffler&quot;
            <Image src={"/blow.svg"} alt="arrow" width={20} height={20} />
          </Button>
        </div>

        <div className="mt-6 text-[#404040] xl:w-1/2">
          <h3 className="font-manrope-bold text-[22px] md:text-[26px] xl:text-[32px] ">
            Exprimez ce que vous ressentez.
          </h3>
          <p className="font-regular text-[14px] md:text-[18px] xl:text-[20px] mt-2 text-[#404040]">
            Ecrivez librement, sans jugement. Un journal simple pour vous
            libérer l’esprit, en quelques mots.
          </p>
          <Button className="px-2 mt-8 rounded-lg" variant="primary">
            Je commence maintenant
          </Button>
          <Button
            className="relative left-40 md:left-80 md:top-[-80px] mt-6 flex gap-1 -rotate-12"
            variant="noBlur"
          >
            &quot;Je vais y arriver&quot;
            <Image src={"/happy.svg"} alt="arrow" width={20} height={20} />
          </Button>
          <Button
            className="relative left-0 md:left-95 md:top-[-60px] mt-6 flex gap-1 rotate-2"
            variant="noBlur"
          >
            &quot;Je suis fier de moi&quot;
            <Image src={"/eyes-heart.svg"} alt="arrow" width={20} height={20} />
          </Button>
        </div>
      </div>
      <Image
        className="absolute hidden top-5 right-[-230px] xl:block -z-10"
        loading="lazy"
        src={"/first-vector.svg"}
        alt="line"
        width={400}
        height={100}
      />
    </section>
  );
}
