import {CSSProperties} from "react";

export type ButtonProps = {
  name: string
  handleClick?: () => void
  handleHover?: () => void
  inlineStyle?: CSSProperties
}

export type GifsProps = {
  classNames: string
}
