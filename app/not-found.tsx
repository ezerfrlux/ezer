'use client'
import Link from "next/link";
import GradientDecorationBg from "./components/GradientDecorationBg";
import GradientDecorationBgDown from "./components/GradientDecorationBgDown";


export default function NotFound() {
  return (
    <main className=" relative grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 mt-20 mb-10">
      <GradientDecorationBg />
      <div className="text-center">
        <p className="text-base font-semibold text-blue-400" >404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          <span style={{ fontFamily: "EFCO-Brookshire-Regular" }}>P</span>age  <span style={{ fontFamily: "EFCO-Brookshire-Regular" }}>N</span>ot {" "}
          <span style={{ fontFamily: "EFCO-Brookshire-Regular" }}>F</span>ound
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition"
          >
            Go back home
          </Link>

          <a href="#" className="text-sm font-semibold text-white">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <GradientDecorationBgDown />
    </main>
  );
}
