import Menu from "./components/Menu/Menu";
import Categories from "./components/Categories/Categories";
import menu from "./data.js";
import { useState } from "react";

function MenuApp() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <h1>Menu App</h1>
      <Categories />
      <Menu items={menuItems} />
    </div>
  );
}

export default MenuApp;
