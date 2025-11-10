
import { useNavigate } from 'react-router-dom';

type Props = {
  data: any
};

function CategoryCard({data}: Props) {
  const navigate = useNavigate()
  return (
    <div className="bg-primary3 p-2" onClick={() => navigate(`/add-category/${data?.id}`)}>
      <p>{data.fa_name}</p>
      {/* <p>number of Products: 120</p> */}
      {/* <p>number of subCategories: 4</p> */}
      <div className='flex flex-wrap gap-2'>
        {data?.subs?.length > 0 && data?.subs?.map((item:any, index:number) => (
          <SubCategory key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryCard;

export const SubCategory = ({data}: {data: any}) => {
  return (
    <>
    {data?.id && <div className='bg-primary4 p-1'>
      <p>{data?.fa_s_name}</p>
    </div>}
    </>
  );
};
