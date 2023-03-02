import Image from "next/image";
import { Inter } from 'next/font/google'
import data from "../data/index.json";
import Card from "@/ui/Card";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center p-24 min-h-screen">
      <div className="lg:flex justify-between items-center text-sm max-w-5xl w-full z-10 xl:text-xs">
        <p className="text-center relative m-0 p-4 bg-gray-200/20 rounded-custom border border-solid border-gray-200/20">
          Get started by editing&nbsp;
          <code className="font-bold">app/page.tsx</code>
        </p>
        <div>
          <a
            className="hidden lg:flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark: filter invert drop-shadow-lg"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      {/* Card */}
      <div className="grid-cols-1 text-center lg:text-base grid lg:grid-cols-[repeat(3,minmax(33%,auto))] lg:w-[1100px] lg:max-w-full gap-2 ">
        {data.map((item, i: number) => (
          <Card font={inter.className} key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
