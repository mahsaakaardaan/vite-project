import Icon from '../uikit/Icon';
import api from '../api/apiConfig';

type Props = {
  data: any;
};

function BannerCard({ data }: Props) {
  const { banner_id, text, image, search } = data;

  const onDelete = async () => {
    await api.delete(`/banner/delete/${banner_id}`);
  };

  return (
    <div className="bg-white p-2">
      <img src={image} className="w-[100px] h-[100px]" />
      <h2>{text}</h2>
      <h1>{search}</h1>
      <button className="px-4 py-1 bg-primary3" onClick={onDelete}>
        <Icon name="delete" color="error" />
      </button>
    </div>
  );
}

export default BannerCard;
