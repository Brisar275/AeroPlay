import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" 
     py-4 px-40 flex items-center justify-between text-white bg-gradient-to-b from-blue-200 to-blue-300">
      <div>
        <h1 className="rounded-lg font-[IBM.ttf] font-bold text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-blue-400 to-blue-800 shadow-[inset_0_0px_3px_rgba(0,0,01)]">
          <Link href={"/"}>AeroPlay</Link>
        </h1>
      </div>
      <div>
        <ul className="flex flex-nowrap font-[IBM.ttf] text-white">
          <li>
            <Link
              href={"/"}
              className=" block rounded-l-lg font-[IBM.ttf] text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-blue-400 to-blue-800 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className=" block font-[IBM.ttf] text-xl pt-2 pb-2 px-6 bg-gradient-to-b from-blue-400 to-blue-800 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Populares
            </Link>
          </li>
                    <li>
            <Link
              href={"/"}
              className=" block rounded-r-lg font-[IBM.ttf] text-xl py-2 px-6 bg-gradient-to-b from-blue-400 to-blue-800 shadow-[inset_0_0px_3px_rgba(0,0,01)]"
            >
              Perfil
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
