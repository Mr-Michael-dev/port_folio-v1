import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];


const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link href="/" className="btn-mobile">
      <button 
      className={`bttn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
    //   type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button 

