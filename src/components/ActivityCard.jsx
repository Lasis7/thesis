const ActivityCard = ({ picture, type, date }) => {
  return (
    <>
      <div className="flex bg-gray-200 gap-3 p-3 rounded-md">
        {picture}
        <div className="flex flex-col gap-1">
          <p className="text-md font-semibold">{type}</p>
          <p className="text-sm font-normal">{date}</p>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
