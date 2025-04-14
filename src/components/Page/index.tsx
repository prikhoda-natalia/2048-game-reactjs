import React from "react";
import Column from "./Column";
import s from "./Page.module.scss";
import Section from "./Section";

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps): React.JSX.Element => {
  return <div className={s.page}>{children}</div>;
};

Page.Column = Column;
Page.Section = Section;

export default Page;
