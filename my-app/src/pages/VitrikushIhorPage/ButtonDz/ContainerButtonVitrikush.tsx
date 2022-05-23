import { useState } from "react";
import { Button } from "./Button";
import { RoutVitrikushIhorHome } from "../../../common/UsersRout/RoutVitrikushIhorHome";
import s from "./Button.module.scss";

export const ContainerButtonVitrikush = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "brown",
    "black",
    "white",
  ];
  const randomColor = ()=> colors[Math.floor(Math.random() * colors.length)];

  

  const [color, setColor] = useState(randomColor);
  const [colorBg, setColorBg] = useState(randomColor);

  return (
    <>
      <div className={s.wrapperBtn}>
        <Button
          id={1}
          setColor={setColor}
          color={color}
          setColorBg={setColorBg}
          colorBg={colorBg}
          randomColor={randomColor}
        />
        <Button
          id={2}
          setColorBg={setColorBg}
          colorBg={colorBg}
          setColor={setColor}
          color={color}
          randomColor={randomColor}
        />
      </div>
      <div>
        <RoutVitrikushIhorHome />
      </div>
    </>
  );
};
