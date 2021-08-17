import React, {useCallback, useMemo} from 'react';
import  styles from "./Navigation.module.scss";
import cn from "classnames";

const NavigationItem = ({
    item, active, onClick
}) => {
    
    const classNames = useMemo(
      () =>
        cn({
          [styles.navigationItem]: true,
          [styles.navigationItem_active]: active,
        }),
      [active]
    );
    
    const onClickHandler = useCallback(() =>{
        onClick(item.id)
    },[item.id, onClick])
    return (
        <nav className={classNames} onClick={onClickHandler}>
            {item.title}
        </nav>
    );
};

export default NavigationItem;