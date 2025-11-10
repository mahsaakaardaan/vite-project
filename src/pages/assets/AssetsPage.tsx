import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../uikit/Icon';
import CategoryCard from './component/CategoryCard';
import api from '../../api/apiConfig';

type Props = {};

function AssetsPage({}: Props) {
  const [categories, setCategories] = useState([]);
  const myRef = useRef<any>();

  const getCategories = async () => {
    try {
      const { data } = await api.get(
        'category'
      );
      const response = data.data;
      setCategories(response);
      
    } catch (error) {
      console.log('first',error);
      
    }
  };

  useEffect(() => { 
    getCategories();
  }, []);

  return (
    <div className="p-4" ref={myRef}>
      <AbsoluteButton />
      <h2>دسته بندی ها</h2>
      <div className="mb-4">
        <div className="flex flex-col gap-4">
          {categories.map((item, index) => (
            <CategoryCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssetsPage;

const AbsoluteButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/add-category/0')}
      className="w-[80px] h-[80px] rounded-[50%]
     bg-primary350 flex items-center justify-center 
     fixed bottom-[90px] shadow-md mr-8">
      <Icon name="s-plus" size={30} />
    </button>
  );
};
