import { useState } from 'react';
import Input from '../../uikit/Input';
import Icon from '../../uikit/Icon';
import api from '../../api/apiConfig';
import { useNavigate } from 'react-router-dom';

type Props = {};

function CreateStory({}: Props) {
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
    const storyDate = date.toISOString().slice(0, 19).replace('T', ' ');;
    formData.append('file', file);
    formData.append('title', input.title);
    formData.append('description', input.description);
    formData.append('date', storyDate);
    await api.post('/story/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    navigate(-1);
  };

  return (
    <div>
      CreateStory
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
        <Input
          placeholder="description"
          value={input.description}
          onChange={(e: any) =>
            setInput({ ...input, description: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateStory;
