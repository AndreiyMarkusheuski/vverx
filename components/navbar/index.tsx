"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import DropdownMenu from "../specific-blocks/dropdown-menu";
import Container from "../specific-blocks/container";
import Button from '../specific-blocks/button'

import styles from "./style.module.scss";

import data from "./data_example.json";
const { data: navigation } = data; // Only now

const Navbar = (): React.Node => {
  const pathname = usePathname();

  const getNavigation = (navigation): React.Node[] => {
    return navigation.map((nav) => (
      <DropdownMenu options={nav} pathname={pathname} />
    ));
  };

  return (
    <Container>
      <nav className={styles.nav}>
        <div className="nav_logo">
          <Link href="/">
            <Image
              src="/icons/logo.png"
              width={100}
              height={60}
              alt="Вверх Техно"
            />
          </Link>
        </div>
        <div className={styles.links}>{getNavigation(navigation)}</div>
        <Button 
          styleType='primary'
          type='call'
          href='+375291231232' //get from json
          text='Позвонить нам'
        />
      </nav>
    </Container>
  );
};

export default Navbar;
