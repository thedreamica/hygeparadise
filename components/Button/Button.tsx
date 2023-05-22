import { motion } from "framer-motion";
import type { MouseEventHandler } from "react";
import { useMemo } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";

import React from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: string;
  href?: string;
  className?: string;
  buttonClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  children,
  variant,
  href,
  className,
  buttonClassName,
  onClick,
}: ButtonProps) => {
  const mainButtonClasses = useMemo(
    () =>
      `uppercase font-bold font-montserrat text-xs ${
        variant === "secondary" ? "bg-white" : "bg-primary"
      } px-3 py-1.5 rounded-full border-2 border-black self-center md:text-base ${buttonClassName}`,
    [variant, buttonClassName]
  );

  const sideButtonClasses = useMemo(
    () =>
      `${
        variant === "secondary" ? "bg-white" : "bg-primary"
      } rounded-full border-2 border-black flex items-center`,
    [variant]
  );

  return (
    <motion.div className={`flex ${className}`}>
      {href ? (
        <>
          <Link href={href} className={mainButtonClasses}>
            {children}
          </Link>
          <Link href={href} className={sideButtonClasses}>
            <ArrowRightShort height={32} width={32} className="md:w-9" />
          </Link>
        </>
      ) : (
        <>
          <button onClick={onClick} className={mainButtonClasses}>
            {children}
          </button>
          <button onClick={onClick} className={sideButtonClasses}>
            <ArrowRightShort height={32} width={32} />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Button;
