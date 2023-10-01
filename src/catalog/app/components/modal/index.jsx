import classnames from "classnames";
import Modal from "react-modal";
import PropTypes from "prop-types";

import isDefined from "/scripts/tools/is-defined";

import CloseIcon from "../close";

import "./styles.scss";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');
Modal.setAppElement("#root");

export const ModalDialog = (props) => {
  const close = (event) => {
    const { onClose } = props;

    if (typeof onClose === "function") {
      onClose(event);
    }
  };

  const renderHeader = () => {
    const {
      title,
      subtitle,
      beforeTitleText,
      header,
      headerClass,
      subtitleClassName,
    } = props;

    if (isDefined(header)) {
      return (
        <div className={classnames("modal_dialog-header", headerClass)}>
          {header}
        </div>
      );
    }

    return (
      <div className="modal_dialog-header">
        <CloseIcon
          className="modal_dialog-close_button"
          imgClassName="modal_dialog-close_icon"
          onClick={close}
        />

        <div className="modal_dialog-header_wrapper">
          {beforeTitleText ? (
            <div
              className={classnames(
                "modal_dialog-before_title_text",
                subtitleClassName
              )}
            >
              {beforeTitleText}
            </div>
          ) : null}
          {title !== "" ? (
            <div className="modal_dialog-title">{title}</div>
          ) : null}
          {subtitle ? (
            <div
              className={classnames("modal_dialog-subtitle", subtitleClassName)}
            >
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    const { footer, footerClass } = props;

    if (isDefined(footer)) {
      return (
        <div className={classnames("modal_dialog-footer", footerClass)}>
          {footer}
        </div>
      );
    }

    return null;
  };

  const { title, children, classNames, contentClass } = props;

  return (
    <Modal
      onRequestClose={close}
      shouldCloseOnOverlayClick={false}
      contentLabel={title}
      className={classnames("modal_dialog", classNames)}
      overlayClassName={classnames("modal_dialog-wrapper")}
      {...props}
    >
      {renderHeader()}
      <div className={classnames("modal_dialog-content", contentClass)}>
        {children}
      </div>
      {renderFooter()}
    </Modal>
  );
};

ModalDialog.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  classNames: PropTypes.string,
  contentClass: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  footerClass: PropTypes.string,
  subtitle: PropTypes.string,
  beforeTitleText: PropTypes.string,
  headerClass: PropTypes.string,
  subtitleClassName: PropTypes.string,
};

export default ModalDialog;
