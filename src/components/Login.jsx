import { useState } from 'react';
import { Leaf } from 'lucide-react';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setUser(username);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        <div className="bg-[#35ba32] rounded-full p-5">
          <Leaf className="text-white" />
        </div>
        <h1 className="text-2xl font-bold">Nature blog</h1>
        <p className="text-lg font-light">Nature is only a click away</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white w-[17rem] md:w-[25rem] my-10 border-[#58525A] border-1 rounded-2xl p-5">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label>username</label>
              <input
                className="p-1 border-1 rounded-lg"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label>password</label>
              <input
                className="p-1 border-1 rounded-lg"
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="border-1 px-3 py-1 rounded-lg cursor-pointer mt-5"
                type="submit"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
