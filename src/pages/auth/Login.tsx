import { useState } from 'react';
import Input from '../../uikit/Input';
import api from '../../api/apiConfig';

type Props = {};

function Login({}: Props) {
  const [input, setInput] = useState({
    phoneNumber: '',
    password: ''
  });

  const login = async () => {
    await api.post('auth/login', input);
  };

  return (
    <div>
      <Input
        title="number"
        value={input.phoneNumber}
        onChange={(e:any) =>
          setInput({ ...input, phoneNumber: e.target.value })
        }
      />
      <Input
        title="password"
        value={input.password}
        onChange={(e:any) =>
          setInput({ ...input, password: e.target.value })
        }
      />
      <button onClick={login}>login</button>
    </div>
  );
}

export default Login;
