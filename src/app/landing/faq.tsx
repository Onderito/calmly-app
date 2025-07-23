"use client";

import React, { useState } from "react";

const faq = [
  {
    question: "Est-ce que Calmly est vraiment gratuit ?",
    img: "+",
    answer: "Oui, Calmly est gratuit pour tous.",
  },
  {
    question: "Puis-je revenir sur ce que j’ai écrit ?",
    img: "+",
    answer: "Oui, vous pouvez consulter vos écrits à tout moment.",
  },
  {
    question: "Puis-je utiliser Calmly sur mon téléphone ?",
    img: "+",
    answer: "Prochainement, mais nous travaillons sur cette fonctionnalité.",
  },
  {
    question: "Est-ce que mes écrits sont vraiment privés ?",
    img: "+",
    answer: "Oui, votre écrit est privé et ne sera pas partagé avec d’autres.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(index === open ? null : index);
  };
  return (
    <section>
      <h2 className="text-center text-[#404040] text-[28px] font-bold leading-tight">
        Questions fréquentes
      </h2>
      <p className="text-center font-regular text-[14px] mt-4 text-[#404040]">
        On répond en toute transparence à ce que vous vous demandez sûrement.
      </p>
      <div className="mt-10 flex flex-col gap-6">
        {faq.map((f, index) => (
          <div
            onClick={() => toggle(index)}
            className="shadow-custom rounded-3xl flex flex-col gap-4 p-4"
            key={index}
          >
            <div className="flex gap-4 items-center">
              <p>{f.img}</p>
              <h3 className="font-manrope-bold text-[16px] text-[#404040]">
                {" "}
                {f.question}
              </h3>
            </div>
            {open === index && (
              <h4 className="font-manrope-regular text-[14px] text-[#404040]">
                {f.answer}
              </h4>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
