import React from "react";
import s from "./Actions.module.scss";

type ActionsProps = {
  children: React.ReactNode;
};

const Actions = ({ children }: ActionsProps): React.JSX.Element => {
  return <div className={s.actions}>{children}</div>;
};

export default Actions;
