import { useEffect, useState, useCallback, useMemo, useRef } from "react";

import jsonData from "/data/catalog.json";

import isDefined from "/scripts/tools/is-defined";

import Title from "./components/title";
import Picker from "./components/picker";
import Container from "./components/container";
import List from "./components/list";

const Catalog = () => {
  const ref = useRef(null);
  const topLevelTypes = jsonData.items;
  const getTopType = useMemo(() => {
    const searchParams = new URLSearchParams(document.location.search);
    const topType = searchParams.get("type");
    const topLevelTypes = jsonData.items;
    const [defaulActiveItem] = topLevelTypes;
    const { id: defaultActiveTopType } = defaulActiveItem;

    return isDefined(topType) ? topType : defaultActiveTopType;
  }, []);

  const getItemType = useMemo(() => {
    const searchParams = new URLSearchParams(document.location.search);
    const itemType = searchParams.get("equipment");
    const topLevelTypes = jsonData.items;
    const [defaulActiveItem] = topLevelTypes;
    const { items } = defaulActiveItem;

    return isDefined(itemType) ? itemType : items[0].id;
  }, []);

  const [activeTopType, setActiveTopType] = useState(getTopType);
  const [activeItemType, setActiveItemType] = useState(getItemType);
  const [activeItems, setActiveItems] = useState([]);

  const itemLevelTypes = useMemo(
    () =>
      topLevelTypes
        .filter(({ id }) => id === activeTopType)
        .map(({ items }) => items)[0],
    [activeTopType, topLevelTypes]
  );

  const setToUrlParams = useCallback((activeTopType, activeItemType) => {
    let queryParam = { type: activeTopType, equipment: activeItemType };
    let preparedQueryParams = new URLSearchParams(queryParam).toString();
    updateURL(preparedQueryParams);
  }, []);

  useEffect(() => {
    setToUrlParams(activeTopType, activeItemType);
  }, [activeTopType, activeItemType, setToUrlParams]);

  const updateURL = (query) => {
    if (history.pushState) {
      var baseUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname;
      var newUrl = `${baseUrl}?${query}`;
      history.pushState(null, null, newUrl);
    } else {
      console.warn("History API не поддерживается");
    }
  };

  useEffect(() => {
    const [itemList] = itemLevelTypes
      .filter(({ id }) => id === activeItemType)
      .map(({ items }) => items);
    setActiveItems(isDefined(itemList) ? itemList : []);
  }, [activeTopType, activeItemType, itemLevelTypes]);

  const handleTopLevelTypeChange = useCallback((selectedId) => {
    setActiveTopType(selectedId);
  }, []);

  const handleItemLevelTypeChange = useCallback((selectedId) => {
    setActiveItemType(selectedId);
    scrollToContainer();
  }, []);

  const scrollToContainer = () => {
    const scrollEl = ref.current;
    const { top } = scrollEl.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset,
      behavior: "smooth",
    });
  };

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
        <p ref={ref} className="products-describe">
          В нашем парке подъемников представлены лидеры своего рынка, это
          компании JLG и Haulotte. Мы предлагаем Вам{" "}
          <span className="text__orange">коленчатые и ножничные </span>
          подъемники.
        </p>
        <List items={activeItems} />
      </Container>
    </>
  );
};

export default Catalog;
