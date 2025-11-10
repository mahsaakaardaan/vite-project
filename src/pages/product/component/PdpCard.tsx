import Icon from '../../../uikit/Icon';
import { useNavigate } from 'react-router-dom';

type Props = {
  data: any;
};

function PdpCard({ data }: Props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${data?.id}`)}
      className="max-w-[300px] min-w-[150px] border-solid border-[1px] border-primary3 hover:shadow-2xl cursor-pointer bg-white">
      <div className="">
        <img src={data?.thumbnail} className="w-full h-[300px]" />
        <div className="flex gap-2 justify-between py-2">
          <img src="/s2.jpg" className="w-[60px] h-[60px]" />
          <img src="/s2.jpg" className="w-[60px] h-[60px]" />
          <img src="/s2.jpg" className="w-[60px] h-[60px]" />
          <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary4">
            <Icon name="chev-left" />
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2>{data?.title}</h2>
        <h2 className="text-nowrap">
          {data?.description.slice(0, 30)}...
        </h2>
        <h3 className="text-secondary">
          {data?.fa_name} / {data?.fa_s_name}
        </h3>
        <Price price={data?.variants?.[0]?.price} off={data?.off} />
        <p>Number: {data?.variants[0].count}</p>
      </div>
    </div>
  );
}

export default PdpCard;

export const Price = ({ price, off }: { price: any; off: any }) => {
  // const firstPrice = data?.variants?.[0]?.price
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="line-through text-icon">{price}</p>
        <p className="bg-error py-1 px-2 text-[10px] text-white rounded-xl">
          {off}%
        </p>
      </div>
      <p>{Number(price) * (1 - Number(off) / 100)}</p>
    </div>
  );
};
