import React from "react";
import s from "~/components/Page/Page.module.scss";

type ColumnProps = {
  children: React.ReactNode;
};

const Column = ({ children }: ColumnProps): React.JSX.Element => (
  <section className={s.column}>{children}</section>
);

export default Column;
