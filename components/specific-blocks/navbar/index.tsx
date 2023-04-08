import { CallUsButton } from 'components/specific-buttons'
import Logo from "components/specific-blocks/logo"; 
import DropdownMenu from "components/specific-blocks/dropdown-menu";
import Container from "components/specific-blocks/container";

import classnames from "tools/classnames";

import styles from "./style.module.scss";

import data from "data_example.json";
const { navigation } = data; // Only now

const Navbar = ({classes= ''}: {classes?: string}) => {
  const getNavigation = (navigation: any[]): React.ReactNode[] => {
    return navigation.map((nav) => (
      <DropdownMenu options={nav} />
    ));
  };

  return (
    <Container>
      <nav className={classnames(styles.nav, classes)}>
        <Logo />
        <div className={styles.controls}>
        <div className={styles.links}>{getNavigation(navigation)}</div>
        <CallUsButton 
          classes={styles.primary}
          number='+375291231232' //get from json
          text='Позвонить нам'
        />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
