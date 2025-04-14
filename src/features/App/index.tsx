import React from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import AppLayout from "~/components/AppLayout";
import { menuItems } from "~/data/menuItems";
import Game from "~/features/Game";
import "~/utils/styles/global.scss";
import Statistics from "~/features/Statistics";
import { appPaths } from "./utils/constants";

const App = (): React.JSX.Element => {
  return (
    <AppLayout menuItems={menuItems}>
      <Routes>
        <Route index element={<Game />} />
        <Route path={appPaths.statistics} element={<Statistics />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
