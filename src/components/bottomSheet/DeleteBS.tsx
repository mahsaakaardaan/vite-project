
import BottomSheet from '../../uikit/BottomSheet';
import { useNavigate } from 'react-router-dom';
import api from '../../api/apiConfig';

type Props = {
  open: any;
  setOpen: any;
  id: any;
};

function DeleteBS({ open, setOpen, id }: Props) {
  const navigate = useNavigate();
  const onClick = () => {
    setOpen(false);
  };
  const onDelete = async () => {
    try {
      await api.delete(`product/delete/${id}`);
      onClick();
      navigate(-1);
    } catch (error) {}
  };

  return (
    <BottomSheet {...{ open, setOpen }}>
      <p className="my-4">آیا از پاک کردن ممصول اطمینان دارید؟</p>
      <div className="flex gap-4 justify-between">
        <button
          className="w-full py-2 bg-primary1 text-primary3"
          onClick={onDelete}>
          بله
        </button>
        <button
          className="w-full py-2 bg-primary3 text-primary1"
          onClick={onClick}>
          خیر
        </button>
      </div>
    </BottomSheet>
  );
}

export default DeleteBS;
