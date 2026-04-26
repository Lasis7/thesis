import { Leaf, MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-10 mb-20">
        <div className="flex items-center bg-[#faf7f7] gap-4 py-3 mt-10">
          <button
            className="flex gap-1 ml-10 cursor-pointer hover:bg-gray-200"
            onClick={() => navigate('/home')}
          >
            <MoveLeft />
            back
          </button>
          <div className="bg-[#35ba32] rounded-full p-3">
            <Leaf className="text-white" />
          </div>
          <p className="text-2xl font-bold">Nature blog</p>
        </div>

        <div className="flex flex-col gap-2 my-20">
          <h1 className="text-3xl font-bold">
            Browse our broad collection of Photos!
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 100 }).map((_, i) => (
            <img
              key={i}
              src="/beachgallery.jpg"
              alt="beach"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </>
  );
}
