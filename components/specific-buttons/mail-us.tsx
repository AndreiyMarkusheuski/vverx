import classnames from "tools/classnames";

import styles from "./style.module.scss";

type TProps = {
  mail: string;
  text: string;
  classNames: string;
};

const Button = ({ mail, text, classNames }: TProps) => (
  <a className={classnames(classNames, styles.button)} href={`mailto:${mail}`}>
    {text}
  </a>
);

export default Button;
