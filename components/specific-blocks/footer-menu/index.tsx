import Link from "next/link";

import isDefined from "tools/is-defined";

import styles from "./style.module.scss";

import data from "data_example.json";
const { navigation, company_info } = data; // Only now

const getContentByPath = (title: string, path: string) => {
  return isDefined(path) ? (
    <Link href={path} className={styles.link}>
      {title}
    </Link>
  ) : (
    title.toUpperCase()
  );
};

const getNodeList = (items: any) =>
  items.map(({ id, title, childs = undefined, path }: {id: number, title: string, childs: any, path: string}) => (
    <div key={id} className={styles.menu_block}>
      <h3 className={styles.block_title}>{getContentByPath(title, path)}</h3>
      {isDefined(childs) && (
        <ul className={styles.block_list}>
          {childs.map(({ id, title, path }: {id: number, title: string, path: string}) => (
            <li key={id} className={styles.list_item}>
              {getContentByPath(title, path)}
            </li>
          ))}
        </ul>
      )}
    </div>
  ));

const FooterMenu = () => (
  <div className={styles.footer_menu}>
    <div className={styles.content_container}>
      {getNodeList(company_info)}
      {getNodeList(navigation)}
    </div>
  </div>
);

export default FooterMenu;
