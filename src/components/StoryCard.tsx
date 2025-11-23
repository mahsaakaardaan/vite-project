import moment from 'moment-jalaali';
import Icon from '../uikit/Icon';
import api from '../api/apiConfig';
type Props = {
  data: any;
};

moment.loadPersian({ usePersianDigits: true });

function StoryCard({ data }: Props) {
  const date = moment(data.date);

  const onDelete = async () => {
    await api.delete(`/story/delete/${data.story_id}`);
  };

  return (
    <div className="bg-white p-2">
      <img src={data.image} className="w-[100px] h-[100px]" />
      <h2>{data.title}</h2>
      <p className="w-[100px] text-[12px]">{data.description}</p>
      <p className="text-[0.6rem]">{date.fromNow()}</p>
      <button className="px-4 py-1 bg-primary3" onClick={onDelete}>
        <Icon name="delete" color="error" />
      </button>
    </div>
  );
}

export default StoryCard;
