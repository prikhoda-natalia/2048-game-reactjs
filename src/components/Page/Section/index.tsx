import React from "react";
import classNames from "classnames";

import s from "../Page.module.scss";

type SectionProps = {
  children: React.ReactNode;
  hasPadding?: boolean;
  heading?: string;
};

const Section = ({ children, hasPadding = false, heading }: SectionProps) => {
  const sectionClassName = classNames({
    [s.section]: true,
    [s.section_hasPadding]: hasPadding,
  });

  if (!heading) {
    return <section className={sectionClassName}>{children}</section>;
  }
  return (
    <section className={sectionClassName}>
      {heading && (
        <h1 className={s.heading}>
          <span className={s.title}>{heading}</span>
        </h1>
      )}
      <div className={s.content}>{children}</div>
    </section>
  );
};

export default Section;
