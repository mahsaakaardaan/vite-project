
import Icon from '../../uikit/Icon';
import { NavLink } from 'react-router-dom';

type Props = {};

function BottomTabs({}: Props) {
  return (
    <div className="w-full bg-primary2 flex items-center justify-between fixed bottom-0">
      <NavLink
        to="/"
        className="w-full flex items-center justify-center py-6 text-white">
        <Icon name="fill_home" />
      </NavLink>
      <NavLink
        to="/orders"
        className="w-full flex items-center justify-center py-6 text-white">
        <Icon name="order" />
      </NavLink>
      <NavLink
        to="/products"
        className="w-full flex items-center justify-center py-6 text-white">
        <Icon name="product" />
      </NavLink>
      <NavLink
        to="/users"
        className="w-full flex items-center justify-center py-6 text-white">
        <Icon name="users" />
      </NavLink>
      <NavLink
        to="/assets"
        className="w-full flex items-center justify-center py-6 text-white">
        <Icon name="assets" />
      </NavLink>
    </div>
  );
}

export default BottomTabs;
