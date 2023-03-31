
import isDefined from "tools/is-defined";
import classnames from 'tools/classnames'

import styles from './style.module.scss'

type TProps = {
    style: string,
    type: string,
    href?: string,
    text: string,
    handleClick?: void
}

const getHrefByType = (type, href) => {
    const hrefTypes = {
        'call': 'callto:',
        'mail': 'mailto:'
    }

    return `${isDefined(hrefTypes[type]) ? hrefTypes[type]  : ''}${href}`
}

const Button = ({styleType, type, href = undefined, text, handleClick = undefined}: TProps) => {

    if (isDefined(href)) return <a className={classnames(styles.button, styles[styleType])} href={getHrefByType(type, href)}>{text}</a>
  
  
    return <button className={classnames(styles.button, styles[styleType])}>{text}</button>;
};

export default Button;
