import Link from "next/link";
import React from "react";

import Social from "@Social/Social";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-2 w-full text-white mt-8 lg:mt-14 lg:px-8">
      <p className="text-xs">
        &copy; Copyright 2023 - Paradise Inn by{" "}
        <Link href="#" className="text-primary">
          hyge
        </Link>
      </p>
      <Social />
    </footer>
  );
};

export default Footer;
