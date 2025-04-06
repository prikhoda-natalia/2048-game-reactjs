import React from "react";
import s from "./Page.module.scss";
import Column from "./Column";
import Section from "./Section";

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <div className={s.page}>{children}</div>;
};

Page.Column = Column;
Page.Section = Section;

export default Page;
