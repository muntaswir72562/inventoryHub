import { BiSearchAlt2 } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full h-16 p-6 flex items-center">
      <div className="logo flex items-center text-lg font-bold">
        <FiBox className="mr-2 text-[#1F7A8C]" />
        <h3>InventoryHub</h3>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center p-2 bg-gray-300 w-1/4 mx-16 rounded-full">
          <BiSearchAlt2 />
          <input
            className="ml-2 bg-transparent outline-none"
            type="text"
            placeholder={` Search anything`}
          />
        </div>
        <div className="profile__container w-28 bg-gray-200 rounded-full px-3 py-1.5">
          <Link to="*" className="flex items-center">
            <div className="profile__icon">
              <FcBusinessman className="text-3xl mr-4 bg-gray-300 rounded-full" />
            </div>
            <div className="profile__name">john</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
