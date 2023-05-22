import type { MouseEventHandler } from "react";
import Link from "next/link";
import React from "react";

interface NavigationProps {
  onClickLink: MouseEventHandler<HTMLAnchorElement>;
}

export const Navigation = ({ onClickLink }: NavigationProps) => {
  return (
    <ul className="flex flex-col gap-8 lg:flex-row">
      <li>
        <Link href="/" onClick={onClickLink}>
          Home
        </Link>
      </li>
      <li>
        <Link href="choose-room" onClick={onClickLink}>
          Room
        </Link>
      </li>
      <li>
        <Link href="booking" onClick={onClickLink}>
          Booking
        </Link>
      </li>
      <li>
        <Link href="contact" onClick={onClickLink}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
