import { useEffect, useState } from 'react';
import { Price } from './component/PdpCard';
import Icon from '../../uikit/Icon';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteBS from '../../components/bottomSheet/DeleteBS';
import api from '../../api/apiConfig';

type Props = {};

function PdpPage({}: Props) {
  const [product, setProduct] = useState<any>({});
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await api.get(`product/single/${id}`);
      setProduct(data.data[0]);
      setSelectedVariant(data.data[0]?.variants?.[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="relative">
      <DeleteBS {...{ open, setOpen }} id={product?.id} />
      <img
        src={product?.thumbnail}
        className="w-full h-[30vh] mb-4 object-contain"
      />
      <div className="flex gap-4 mb-4">
        <img src="/s2.jpg" className="w-[70px] h-[70px]" />
        <img src="/s2.jpg" className="w-[70px] h-[70px]" />
        <img src="/s2.jpg" className="w-[70px] h-[70px]" />
      </div>
      <div className="absolute top-0 left-0 flex flex-col gap-6 p-2 bg-primary3">
        <Icon
          name="edit"
          className="text-secondary"
          onClick={() => navigate(`/add-product/${product?.id}`)}
        />
        <Icon
          name="delete"
          className="text-error"
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="p-4">
        <p className="text-secondary">
          {product?.fa_name} / {product?.fa_s_name}
        </p>
        <h2>{product?.title}</h2>
        <h4>{product?.description}</h4>
        <div className="flex gap-2">
          {product?.variants?.map((item: any, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedVariant(item)}>
              <div
                className={`w-[25px] h-[25px] rounded-[50%] flex items-center justify-center border-solid border-[2px] border-primary3 ${
                  selectedVariant?.color !== item?.color
                    ? 'border-none'
                    : ''
                }`}>
                <div
                  className="w-[15px] h-[15px] rounded-[50%] "
                  style={{ backgroundColor: item?.hex }}
                />
              </div>
            </button>
          ))}
        </div>
        <div className="w-[30%] my-4">
          <Price price={selectedVariant?.price} off={product?.off} />
          <p>Number: {selectedVariant?.count}</p>
        </div>
        {/* <div className="flex flex-wrap gap-4">
          {product?.attributes &&
            JSON.parse(product?.attributes || {})?.map(
              (item, index) => <Attributes data={item} key={index} />
            )}
        </div> */}
      </div>
    </div>
  );
}

export default PdpPage;
