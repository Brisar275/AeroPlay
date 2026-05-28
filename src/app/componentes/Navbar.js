import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className=" 
     py-4 px-4 md:px-40 flex flex-wrap items-center md:justify-between gap-4 text-white bg-gradient-to-b from-red-300/30 to-red-900"
    >
      <div>
        <h1 className="rounded-lg font-[IBM.ttf] font-bold text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]">
          <Link href={"/"}>AeroPlay</Link>
        </h1>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center font-[IBM.ttf] text-white">
          <li>
            <Link
              href={"/"}
              className=" block rounded-l-lg font-[IBM.ttf] text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href={"/tendencias"}
              className=" block font-[IBM.ttf] text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Tendencias
            </Link>
          </li>
                    <li>
            <Link
              href={"/cartelera"}
              className=" block font-[IBM.ttf] text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Cartelera
            </Link>
          </li>
          <li>
            <Link
              href={"/populares"}
              className=" block rounded-r-lg font-[IBM.ttf] text-xl py-2 px-6 bg-gradient-to-b from-gray-400 to-gray-900 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Populares
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
