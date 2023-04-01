import Link from "next/link";

import isDefined from "tools/is-defined";
import classnames from "tools/classnames";
import { hrefTypes } from "tools/constants/href";

import styles from "./style.module.scss";

type TProps = {
  classNames: string;
  href?: string;
  text: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

const getButton = (
  classNames: string,
  text: string,
  handleClick?: React.MouseEventHandler<HTMLDivElement>
): React.ReactNode => (
  <div className={classnames(styles.button, classNames)} onClick={handleClick}>
    {text}
  </div>
);

const Button = ({
  classNames,
  href = undefined,
  text,
  handleClick = undefined,
}: TProps): JSX.Element => {
  const button = getButton(classNames, text, handleClick);
  if (isDefined(href) && !!href)
    return <Link href={href}>{button}</Link>;

  return <>{button}</>;
};

export default Button;
