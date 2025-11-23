import { useState } from 'react';
import Input from '../../uikit/Input';
import Icon from '../../uikit/Icon';
import api from '../../api/apiConfig';
import { useNavigate } from 'react-router-dom';

type Props = {};

function CreateBanner({}: Props) {
  const navigate = useNavigate();
  const [file, setFile] = useState<any>(null);
  const [input, setInput] = useState<any>({});

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', file);
    formData.append('text', input.text);
    formData.append('search', input.search);
    await api.post('/banner/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    navigate(-1);
  };

  return (
    <div>
      CreateBanner
      <form onSubmit={onSubmit}>
        <Input
          placeholder="text"
          value={input.text}
          onChange={(e: any) =>
            setInput({ ...input, text: e.target.value })
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
          placeholder="search"
          value={input.search}
          onChange={(e: any) =>
            setInput({ ...input, search: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBanner;
