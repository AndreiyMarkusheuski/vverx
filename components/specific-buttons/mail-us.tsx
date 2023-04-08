import classnames from "tools/classnames";
import isDefined from "tools/is-defined";

import styles from "./style.module.scss";

type TProps = {
  mail?: string;
  text?: string;
  classes?: string;
};

const Button = ({
  mail = "vverx@gmail.com",
  text = undefined,
  classes = "",
}: TProps) => (
  <a className={classnames(classes, styles.button)} href={`mailto:${mail}`}>
    {text || mail}
  </a>
);

export default Button;
