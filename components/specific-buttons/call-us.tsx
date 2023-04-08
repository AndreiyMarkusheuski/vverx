import classnames from "tools/classnames";
import isDefined from "tools/is-defined";

import styles from "./style.module.scss";

type TProps = {
  number?: string;
  text?: string;
  classes?: string;
};

const Button = ({
  number = "+375291231232",
  text = undefined,
  classes = "",
}: TProps) => (
  <a className={classnames(classes, styles.button)} href={`callto:${number}`}>
    {text || number}
  </a>
);
export default Button;
