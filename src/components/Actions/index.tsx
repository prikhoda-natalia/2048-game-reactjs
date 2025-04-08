import React from "react";

import s from "./Actions.module.scss";

type ActionsProps = {
  children: React.ReactNode;
};

const Actions = ({ children }: ActionsProps) => {
  return <div className={s.actions}>{children}</div>;
};

export default Actions;
