import {ButtonProps} from "../types/types";
import styles from './button.module.css'

const Button = ({name, handleClick, inlineStyle, handleHover}: ButtonProps) => {
  return (
    <button className={styles.button} onClick={handleClick} onMouseEnter={handleHover} style={inlineStyle}>
      {name}
    </button>
  );
};

export default Button;
