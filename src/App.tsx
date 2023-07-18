import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import { links } from "./links";

export default function App() {
  return (
    <Drawer>
      <Routes>
        {links.map(({ to, component }) => (
          <Route path={to} element={component} />
        ))}
      </Routes>
    </Drawer>
  );
}
