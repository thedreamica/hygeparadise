import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "@public/logo.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Hyge Paradise Inn"
        className="lg:w-[180px]"
        width={114}
        height={54}
      />
    </Link>
  );
};
