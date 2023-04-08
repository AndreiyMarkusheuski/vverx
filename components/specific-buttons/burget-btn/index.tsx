import classnames from "tools/classnames";

import styles from "./style.module.scss";

type TProps = {
  classes?: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean,
};

const Button = ({ classes = '', handleClick, isOpen }: TProps): JSX.Element => (
    <div className={classnames(styles.button, classes, isOpen && styles.open)} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
  </div>
);

export default Button;
