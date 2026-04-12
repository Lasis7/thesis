import ProfileCard from './ProfileCard';

const StatCard = ({ picture, headText, text }) => {
  return (
    <>
      <ProfileCard>
        <div className="flex gap-5">
          <div className="bg-green-300 rounded-md p-3">{picture}</div>
          <div className="flex flex-col">
            <p className="text-lg font-bold">{headText}</p>
            <p className="text-md font-normal">{text}</p>
          </div>
        </div>
      </ProfileCard>
    </>
  );
};

export default StatCard;
