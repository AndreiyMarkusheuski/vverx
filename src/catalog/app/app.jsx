import { useEffect, useState, useCallback, useMemo, useRef } from "react";

import jsonData from "/data/catalog.json";

import isDefined from "/scripts/tools/is-defined";

import Title from "./components/title";
import Picker from "./components/picker";
import Container from "./components/container";
import List from "./components/list";
import { SEARCH_PARAMS, HEADER_HEIGTH } from "./tools/consts";
import setToUrlParams, { getParamFromUrl } from './tools/url-push'

const Catalog = () => {
  const getTopType = useMemo(() => {
    const typeFromUrl = getParamFromUrl(SEARCH_PARAMS.type)
    const [defaulActiveItem] = jsonData.items;
    const { id: defaultActiveType } = defaulActiveItem;

    return isDefined(typeFromUrl) ? typeFromUrl : defaultActiveType;
  }, []);

  const getItemType = useMemo(() => {
    const equipmentFromUrl = getParamFromUrl(SEARCH_PARAMS.equipment)
    const [defaulActiveItem] = jsonData.items;
    const { items } = defaulActiveItem;

    return isDefined(equipmentFromUrl) ? equipmentFromUrl : items[0].id;
  }, []);

  const ref = useRef(null);
  const types = jsonData.items.filter(
    (type) => type.items.length > 0
  );
  const [activeType, setActiveType] = useState(getTopType);
  const [activeProducts, setActiveProduct] = useState(getItemType);
  const [equipmentList, setEquipmentList] = useState([]);
  const [activeEquipmentDesc, setEquipmentDesc] = useState("");

  const equipment = useMemo(() => {
    if (types.length < 1) return [];

    const [avalibleItemLevelTypes] = types.filter(
      ({ id }) => id === activeType
    );

    const { items: avalibleItemLevelItems } = avalibleItemLevelTypes;

    return avalibleItemLevelItems.filter(({ items }) => items.length > 0);
  }, [activeType, types]);

  const getNotNullList = useCallback(() => {
    const [activeItem] = equipment
      .filter(({ id }) => id === activeProducts)

      return activeItem ? activeItem : equipment[0]

  }, [activeProducts, equipment]);
  
  const setCatalogData = useCallback(() => {
    const { items, describtion, id } = getNotNullList();

    setEquipmentList(items);
    setActiveProduct(id);
    setEquipmentDesc(describtion);
    setToUrlParams(activeType, activeProducts);
  }, [activeProducts, activeType, getNotNullList, setActiveProduct]);

  useEffect(() => {
    setCatalogData();
  }, [setCatalogData, types]);

  const handleTypeChange = useCallback((selectedId) => {
    setActiveType(selectedId);
    scrollToContainer();
  }, []);

  const handleProductChange = useCallback((selectedId) => {
    setActiveProduct(selectedId);
    scrollToContainer();
  }, []);

  const scrollToContainer = () => {
    const scrollEl = ref.current;
    const { top } = scrollEl.getBoundingClientRect();
    window.scrollTo({
      top: top + window.pageYOffset - HEADER_HEIGTH,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Container>
        <Title className="catalog_section-headline">Каталог техники</Title>
      </Container>
      <Picker
        onChange={handleTypeChange}
        values={types}
        activeId={activeType}
        isCommon={true}
        className={SEARCH_PARAMS.type}
      />
      <Picker
        onChange={handleProductChange}
        values={equipment}
        activeId={activeProducts}
        className={SEARCH_PARAMS.equipment}
      />
      <Container>
        <p
          ref={ref}
          className="catalog_section-describe"
          dangerouslySetInnerHTML={{ __html: activeEquipmentDesc }}
        ></p>
        <List items={equipmentList} />
      </Container>
    </>
  );
};

export default Catalog;
