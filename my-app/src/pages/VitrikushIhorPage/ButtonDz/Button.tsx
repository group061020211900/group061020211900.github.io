import s from "./Button.module.scss";

interface Props {
  id: number;
  setColor: (color: string) => void;
  color: string;
  setColorBg: (color: string) => void;
  colorBg: string;
  randomColor: any
}

export const Button = ({
  color,
  colorBg,
  id,
  setColorBg,
  setColor,
  randomColor,

}:Props) => {
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
