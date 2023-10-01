import { useEffect, useState, useCallback, useMemo } from "react";

import jsonData from "/data/catalog.json";

import Title from "./components/title";
import Picker from "./components/picker";
import Container from "./components/container";
import List from './components/list'

const Catalog = () => {
  const topLevelTypes = jsonData.items;
  const [ defaulActiveItem ] = topLevelTypes;
  const { id: defaultActiveTopType, items } = defaulActiveItem;
  
  const [activeTopType, setActiveTopType] = useState(defaultActiveTopType);
  const [activeItemType, setActiveItemType] = useState(items[0].id);
  const [activeItems, setActiveItems] = useState([]);

  const itemLevelTypes = useMemo(
    () =>
      topLevelTypes
        .filter(({ id }) => id === activeTopType)
        .map(({ items }) => items)[0],
    [activeTopType, topLevelTypes]
  );

  useEffect(() => {
    const selectedItem = itemLevelTypes
      .filter(({ id }) => id === activeItemType)
      .map(({ items }) => items)[0];
    setActiveItems(selectedItem);
  }, [activeTopType, activeItemType, itemLevelTypes]);

  const handleTopLevelTypeChange = useCallback((selectedId) => {
    setActiveTopType(selectedId);
  }, []);

  const handleItemLevelTypeChange = useCallback((selectedId) => {
    setActiveItemType(selectedId);
  }, []);

  return (
    <>
      <Container>
        <Title className="products-headline">Каталог техники</Title>
      </Container>
      <Picker
        onChange={handleTopLevelTypeChange}
        values={topLevelTypes}
        activeId={activeTopType}
        isCommon={true}
        className={"top_level"}
      />
      <Picker
        onChange={handleItemLevelTypeChange}
        values={itemLevelTypes}
        activeId={activeItemType}
        isCommon={false}
        className={"item_level"}
      />
      <Container>
        <p className='products-describe'>
          В нашем парке подъемников представлены лидеры своего рынка, это
          компании JLG и Haulotte. Мы предлагаем Вам <span className='text__orange'>коленчатые и ножничные </span>
          подъемники.
        </p>
        <List items={activeItems} />
      </Container>
      {/* // Modal */}
    </>
  );
};

export default Catalog;
