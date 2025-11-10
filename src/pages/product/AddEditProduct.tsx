import { useEffect, useState } from 'react';
import Input from '../../uikit/Input';
import Icon from '../../uikit/Icon';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/apiConfig';

type Props = {};

function AddEditProduct({}: Props) {
  const navigate = useNavigate();
  // if id = 0 is add new product but if id is other numbers is for editing a product
  const { id } = useParams();
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };

  const [product, setProduct] = useState<any>({});
  const [categories, setCategories] = useState<any>([]);
  const [input, setInput] = useState<any>({});
  const [subCategories, setSubCategories] = useState<any>([]);
  const [deletedVariants, setDeletedVariants] = useState<any>([]);
  const [variantInput, setVariantInput] = useState<any>({
    color: '',
    hex: '',
    count: '',
    price: ''
  });
  const [newVariants, setNewVariants] = useState<any>([]);

  const getProduct = async () => {
    try {
      const { data } = await api.get(`product/single/${id}`);
      const response = data.data[0];

      setProduct(response);
      setInput({
        ...input,
        thumbnail: response?.thumbnail,
        title: response?.title,
        description: response?.description,
        product_category_id: response?.categoryId,
        product_sub_id: response?.subCategoryId,
        off: response?.off
      });

      // setAtts(JSON.parse(response?.attributes));
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  // const [atts, setAtts] = useState([]);
  // const [att, setAtt] = useState({});
  const getCategories = async () => {
    try {
      const { data } = await api.get('category');

      let arr: any[] = [];
      data?.data?.map((i: any) =>
        arr.push({ value: i.id, label: i.fa_name })
      );

      setCategories(arr);
    } catch (error) {}
  };

  const getSubCategory = async (id: any) => {
    try {
      const { data } = await api.get(
        `sub-category/sub-categories/category-id/${id}`
      );

      let arr2: any = [];
      data?.data?.map((i: any) =>
        arr2.push({ value: i.id, label: i.fa_s_name })
      );
      setSubCategories(arr2);
    } catch (error) {
      console.log('first error ', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // useEffect(() => {
  //   setInput({ ...input, attributes: atts });
  // }, [atts]);

  const submit = async (e: any) => {
    e.preventDefault();
    // const { attributes, thumbnail, ...other } = input;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', input.title);
    formData.append('description', input.description);
    formData.append('product_category_id', input.product_category_id);
    formData.append('product_sub_id', input.product_sub_id);
    formData.append('off', input.off);
    formData.append('variants', JSON.stringify(newVariants));

    // const body = {
    //   ...input,
    //   // attributes: JSON.stringify(attributes),
    //   variants: newVariants
    // };
    await api.post('product/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    navigate(-1);
  };

  const editSubmit = async (e: any) => {
    e.preventDefault();
    // const { attributes, thumbnail, ...other } = input;

    const body = {
      ...input
      // attributes: JSON.stringify(attributes),
      // newVariants,
    };
    newVariants.length > 0 ? body.newVariants : null;
    deletedVariants.length > 0
      ? (body.deletedVariantIds = deletedVariants)
      : undefined;
    console.log('first', body);

    await api.put(`product/update/${id}`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    navigate(-1);
  };

  useEffect(() => {
    input?.product_sub_id &&
      getSubCategory(
        categories.filter(
          (i: any) => i?.value == input?.categoryId
        )[0]?.value
      );
  }, [product]);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values: any) => ({ ...values, [name]: value }));
  };

  const handleVariantChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setVariantInput((values: any) => ({ ...values, [name]: value }));
  };

  const handleAddNewVariant = () => {
    if (
      variantInput.color !== '' &&
      variantInput.hex !== '' &&
      variantInput.count !== '' &&
      variantInput.price !== ''
    ) {
      setNewVariants((prev: any) => [...prev, variantInput]);
    } else {
      console.log('handleAddNewVariant can not be empty');
    }
  };

  const handleDeletePrevVariant = (variantId: any) => {
    // const varIds = product?.variants?.map((v) => v.id);
    setDeletedVariants((prev: any) => [...prev, variantId]);
  };

  // const onDeleteAtt = (id) => {
  //   const tt = atts.filter((i) => Object.keys(i)[0] !== id[0]);
  //   setAtts(tt);
  // };

  return (
    <div className="w-full p-4">
      <form
        onSubmit={(e) => {
          if (Number(id) == 0) {
            submit(e);
          } else {
            editSubmit(e);
          }
        }}
        className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="uploadImage"
            className="flex items-center gap-3 bg-bg p-4 rounded-xl cursor-pointer">
            <span>upload thumbnail</span>
            <Icon name="upload" />
          </label>
          <input
            id="uploadImage"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        <Input
          title="thumbnail"
          name="thumbnail"
          value={input?.thumbnail}
          onChange={handleChange}
        />
        <Input title="images" type="file" />
        <Input
          title="title"
          name="title"
          value={input?.title}
          onChange={handleChange}
        />
        <Input
          title="description"
          name="description"
          value={input?.description}
          onChange={handleChange}
        />
        <p>category</p>
        <Dropdown
          options={categories}
          value={
            categories.filter(
              (i:any) => i?.value == input?.product_category_id
            )[0]?.label
          }
          className="mt-0"
          onChange={(e) => {
            getSubCategory(e.value);
            setInput({ ...input, product_category_id: e.value });
          }}
        />
        <p>Sub Category</p>
        <Dropdown
          options={subCategories}
          value={
            subCategories.filter(
              (i: any) => i?.value == input?.product_sub_id
            )[0]?.label
          }
          className="mt-0"
          onChange={(e) => {
            setInput({ ...input, product_sub_id: e.value });
          }}
        />
        <Input
          title="off"
          name="off"
          value={input?.off}
          onChange={handleChange}
        />
        <div>
          {product?.variants?.map((item: any, index: number) => (
            <VariantItem
              key={index}
              variant={item}
              onDelete={handleDeletePrevVariant}
              extraData={deletedVariants}
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-primary2 my-4" />
        {newVariants?.map((item: any, index: number) => (
          <VariantItem key={index} variant={item} />
        ))}
        <div>
          <div className="flex items-center flex-wrap justify-between">
            <Input
              title="color"
              name="color"
              value={variantInput.color}
              onChange={handleVariantChange}
            />
            <Input
              title="hex"
              name="hex"
              value={variantInput.hex}
              onChange={handleVariantChange}
            />
            <Input
              title="count"
              name="count"
              value={variantInput.count}
              onChange={handleVariantChange}
            />
            <Input
              title="price"
              name="price"
              value={variantInput.price}
              onChange={handleVariantChange}
            />
          </div>
          <button
            type="button"
            onClick={handleAddNewVariant}
            className="w-full bg-secondary py-4 my-6 text-primary1">
            add
          </button>
        </div>
        {/* <div className="flex flex-wrap gap-3">
          {atts?.map((item, index) => (
            <Attributes
              data={item}
              key={index}
              onDelete={() => onDeleteAtt(Object.keys(item))}
            />
          ))}
        </div> */}
        {/* <div className="flex gap-4 items-center">
          <Input
            title="key"
            value={att.key}
            onChange={(e) => setAtt({ ...att, key: e.target.value })}
          />
          <Input
            title="value"
            value={att.value}
            onChange={(e) =>
              setAtt({ ...att, value: e.target.value })
            }
          />
          <Icon
            name="plus"
            onClick={() => {
              setAtts((prev) => [
                ...prev,
                { [att['key']]: att['value'] }
              ]);
            }}
          />
        </div> */}
        <button
          type="submit"
          className="w-full bg-primary2 py-4 my-6 text-primary3">
          {id && Number(id) == 0 ? 'submit' : 'edit'}
        </button>
      </form>
    </div>
  );
}

export default AddEditProduct;

export const VariantItem = ({
  variant,
  onDelete,
  extraData
}: {
  variant?: any;
  onDelete?: any;
  extraData?: any;
}) => {
  return (
    <div
      className={`flex gap-4 items-center mt-4 ${
        extraData?.some((i: any) => i == variant?.id)
          ? 'line-through'
          : undefined
      }`}>
      <p>color: {variant?.color}</p>
      <div
        className="w-[20px] h-[20px] border-solid border-[1px] border-icon"
        style={{ backgroundColor: `${variant?.hex}` }}
      />
      <p>count: {variant?.count}</p>
      <p>price: {variant?.price}</p>
      <Icon
        name="delete"
        color="error"
        onClick={() => onDelete(variant?.id)}
      />
    </div>
  );
};

export const Attributes = ({
  data,
  onDelete
}: {
  data: any;
  onDelete: any;
}) => {
  return (
    <div className="flex gap-2 bg-primary3 py-2 px-4 mt-4">
      {data && (
        <h2>
          {Object.keys(data)} : {Object.values(data)}
        </h2>
      )}
      <Icon name="delete" className="text-error" onClick={onDelete} />
    </div>
  );
};
