import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import Card from "../card";
import DetailedCard from "../detailed-card";
import Modal from "../modal";

import isDefined from "../../../../scripts/tools/is-defined";

import "./styles.scss";

const List = ({ items }) => {
  const isValidItems = Array.isArray(items) && items.length > 0;
  const [modalItem, setModalItem] = useState(undefined);

  const handleClick = useCallback((product) => {
    setModalItem(product);
  }, []);

  const handleClose = useCallback(() => {
    setModalItem(undefined);
  }, []);

  const renderCards = (product) => {
    const { title, shortDescribtion, imgUrls } = product;
    return (
      <Card
        title={title}
        shortDescribtion={shortDescribtion}
        imgUrls={imgUrls}
        onClick={() => handleClick(product)}
      />
    );
  };

  const renderError = () => <div className="list-empry">Список пуск</div>;

  return (
    <>
      <div className="list">
        {isValidItems && (
          <div className="list-wrapper">{items.map(renderCards)}</div>
        )}
        {!isValidItems && renderError()}
      </div>
      {isDefined(modalItem) && (
        <Modal isOpen={isDefined(modalItem)} onClose={handleClose}>
          <DetailedCard
            item={modalItem}
          />
        </Modal>
      )}
    </>
  );
};

List.propTypes = {
  items: PropTypes.array,
};

export default List;
