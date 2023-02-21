import { FiShoppingCart } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import SidebarRow from "./SidebarRow";

const SideBar = () => {
  return (
    <aside className="sidebar w-1/6">
      <div className="sidebar__container">
        <div className="sidebar__body flex">
          <ul className="menu w-full">
            <li className="menu__item">
              <SidebarRow path="/" Icon={RxDashboard} title="Dashboard" />
            </li>
            <li className="menu__item">
              <SidebarRow path="/product" Icon={FiShoppingCart} title="Product" />
            </li>
            <li className="menu__item">
              <SidebarRow path="/supplier" Icon={IoIosPeople} title="Supplier" />
            </li>
            <li className="menu__item">
              <SidebarRow path="/payment" Icon={MdOutlinePayment} title="Payment" />
            </li>
            <li className="menu__item">
              <SidebarRow path="/invoice" Icon={FaFileInvoiceDollar} title="Invoice" />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
