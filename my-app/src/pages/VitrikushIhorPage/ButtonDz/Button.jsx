import React from "react";
import s from "./Button.module.scss";

export const Button = ({
  color,
  colorBg,
  id,
  setColorBg,
  setColor,
  randomColor,
}) => {
  return (
    <>
      <div style={{ backgroundColor: `${colorBg}` }} className={s.containerBtn}>
        <button
          style={{ backgroundColor: `${color}` }}
          className={s.btn}
          onClick={() => {
            if (id === 1) {
              setColor(randomColor);
            } else if (id === 2) {
              setColorBg(randomColor);
            }
          }}
        >
          Click me!
        </button>
      </div>
    </>
  );
};
