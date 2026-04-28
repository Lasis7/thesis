import { useState, lazy, Suspense } from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate } from 'react-router';

const Button = lazy(() => import('./shared/Button'));

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    if (username.length < 1 || password.length < 1) {
      alert('username or password is too short');
      return;
    }
    event.preventDefault();
    setUser(username);
    localStorage.setItem('user', username);
    setUsername('');
    setPassword('');
    navigate('/home');
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
              <Suspense
                fallback={<div className="text-2xl font-bold">Loading...</div>}
              >
                <Button
                  className="border-1 px-3 py-1 rounded-lg cursor-pointer mt-5"
                  buttonType="submit"
                  text="login"
                />
              </Suspense>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
