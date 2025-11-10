import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/apiConfig';

type Props = {};

function SingleOrderPage({}: Props) {
  const navigate = useNavigate();
  const params = useParams();
  const [order, setOrder] = useState<any>([]);

  const getData = async () => {
    const { data } = await api.get(`shipment/order/${params.id}`);
    setOrder(data.data[0]);
    console.log('first', data);
  };

  const calcPrice = order?.order_items?.reduce((sum:any, order:any) => {
    return sum + order.price_is;
  }, 0);

  useEffect(() => {
    getData();
  }, [params]);

  const changeOrderStatus = async (status:any) => {
    const body = {
      status,
      order_id: order?.order_id
    };

    api.patch('shipment/change-order-status', body);
    navigate(-1);
  };

  return (
    <div className="p-4">
      <p>Number: 4</p>
      <p>address: {order?.address?.full_address}</p>
      <p>Name: {order?.user_id}</p>
      <p>orderId: {params.id}</p>
      <p>price: {calcPrice}</p>
      <div>
        {order?.order_items?.map((item:any, index:number) => (
          <SingleOrderCard data={item} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-between my-4 gap-4">
        <button
          className="bg-primary2 text-primary3 p-4 w-full"
          onClick={() => changeOrderStatus('done')}>
          Done
        </button>
        <button
          className="bg-error text-primary3 p-4 w-full"
          onClick={() => changeOrderStatus('cancel')}>
          reject
        </button>
      </div>
    </div>
  );
}

export default SingleOrderPage;

const SingleOrderCard = ({ data }: {data: any}) => {
  return (
    <div className="mt-4 flex gap-4 p-2 bg-primary4">
      <img
        src={data.order_product.thumbnail}
        className="w-[70px] h-[70px]"
      />
      <div>
        <p>{data.order_product.title}</p>
        <p>
          attribute: {data.order_variant.color} :{' '}
          <span
            className="w-[20px] h-[20px] rounded-full"
            style={{ backgroundColor: data.order_variant.hex }}
          />
        </p>
        <p>price: {data.price_is}</p>
      </div>
    </div>
  );
};
