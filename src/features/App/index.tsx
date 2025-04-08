import { Routes } from "react-router";
import { Route } from "react-router";
import AppLayout from "~/components/AppLayout";
import Game from "~/features/Game";
import { menuItems } from "~/data/menuItems";
import "~/utils/styles/global.scss";
import { appPaths } from "./utils/constants";
import Statistics from "~/features/Statistics";

function App() {
  return (
    <AppLayout menuItems={menuItems}>
      <Routes>
        <Route index element={<Game />} />
        <Route path={appPaths.statistics} element={<Statistics />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
