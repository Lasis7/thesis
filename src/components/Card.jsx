import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const Card = ({ blog }) => {
  const [likes, setLikes] = useState(blog.likes);
  const [liked, setLiked] = useState(false);

  function handleLikeChange() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <>
      <div className="flex flex-col border border-1 rounded-md bg-white pb-4">
        <img
          src={blog.image}
          alt={blog.imageAlt}
          className="rounded-t-md w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="flex flex-col gap-2 ml-2 mt-5">
          <p className="text-lg font-semibold">{blog.title}</p>
          <p className="text-lg font-normal">{blog.description}</p>
          <div className="flex gap-2">
            <img
              src={blog.authorAvatar}
              alt={blog.authorAlt}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold">{blog.author}</p>
              <p className="text-lg font-normal">{blog.date}</p>
            </div>
          </div>
        </div>
        <hr className="mx-2 text-gray-300 my-5" />
        <div className="flex flex-row items-start gap-4 ml-2">
          <button
            className="flex flex-row cursor-pointer hover:text-red-500"
            onClick={handleLikeChange}
          >
            {liked ? (
              <Heart className="cursor-pointer transition-color text-red-500 fill-red-500 hover:text-red-500" />
            ) : (
              <Heart className="cursor-pointer text-gray-500 hover:text-red-500" />
            )}
            {likes}
          </button>
          <p className="flex flex-row">
            <MessageCircle />
            {blog.replies}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
