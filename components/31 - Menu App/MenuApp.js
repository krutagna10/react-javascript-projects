import Menu from "./components/Menu/Menu";
import Categories from "./components/Categories/Categories";
import menu from "./data.js";
import { useState } from "react";

function MenuApp() {
  const [menuItems, setMenuItems] = useState(menu);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Menu App</h1>
      <Categories items={menuItems} />
    </div>
  );
}

export default MenuApp;
