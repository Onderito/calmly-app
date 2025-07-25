"use client";

import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { easeInOut, motion } from "framer-motion";

export default function PersonalMoment() {
  const MotionButton = motion(Button);

  return (
    <section className="font-manrope relative ">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-[#404040] text-[28px] md:text-[56px]  font-bold leading-tight "
      >
        Prenez un moment rien que{" "}
        <span className="text-[#B0B0B0] ">pour vous.</span>
      </motion.h2>
      <div className="content-container w-full flex flex-col xl:flex-row xl:items-center xl:gap-20 justify-center mt-8 xl:mt-12 ">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="img-container relative xl:w-1/2 "
        >
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-6 text-[#404040] xl:w-1/2"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="font-manrope-bold text-[22px] md:text-[26px] xl:text-[32px] "
          >
            Exprimez ce que vous ressentez.
          </motion.h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="font-regular text-[14px] md:text-[18px] xl:text-[20px] mt-2 text-[#404040]"
          >
            Ecrivez librement, sans jugement. Un journal simple pour vous
            libérer l’esprit, en quelques mots.
          </motion.p>
          <MotionButton
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            className="px-2 mt-8 rounded-lg"
            variant="primary"
          >
            Je commence maintenant
          </MotionButton>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 60,
              damping: 12,
            }}
          >
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
              <Image
                src={"/eyes-heart.svg"}
                alt="arrow"
                width={20}
                height={20}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <svg
        className="absolute hidden top-5 right-[-200px] xl:block -z-10"
        width="311"
        height="705"
        viewBox="0 0 311 705"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.35, ease: easeInOut, delay: 0.9 }}
          d="M13.2561 704C-9.47363 646 -9.19203 539.615 173.773 578.075C356.737 616.536 98.342 430.374 286.013 386.822C473.685 343.269 -5.06248 378.868 194.036 261.844C393.134 144.819 436.875 39.1877 433.857 1"
          stroke="#86C0FA"
          strokeOpacity="0.4"
          strokeWidth="5"
        />
      </svg>
    </section>
  );
}
