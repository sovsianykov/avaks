import React, { useCallback, useMemo, useState } from "react";
import styles from "./Navigation.module.scss";
import { Menu, MenuOpen } from "@material-ui/icons";
import { navItems } from "./content";
import NavigationItem from "./NavigationItem";
import cn from "classnames";

const Navbar = () => {
  const [openDroop, setOpenDroop] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const activeIdHandler = useCallback((id) => {
    setActiveId(id);
  }, []);

  const toggleDroopDown = () => {
    setOpenDroop(!openDroop);
  };

  const classNames = useMemo(
    () =>
      cn({
        [styles.droopDown]: true,
        [styles.droopDown_active]: openDroop,
      }),
    [openDroop]
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleDroopDown}>
        {openDroop ? <MenuOpen /> : <Menu />}
      </div>
      <div className={classNames}>
        {navItems.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            active={item.id === activeId}
            onClick={activeIdHandler}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
