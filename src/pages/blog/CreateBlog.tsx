import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/apiConfig';
import Input from '../../uikit/Input';
import Icon from '../../uikit/Icon';

type Props = {};

function CreateBlog({}: Props) {
  const navigate = useNavigate();
  const [file, setFile] = useState<any>(null);
  const [input, setInput] = useState<any>({});

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const date = new Date();
    const formData = new FormData();
    const storyDate = date
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    formData.append('file', file);
    formData.append('title', input.title);
    formData.append('text', input.text);
    formData.append('date', storyDate);
    await api.post('/blog/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    navigate(-1);
  };

  return (
    <div>
      CreateBlog
      <form onSubmit={onSubmit}>
        <Input
          placeholder="title"
          value={input.title}
          onChange={(e: any) =>
            setInput({ ...input, title: e.target.value })
          }
        />
        <label
          htmlFor="uploadImage"
          className="flex items-center gap-3 bg-bg p-4 rounded-xl cursor-pointer mt-2">
          <span>upload thumbnail</span>
          <Icon name="upload" />
        </label>
        <input
          id="uploadImage"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <textarea
          placeholder="text"
          value={input.text}
          onChange={(e: any) =>
            setInput({ ...input, text: e.target.value })
          }
          className="bg-bg py-3 px-5 rounded-lg mt-2 w-full min-h-[400px]
        focus:border-solid focus:border-b-1 focus:border-x-0 
        focus:border-t-0 focus:border-secondary caret-secondary"
        />
        {/* <Input
      placeholder="description"
      value={input.description}
      onChange={(e: any) =>
        setInput({ ...input, description: e.target.value })
      }
    /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBlog;
