import s from "./NumberedBoxes.module.scss";

export type NumberedBox = {
  value: number;
  title: string;
};

type NumberedBoxesProps = {
  items: NumberedBox[];
};

const NumberedBoxes = ({ items }: NumberedBoxesProps) => (
  <div className={s.this}>
    {items.map(({ value, title }) => {
      return (
        <article className={s.item} key={title}>
          <header className={s.header}>
            <div className={s.value}>{value}</div>
            <h3 className={s.title}>{title}</h3>
          </header>
        </article>
      );
    })}
  </div>
);

export default NumberedBoxes;
