import {
  AiOutlineSetting,
  AiOutlinePhone,
  AiOutlineBell,
  AiOutlineLeft,
  AiOutlineEdit,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlinePushpin,
  AiOutlineGift,
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiOutlinePercentage,
  AiOutlineMenu,
  AiOutlineFire,
  AiFillCheckCircle,
  AiFillDollarCircle,
  AiOutlinePicRight,
  AiFillStar,
  AiOutlineMore,
  AiOutlineMail,
  AiOutlineMobile,
  AiOutlineLaptop,
  AiOutlineDown,
  AiOutlineBook,
  AiOutlineSortAscending,
  AiOutlineShareAlt,
  AiOutlineDelete,
  AiOutlinePlus,
  AiFillAppstore,
  AiOutlineOrderedList,
  AiFillProduct,
  AiFillHome,
  AiOutlineUpload
} from 'react-icons/ai';
import { LuSofa } from 'react-icons/lu';
import { BiFridge } from 'react-icons/bi';
import { IoShirtOutline } from 'react-icons/io5';
import { GiNecklace } from 'react-icons/gi';
import { GiLipstick } from 'react-icons/gi';
import { CiMedicalCase } from 'react-icons/ci';
import { FaUsers } from 'react-icons/fa';
// import styles from './icon.module.css'
export type IconType =
  | 'setting'
  | 'call'
  | 'notification'
  | 'chev-left'
  | 'edit'
  | 'shop'
  | 'heart'
  | 'comment'
  | 'address'
  | 'gift'
  | 'clock'
  | 'user'
  | 'log-out'
  | 'close'
  | 'home'
  | 'plus'
  | 'search'
  | 'arr-right'
  | 'menu'
  | 'percent'
  | 'fire'
  | 'check'
  | 'dollar'
  | 'list'
  | 'star'
  | 'h-3-dots'
  | 'mail'
  | 'mobile'
  | 'laptop'
  | 'chev-down'
  | 'chev-top'
  | 'book'
  | 'house'
  | 'house-electric'
  | 'dress'
  | 'gold'
  | 'make-up'
  | 'medical'
  | 'sort'
  | 'share'
  | 'delete'
  | 's-plus'
  | 'assets'
  | 'order'
  | 'product'
  | 'fill_home'
  | 'users'
  | 'upload';

type Props = {
  name: IconType;
  size?: number | string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

function Icon({
  name,
  size = '24px',
  color = 'text',
  className,
  onClick
}: Props) {
  const iconStyle = {
    width: typeof size == 'number' ? size : `${size}px`,
    height: typeof size == 'number' ? size : `${size}px`
  };
  return (
    <div
      onClick={onClick}
      className={`${className}`}
      style={{
        display: 'block',
        width: typeof size == 'number' ? size : `${size}px`,
        cursor: 'pointer'
      }}>
      {name == 'setting' && (
        <AiOutlineSetting
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'call' && (
        <AiOutlinePhone
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'notification' && (
        <AiOutlineBell
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'chev-left' && (
        <AiOutlineLeft
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'edit' && (
        <AiOutlineEdit
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'shop' && (
        <AiOutlineShoppingCart
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'heart' && (
        <AiOutlineHeart
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'comment' && (
        <AiOutlineComment
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'address' && (
        <AiOutlinePushpin
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'gift' && (
        <AiOutlineGift
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'clock' && (
        <AiOutlineClockCircle
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'user' && (
        <AiOutlineUser
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'log-out' && (
        <AiOutlineLogout
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'close' && (
        <AiOutlineClose
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'home' && (
        <AiOutlineHome
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'plus' && (
        <AiOutlinePlusCircle
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'search' && (
        <AiOutlineSearch
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'arr-right' && (
        <AiOutlineArrowRight
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'menu' && (
        <AiOutlineMenu
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'percent' && (
        <AiOutlinePercentage
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'fire' && (
        <AiOutlineFire
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'check' && (
        <AiFillCheckCircle
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'dollar' && (
        <AiFillDollarCircle
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'list' && (
        <AiOutlinePicRight
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'star' && (
        <AiFillStar className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'h-3-dots' && (
        <AiOutlineMore
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'mail' && (
        <AiOutlineMail
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'mobile' && (
        <AiOutlineMobile
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'laptop' && (
        <AiOutlineLaptop
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'chev-down' && (
        <AiOutlineDown
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'book' && (
        <AiOutlineBook
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'house' && (
        <LuSofa className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'house-electric' && (
        <BiFridge className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'dress' && (
        <IoShirtOutline
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'gold' && (
        <GiNecklace className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'make-up' && (
        <GiLipstick className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'medical' && (
        <CiMedicalCase
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'sort' && (
        <AiOutlineSortAscending
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'share' && (
        <AiOutlineShareAlt
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'delete' && (
        <AiOutlineDelete
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 's-plus' && (
        <AiOutlinePlus
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'assets' && (
        <AiFillAppstore
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'order' && (
        <AiOutlineOrderedList
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'product' && (
        <AiFillProduct
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
      {name == 'fill_home' && (
        <AiFillHome className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'users' && (
        <FaUsers className={`text-${color}`} style={iconStyle} />
      )}
      {name == 'upload' && (
        <AiOutlineUpload
          className={`text-${color}`}
          style={iconStyle}
        />
      )}
    </div>
  );
}

export default Icon;
