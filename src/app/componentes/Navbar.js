import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" rounded-3
    xl py-2 px-30 flex items-center justify-between text-white bg-gradient-to-b from-zinc-500 to-zinc-400">
      <div className="p-1 rounded-full bg-gradient-to-b from-zinc-300 to-black inline-block">
        <h1 className="rounded-full font-[IBM.ttf] font-bold text-2xl p-2 bg-gradient-to-b from-zinc-950 to-zinc-600 shadow-[inset_0_4px_5px_rgba(255,255,255,0.2)]">
          <Link href={"/"}>AeroPlay</Link>
        </h1>
      </div>
      <div>
        <ul className="flex flex-nowrap gap-4 font-[IBM.ttf] text-white">
          <li className="px-1 py-2 rounded-full bg-gradient-to-b from-zinc-300 to-black inline-block">
            <Link
              href={"/"}
              className="rounded-full font-[IBM.ttf] text-xl py-2 px-3 bg-gradient-to-b from-zinc-950 to-zinc-600 shadow-[inset_0_4px_5px_rgba(255,255,255,0.2)]"
            >
              Inicio
            </Link>
          </li>
          <li className="px-1 py-2 rounded-full bg-gradient-to-b from-zinc-300 to-black inline-block">
            <Link
              href={"/"}
              className="rounded-full font-[IBM.ttf] text-xl py-2 px-3 bg-gradient-to-b from-zinc-950 to-zinc-600 shadow-[inset_0_4px_5px_rgba(255,255,255,0.2)]"
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
