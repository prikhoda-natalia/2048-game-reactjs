import { Routes } from "react-router";
import { Route } from "react-router";
import AppLayout from "~/components/AppLayout";
import Game from "~/features/Game";
import { menuItems } from "~/data/menuItems";
import "~/utils/styles/global.scss";

function App() {
  return (
    <AppLayout menuItems={menuItems}>
      <Routes>
        <Route index element={<Game />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
