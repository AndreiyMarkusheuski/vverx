import Link from "next/link";

import isDefined from "tools/is-defined";
import classnames from "tools/classnames";
import { hrefTypes } from "tools/constants/href";

import styles from "./style.module.scss";

type TProps = {
  classes: string;
  href?: string;
  text?: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

const getButton = (
  classes: string,
  text: string,
  handleClick?: React.MouseEventHandler<HTMLDivElement>
): React.ReactNode => (
  <div className={classnames(styles.button, classes)} onClick={handleClick}>
    {text}
  </div>
);

const Button = ({
  classes,
  href = undefined,
  text = '',
  handleClick = undefined,
}: TProps): JSX.Element => {
  const button = getButton(classes, text, handleClick);
  if (isDefined(href) && !!href)
    return <Link href={href}>{button}</Link>;

  return <>{button}</>;
};

export default Button;
