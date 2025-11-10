import { useEffect, useState } from 'react';
import Input from '../../uikit/Input';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/apiConfig';

type Props = {};

function AddEditCategoryPage({}: Props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newCategoryInput, setNewCategoryInput] = useState<any>({});
  const [newSubCategoryInput, setNewSubCategoryInput] = useState<any>(
    {}
  );
  const [subCategory, setSubCategory] = useState<any[]>([]);
  const [Categories, setCategories] = useState<any>([]);

  const getCategory = async () => {
    const { data } = await api.get(`category/${id}`);

    const response = data?.data;
    setCategories(response);

    setNewCategoryInput({
      ...newCategoryInput,
      fa_name: response?.fa_name,
      en_name: response?.en_name
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const onChangeCategory = (e: any) => {
    setNewCategoryInput((prev:any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const onChangeSubCategory = (e: any) => {
    setNewSubCategoryInput((prev:any) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addCategory = async (e: any) => {
    e.preventDefault();
    await api.post('category/add', newCategoryInput, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate(-1);
  };

  const addSubCategory = () => {
    const newSC: any = {};
    newSC.fa_s_name = newSubCategoryInput?.fa_s_name;
    newSC.en_s_name = newSubCategoryInput?.en_s_name;
    newSC.category_id = Number(id);

    setSubCategory((prev) => [...prev, newSC]);
  };

  const submitSubCategory = async (e: any) => {
    e.preventDefault();

    await api.post('sub-category/add', subCategory);
    navigate(-1);
  };

  return (
    <div className="p-4">
      <form onSubmit={addCategory}>
        <p>اضافه کردن دسته بندی جدید</p>
        <Input
          title="fa_name"
          name="fa_name"
          value={newCategoryInput?.fa_name}
          onChange={onChangeCategory}
        />
        <Input
          title="en_name"
          name="en_name"
          value={newCategoryInput?.en_name}
          onChange={onChangeCategory}
        />
        <button
          type="submit"
          className="w-full bg-primary1 py-2 my-6 text-primary4">
          Submit
        </button>
      </form>
      <div className="w-full h-[1px] bg-icon my-8" />
      <p>زیر دسته بندی های موجود</p>
      <div className="flex flex-wrap gap-4 mt-2">
        {Categories?.subs?.map((item:any, index:number) => (
          <div className="bg-primary4 p-1" key={index}>
            <p>{item.fa_s_name}</p>
          </div>
        ))}
        {subCategory?.map((item, index) => (
          <div className="bg-primary4 p-1" key={index}>
            <p>{item.fa_s_name}</p>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-icon my-8" />
      <form onSubmit={submitSubCategory}>
        <p>اضافه کردن زیر دسته بندی جدید</p>
        <Input
          title="fa_name"
          name="fa_s_name"
          value={newSubCategoryInput?.fa_s_name}
          onChange={onChangeSubCategory}
        />
        <Input
          title="en_name"
          name="en_s_name"
          value={newSubCategoryInput?.en_s_name}
          onChange={onChangeSubCategory}
        />

        <button
          type="submit"
          className="w-full bg-primary1 py-2 my-6 text-primary4">
          Submit
        </button>
      </form>
      <button
        onClick={addSubCategory}
        className="w-full bg-primary1 py-2 my-6 text-primary4">
        add
      </button>
    </div>
  );
}

export default AddEditCategoryPage;
