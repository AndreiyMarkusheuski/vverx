import Link from "next/link";
import Image from "next/image";

import classnames from "tools/classnames";
import isDefined from "tools/is-defined";

import styles from "./style.module.scss";

const Logo = ({ classes = [] }: { classes?: string[] }): JSX.Element => (
  <Link href="/" className={classnames(styles.logo, ...classes)}>
    <Image src="/icons/logo.png" width={100} height={60} alt="Вверх Техно" />
  </Link>
);
export default Logo;
