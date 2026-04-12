const ProfileCard = ({ children }) => {
  return (
    <>
      <div className="border-1 border-green-500 p-3 bg-white rounded-md">
        {children}
      </div>
    </>
  );
};

export default ProfileCard;
