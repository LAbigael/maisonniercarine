import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import "../globals.css";

export default function Navbar() {
  return (
    <nav className={"top-0 pt-4 absolute z-50 h-16 w-full  navbar-expand-lg"}>
      <div className="px-4 mx-auto flex flex-row  justify-end">
          {/*          <div className="text-white text-sm font-bold leading-relaxed  mr-4 py-2 whitespace-no-wrap uppercase flex flex-row">
            <Image
              width={30}
              height={30}
              src="/img/svg/003-rattle.svg"
              alt="My Happy SVG"
              className="h-6 -rotate-45 text-white"
            />
            sage-femme
          </div>
          */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Link
              target="_blank"
              href="https://www.rdvsagefemme.com/a/carine-maisonnier"
              className={
                "text-palette-green text-xs font-bold uppercase px-4 underline-offset-4 underline decoration-palette-blue decoration-2"
              }
            >
              <i className=""></i> Prendre rendez-vous
            </Link>
          </motion.div>
      </div>
    </nav>
  );
}
