import styles from './header.module.css'
import {useEffect, useState} from "react";

const Header = () => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 500)
  }, [])

  return (
    <header className={styles.header}>
      Will you be my <span className={flag ? styles.day : styles.zeroOpacity}>Valentine</span>❤️?
    </header>
  );
};

export default Header;
