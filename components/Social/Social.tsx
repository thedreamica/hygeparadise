import Link from "next/link";
import React from "react";

import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

interface SocialProps {
  variant?: string;
}

const Social = ({ variant }: SocialProps) => {
  return (
    <>
      <div
        className={`flex gap-2 text-white ${
          variant === "secondary" && "flex-col absolute top-44 left-5"
        }`}
      >
        <Link href="#">
          <Facebook width={20} height={20} />
        </Link>
        <Link href="#">
          <Twitter width={20} height={20} />
        </Link>
        <Link href="#">
          <Instagram width={20} height={20} />
        </Link>
      </div>
      {variant === "secondary" && (
        <Link
          href="booking"
          className="rotate-[-90deg] absolute text-white left-[-10px] top-80"
        >
          Book Now
        </Link>
      )}
    </>
  );
};

export default Social;
