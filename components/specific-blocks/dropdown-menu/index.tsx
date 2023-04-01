"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import { StyledButton } from 'components/specific-buttons'

import isDefined from "tools/is-defined";
import classnames from "tools/classnames";

import styles from "./style.module.scss";

type TProps = {
  options: { id: string; title: string; path: string; childs: any[] };
  pathname: string | null;
};

const getDropdownChilds = (
  childs: any[],
  pathname: string | null
): React.ReactNode[] =>
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

const DropdownMenu = ({
  options: { id, title, path, childs },
  pathname,
}: TProps) => {
  const [isDropdownOpen, setDropdownStatus] = useState(false);
  const childsNodes = isDefined(childs)
    ? getDropdownChilds(childs, pathname)
    : [];

  const dropDownRef = useRef<HTMLDivElement>(null);
  const hideDropdownMenu = (event: MouseEvent) => {
    if (
      isDefined(dropDownRef.current) &&
      dropDownRef.current &&
      event.target instanceof HTMLElement &&
      !dropDownRef.current.contains(event.target)
    ) {
      setDropdownStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideDropdownMenu);

    return () => {
      document.removeEventListener("click", hideDropdownMenu);
    };
  });

  return (
    <div
      ref={dropDownRef}
      className={classnames(
        isDropdownOpen ? styles.active : "",
        styles.dropdown
      )}
      onClick={() => setDropdownStatus((prevState) => !prevState)}
    >
      <StyledButton
        classNames={classnames(styles.title)}
        text={title}
        href={isDefined(path) ? path : undefined}
      />
      {childsNodes.length > 0 && (
        <div className={classnames(styles.childs)}>{childsNodes}</div>
      )}
    </div>
  );
};

export default DropdownMenu;
