"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

import DropdownMenu from "../specific-blocks/dropdown-menu";
import Container from "../specific-blocks/container";
import { CallUsButton } from 'components/specific-buttons'

import styles from "./style.module.scss";

import data from "./data_example.json";
const { data: navigation } = data; // Only now

const Navbar = () => {
  const pathname = usePathname();

  const getNavigation = (navigation: any[]): React.ReactNode[] => {
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
        <CallUsButton 
          classNames={styles.primary}
          number='+375291231232' //get from json
          text='Позвонить нам'
        />
      </nav>
    </Container>
  );
};

export default Navbar;
