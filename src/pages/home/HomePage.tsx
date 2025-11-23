import { useNavigate } from 'react-router-dom';
import api from '../../api/apiConfig';
import { useEffect, useState } from 'react';
import StoryCard from '../../components/StoryCard';
import BlogCard from '../../components/BlogCard';
import BannerCard from '../../components/BannerCard';

type Props = {};

function HomePage({}: Props) {
  const navigate = useNavigate();
  const [story, setStory] = useState<any[]>([]);
  const [blog, setBlog] = useState<any[]>([]);
  const [banner, setBanner] = useState<any[]>([]);

  const getAllStories = async () => {
    const { data } = await api.get('/story');
    setStory(data.data);
    console.log('first', data.data);
  };

  const getAllBlogs = async () => {
    const { data } = await api.get('/blog');
    setBlog(data.data);
    console.log('first', data.data);
  };

  const getAllBanners = async () => {
    const { data } = await api.get('/banner');
    setBanner(data.data);
    console.log('first', data.data);
  };

  useEffect(() => {
    getAllStories();
    getAllBlogs();
    getAllBanners();
  }, []);

  return (
    <div>
      <div className="p-6 flex gap-4">
        <button
          className="bg-primary1 text-white p-2 rounded-md"
          onClick={() => navigate('/create-story')}>
          <p>create STORY</p>
        </button>
        <button
          className="bg-primary1 text-white p-2 rounded-md"
          onClick={() => navigate('/create-blog')}>
          <p>create BLOG</p>
        </button>
        <button
          className="bg-primary1 text-white p-2 rounded-md"
          onClick={() => navigate('/create-banner')}>
          <p>create BANNER</p>
        </button>
      </div>
      <div>
        <h2>ALL STORIES</h2>
        <div className="flex flex-wrap gap-4">
          {story.map((item: any, index: number) => (
            <StoryCard data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2>ALL ‌blogs</h2>
        <div className="flex flex-wrap gap-4">
          {blog.map((item: any, index: number) => (
            <BlogCard data={item} key={index} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2>ALL Banner</h2>
        <div className="flex flex-wrap gap-4">
          {banner.map((item: any, index: number) => (
            <BannerCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
