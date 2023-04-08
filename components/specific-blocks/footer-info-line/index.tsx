import Logo from "components/specific-blocks/logo";
import { CallUsButton } from "components/specific-buttons";
import { MailUsButton } from "components/specific-buttons";

import styles from "./style.module.scss";

import data from "data_example.json";
const { contacts } = data; // Only now

const InfoLine = () => (
    <div className={styles.footer_info_line}>
      <div className={styles.content_container}>
        <p className={styles.address}>
          {contacts.address}
        </p>
        <Logo />
        <div className={styles.contacts}>
          <CallUsButton classes={styles.phone} text={contacts.phone} />
          <MailUsButton classes={styles.mail} text={contacts.mail}/>
        </div>
      </div>
    </div>
)

export default InfoLine;