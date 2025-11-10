import { useEffect, useState } from 'react';
import TopTab from '../../uikit/TopTab';
import OrderCard from './component/OrderCard';
import api from '../../api/apiConfig';

type Props = {};

const tabs = [
  {
    id: 1,
    name: 'done',
    title: 'انجام‌شده',
    badge: 30
  },
  {
    id: 2,
    name: 'pending',
    title: 'درحال‌بررسی',
    badge: 90
  },
  {
    id: 3,
    name: 'cancel',
    title: 'کنسل‌شده',
    badge: 3
  }
];

function OrderPage({}: Props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].name);
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const { data } = await api.get(
      `shipment/admin-orders?status=${selectedTab}`
    );
    setOrders(data.data);
  };

  useEffect(() => {
    getOrders();
  }, [selectedTab]);

  return (
    <div>
      <TopTab
        data={tabs}
        {...{ selectedTab }}
        tabHandler={setSelectedTab}
      />
      <div className="p-4 flex flex-col gap-2">
        {orders.map((item: any) => (
          <OrderCard data={item} key={item.order_id} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
