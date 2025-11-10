import { useEffect, useState } from 'react';
import Icon from '../../uikit/Icon';
import PdpCard from './component/PdpCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../../uikit/Input';
import api from '../../api/apiConfig';

type Props = {};

function ProductsPage({}: Props) {
  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [searchInput, setSearchInput] = useState('');
  const [params, setParams] = useState<any>({});
  const [params2, setParams2] = useState<any>({});
  const [off, setOff] = useState<any>(undefined);

  const getCategories = async () => {
    try {
      const { data } = await api.get('category');
      const response = data.data;

      setCategories(response);
    } catch (error) {
      console.log('first', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleSearch = async (e: any) => {
    setSearchInput(e.target.value);
  };

  const search = async () => {
    setTimeout(async () => {
      const { data } = await api.get(`product/search`, {
        params: {
          s: searchInput,
          categoryId: params?.id,
          subCategoryId: params2?.id
        }
      });

      setProducts(data.data);
      // setSearchParams((p) => {
      //   params?.id
      //     ? p.set('category', params?.fa_title)
      //     : p.delete('category');
      //   params2?.id
      //     ? p.set('subCategory', params2?.name)
      //     : p.delete('subCategory');
      //   searchInput !== ''
      //     ? p.set('search', searchInput)
      //     : p.delete('search');
      //   return p;
      // });
    }, 0);
  };

  const addOff = async () => {
    const ids = products.map((i: any) => i?.id);

    await axios.post(
      'http://localhost:3335/product/add_off_products',
      { productsId: ids, offValue: Number(off) }
    );
  };

  useEffect(() => {
    search();
  }, [searchInput, params, params2]);
  // }, [searchInput, params, params2,addOff]);

  return (
    <div className="w-full p-4">
      <div className="mb-4">
        <Input
          placeholder="جستوجو"
          value={searchInput}
          onChange={handleSearch}
        />
        <div>
          فیلتر
          <div>
            <p>دسته بندی ها</p>
            <div className="flex items-center">
              {categories?.map((item: any, index: number) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      if (item?.id == params?.id) {
                        setParams({});
                        setParams2({});
                      } else {
                        setParams(item);
                        setParams2({});
                      }
                    }}
                    className={`mx-2 ${
                      item?.id == params?.id
                        ? 'bg-primary2'
                        : 'bg-primary350'
                    } text-white px-2 py-1`}>
                    {item?.fa_name}
                  </button>
                </div>
              ))}
            </div>

            <p>زیردسته بندی ها</p>

            {params?.id == params?.id && (
              <div className="flex items-center">
                {params?.subs?.map((sub: any, index2: number) => (
                  <div key={index2}>
                    <button
                      onClick={() => {
                        if (sub?.id == params2?.id) {
                          setParams2({});
                        } else {
                          setParams2(sub);
                        }
                      }}
                      className={`mx-2 ${
                        sub?.id == params2?.id
                          ? 'bg-primary2'
                          : 'bg-primary350'
                      } text-white px-2 py-1`}>
                      {sub.fa_s_name}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p>اضافه کردن تخفیف</p>
        <Input
          value={off}
          onChange={(e: any) => setOff(e.target.value)}
        />
        <button onClick={addOff}>اعمال</button>
      </div>
      <AbsoluteButton />
      <h3 className="mb-8">لیست محصولات</h3>
      <div className="flex items-center flex-wrap gap-2 justify-center">
        {products.map((item: any, index: number) => (
          <PdpCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;

export const AbsoluteButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/add-product/0')}
      className="w-[80px] h-[80px] rounded-[50%]
     bg-primary350 flex items-center justify-center 
     fixed bottom-[90px] shadow-md mr-8">
      <Icon name="s-plus" size={30} />
    </button>
  );
};
