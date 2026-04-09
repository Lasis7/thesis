import { Leaf, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from './Card';

const Home = ({ setUser, user, blogs }) => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  }

  return (
    <>
      <div className="flex items-center bg-[#faf7f7] py-3 gap-2">
        <div className="bg-[#35ba32] rounded-full p-3 mx-10">
          <Leaf className="text-white" />
        </div>
        <p className="text-lg font-bold">Nature blog</p>
        <div className="flex items-center ml-auto gap-10  mr-10">
          <button className="flex gap-1 cursor-pointer hover:bg-gray-200">
            <User />
            profile
          </button>
          <button
            className="flex gap-1 cursor-pointer hover:bg-gray-200"
            onClick={handleLogout}
          >
            <LogOut />
            logout
          </button>
        </div>
      </div>
      <div className="px-10">
        <div className="flex flex-col gap-2 mt-20">
          <h1 className="text-3xl font-bold">Welcome back, {user}!</h1>
          <p className="text-lg font-light">Explore the posts below</p>
        </div>
        {!blogs ? (
          <div className="flex items-center justify-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {blogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
