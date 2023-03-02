"use client";

import cn from "@/utils/cn";

interface ICard {
  title: string;
  description: string;
  url: string;
  font: string;
}

export default function Card(card: ICard) {
  return (
    <a
      href={card.url}
      className="py-4 px-10 lg:py-4 lg:px-5 rounded-custom border solid border-gray-300/10 transition group hover:bg-gray-200/5 hover:border hover:border-solid hover:border-slate-300/20"
      target="_blank"
      rel="noopener noreferrer">
      <h2 className={cn(card.font, "font-bold mb-2 ")}>
        {card.title}{" "}
        <span className="inline-block transition group-hover:translate-x-1">
          -&gt;
        </span>
      </h2>
      <p className={cn(card.font, "m-0 opacity-60 text-sm leading-normal")}>
        {card.description}
      </p>
    </a>
  );
}
