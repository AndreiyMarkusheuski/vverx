import InfoLine from "components/specific-blocks/footer-info-line";
import FooterMenu from "components/specific-blocks/footer-menu";

import styles from "./style.module.scss";

import data from "data_example.json";
const { rules_protect } = data; // Only now

const Footer = () => (
  <footer className={styles.footer}>
    <InfoLine />
    <FooterMenu />
    <h3 className={styles.copyright}>{`${rules_protect.toUpperCase()} ${new Date().getFullYear()}`}</h3>
  </footer>
);

export default Footer;
