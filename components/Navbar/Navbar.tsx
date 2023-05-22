import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import React from "react";
import { Menu } from "@styled-icons/material-rounded/Menu";
import { Cross } from "@styled-icons/entypo/Cross";

import Button from "@Button/Button";

const Navbar = () => {
  const router = useRouter();
  const [status, setStatus] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  });

  return (
    <nav
      className="absolute w-full flex justify-between py-4 px-1 z-10 lg:p-4 lg:items-center"
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <Logo />
      <AnimatePresence>
        {(isExpanded || (status && !isExpanded)) && (
          <motion.div
            initial={
              !isExpanded && {
                opacity: 0,
                y: 200,
              }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 200,
            }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
            }}
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white pt-24 pl-8  z-40 lg:bg-transparent lg:w-auto lg:h-auto lg:relative lg:p-0"
          >
            <Navigation onClickLink={() => setStatus(false)} />
            {!isExpanded && (
              <Cross
                width={32}
                height={32}
                color="white"
                className="absolute z-40 right-2 top-7"
                onClick={() => setStatus(false)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center gap-2">
        <Button
          href="choose-room"
          className={
            router.pathname !== "/view-room" && router.pathname !== "/booking"
              ? "visible"
              : "invisible"
          }
        >
          Book Now
        </Button>
        {!isExpanded && (
          <Menu
            width={32}
            height={32}
            color="white"
            onClick={() => setStatus(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
