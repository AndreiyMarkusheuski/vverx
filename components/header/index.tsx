"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import Navbar from "components/navbar";
import { Burger } from "components/specific-buttons";

import classnames from "tools/classnames";
import isDefined from "tools/is-defined";

import styles from "./style.module.scss";

const Header = () => {
  const [isOpen, setOpenStatus] = useState(false);
  const MenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const handleTogle = () => {
    setOpenStatus((prevState) => !prevState);
  };

  const hideMenuByEvent = (event: MouseEvent) => {
    if (
      isDefined(MenuRef.current) &&
      MenuRef.current &&
      event.target instanceof HTMLElement &&
      !MenuRef.current.contains(event.target)
    ) {
      setOpenStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideMenuByEvent);

    return () => {
      document.removeEventListener("click", hideMenuByEvent);
    };
  });

  useEffect(() => {
    setOpenStatus(false);
  }, [pathname]);

  return (
    <header
      ref={MenuRef}
      className={classnames(styles.header, isOpen && styles.active)}
    >
      <Burger
        classes={styles.burger}
        handleClick={handleTogle}
        isOpen={isOpen}
      />
      <Navbar />
    </header>
  );
};

export default Header;
