import classnames from "tools/classnames";

import styles from "./style.module.scss";

type TProps = {
  number: string;
  text: string;
  classNames: string;
};

const Button = ({ number, text, classNames }: TProps) => (
  <a
    className={classnames(classNames, styles.button)}
    href={`callto:${number}`}
  >
    {text}
  </a>
);

export default Button;
