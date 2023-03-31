"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import isDefined from "tools/is-defined";
import classnames from "tools/classnames";

import styles from "./style.module.scss";

const getDropdownChilds = (childs, pathname): React.Node[] =>
  childs.map(({ id, title, path }) => (
    <Link key={`${id}-${title}`} href={path}>
      <span
        className={classnames(
          styles.link,
          pathname === path ? styles.active : null
        )}
      >
        {title}
      </span>
    </Link>
  ));

const DropdownMenu = ({ options: { id, title, path, childs }, pathname }) => {
  const [isDropdownOpen, setDropdownStatus] = useState(false);
  const childsNodes = isDefined(childs)
    ? getDropdownChilds(childs, pathname)
    : [];

  const handleClick = () => setDropdownStatus((prevState) => !prevState);
  const closeDropdown = () => setDropdownStatus(false);

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  });

  return (
    <div
      className={classnames(
        pathname === path ? "active" : null,
        styles.dropdown,
        isDropdownOpen ? styles.active : ""
      )}
      onClick={handleClick}
    >
      <span className={styles.title}>{title}</span>
      <div
        className={classnames(
          styles.childs,
        )}
      >
        {childsNodes}
      </div>
    </div>
  );
};

export default DropdownMenu;
