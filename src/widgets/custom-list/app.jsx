import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import jsonData from "/data/catalog.json";
import List from "./components/list";

const findItemByTypeAndProduct = (type, product) => {
  const itemsOfType = jsonData.items.find((item) => item.type === type);

  if (itemsOfType) {
    const productOfType = itemsOfType.items.find(
      (item) => item.product === product
    );

    if (productOfType) {
      return productOfType;
    }
    throw new Error(`Product '${product}' not found in type '${type}'`);
  }

  throw new Error(`Type '${type}' not found`);
};

const CustomList = ({ root }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      const { type, product } = root.dataset;
      const { items } = findItemByTypeAndProduct(type, product);
      setActiveItems(items);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  }, [root]);

  if (hasError) {
    return (
      <h1 className="error_boundary-headline">
        Что-то пошло не так.<br></br>Попробуйте позже.
      </h1>
    );
  }

  return <List items={activeItems} />;
};

CustomList.propTypes = {
  root: PropTypes.node.isRequired,
};

export default CustomList;
