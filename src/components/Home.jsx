import { Leaf, User, LogOut, Image } from 'lucide-react';
import { useNavigate } from 'react-router';
import Card from './Card';

const Home = ({ setUser, user, blogs = [] }) => {
  const navigate = useNavigate();

  const generatedBlogs = blogs.length
    ? Array.from({ length: 300 }, (_, i) => ({
        ...blogs[i % blogs.length],
        id: i + 1,
        // eslint-disable-next-line react-hooks/purity
        likes: Math.floor(Math.random() * 300),
        // eslint-disable-next-line react-hooks/purity
        replies: Math.floor(Math.random() * 50),
      }))
    : [];

  function handleLogout() {
    // localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  }

  return (
    <>
      <div className="px-10 mb-20">
        <div className="flex items-center bg-[#faf7f7] gap-2 py-3 mt-10">
          <div className="bg-[#35ba32] rounded-full p-3 mx-10">
            <Leaf className="text-white" />
          </div>
          <div className="text-2xl font-bold">Nature blog</div>
          <div className="flex items-center ml-auto gap-10 mr-10">
            <button
              onClick={() => navigate('/gallery')}
              className="flex gap-1 cursor-pointer hover:bg-gray-200"
            >
              <Image />
              gallery
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="flex gap-1 cursor-pointer hover:bg-gray-200"
            >
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

        <div className="flex flex-col gap-2 my-20">
          <h1 className="text-3xl font-bold">Welcome back, {user}!</h1>
          <p className="text-lg font-light">Explore the newest posts below</p>
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
        <div className="flex flex-col mt-20 gap-7 items-center">
          <h3 className="text-3xl font-bold">Photo of the week</h3>
          <img src="POTW3.jpg" className="w-160 h-90 object-cover" />
        </div>
        <div className="flex flex-col mt-20 gap-7 items-center">
          <h3 className="text-3xl font-bold">Video of the week</h3>
          <video src="/naturevideo.mp4" preload="metadata" controls></video>
        </div>
        <div className="flex flex-col gap-7 mt-20">
          <h3 className="text-3xl font-bold">Browse more exciting posts!</h3>

          {!blogs ? (
            <div className="flex items-center justify-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {generatedBlogs.map((blog) => (
                <Card key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
