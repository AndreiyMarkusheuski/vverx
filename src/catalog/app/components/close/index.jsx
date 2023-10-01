import classnames from 'classnames';
import PropTypes from "prop-types";

import CloseIcon from "./close-icon";
import getImageURL from "../../tools/get-image-url";

import './styles.scss';

// type TProps = {
//   className?: string,
//   imgClassName?: string,
//   onClick?: (SyntheticEvent<> | KeyboardEvent) => void,
//   text?: string,
// };

const Close = props => {
  const defaultProps = {
    className: undefined,
    imgClassName: undefined,
    onClick: undefined,
    text: 'Close',
  };

    const { className, imgClassName, text = defaultProps.text } = props;

    return (
      <CloseIcon
        className={classnames('close_icon', className)}
        title={text}
        label={text}
        icon={
          <img
            className={classnames('close_icon-image', imgClassName)}
            src={getImageURL('close')}
            alt={text}
          />
        }
        {...props}
      />
    );
  
}

Close.propTypes = {
    className: PropTypes.string,
    imgClassName: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Close;
