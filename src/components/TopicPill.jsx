const TopicPill = ({ text }) => {
  return (
    <>
      <div className="py-1 px-2 bg-green-200 rounded-xl">
        <p className="text-sm text-green-800">{text}</p>
      </div>
    </>
  );
};

export default TopicPill;
