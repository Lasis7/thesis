const Card = ({ blog }) => {
  return (
    <>
      <div className="flex flex-col border border-1 rounded-md bg-white">
        <img
          src={blog.image}
          alt={blog.imageAlt}
          className="rounded-t-md w-full h-48 object-cover"
        />
        <p className="text-xl font-bold">{blog.title}</p>
      </div>
    </>
  );
};

export default Card;
