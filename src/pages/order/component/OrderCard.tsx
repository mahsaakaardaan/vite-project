
import { useNavigate } from 'react-router-dom';

type Props = {
  data: any;
};

function OrderCard({ data }: Props) {
  const navigate = useNavigate();

  const calcPrice = data.order_items.reduce((sum:any,order:any) => {
    return sum + (order.price_is)
  },0)

  return (
    <div
      className="bg-primary4 p-2 cursor-pointer border-b-[1px] border-b-secondary"
      onClick={() => navigate(`/order/${data.order_id}`)}>
      <div className="flex items-center justify-between">
        <p>data: 1404/03/05</p>
        <p>orderId: {data.order_id}</p>
      </div>
      <div className="flex items-center justify-between my-4">
        <p>num({data.order_items.length})</p>
        <div className="flex items-center gap-1">
          {data.order_items.map((item:any, index:number) => (
            <img
              key={index}
              src={item.order_product.thumbnail}
              className="w-[50px] h-[50px]"
            />
          ))}
        </div>
      </div>
      <div>
        <p>price: {calcPrice}</p>
      </div>
    </div>
  );
}

export default OrderCard;
