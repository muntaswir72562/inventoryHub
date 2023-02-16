import { Link } from "react-router-dom";

const SidebarRow = ({ path, Icon, title }) => {
  return (
    <div className="menu__item__container">
      <Link to={path} className="menu__item__link">
        <div className="menu__item__logo">
          <Icon />
        </div>
        <div className="menu__item__title">{title}</div>
      </Link>
    </div>
  );
};

export default SidebarRow;
