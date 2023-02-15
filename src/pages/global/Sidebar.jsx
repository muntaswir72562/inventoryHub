import { FiBox } from "react-icons/fi";

const SideBar = () => {
  return (
    <aside className="sidebar w-1/6 bg-red-300">
      <div className="sidebar__container p-2">
        <div className="sidebar__header flex items-center">
          <div className="sidebar__logo m-2">
            <FiBox />
          </div>
          <h3>InventoryHub</h3>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
