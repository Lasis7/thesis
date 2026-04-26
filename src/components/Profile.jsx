import {
  Leaf,
  MoveLeft,
  User,
  Mail,
  BookOpen,
  Heart,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { useNavigate } from 'react-router';
import StatCard from './StatCard';
import ProfileCard from './ProfileCard';
import TopicPill from './TopicPill';
import { topics } from '../util/topics';
import ActivityCard from './ActivityCard';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-10 mb-20">
        <div className="flex items-center bg-[#faf7f7] py-3 gap-5 mt-10">
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
        <div className="flex flex-col gap-8 px-48 mt-10">
          <ProfileCard>
            <div className="flex gap-10 mx-10">
              <div className="border-1 rounded-full bg-green-100">
                <User className="rounded-full h-28 w-28" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">{user}</p>
                <p className="flex gap-2 text-xl font-normal">
                  <Mail />
                  abc@gmail.com
                </p>
                <p>
                  I love nature and aim to photograph every single country in
                  the World!
                </p>
              </div>
            </div>
          </ProfileCard>
          <div className="grid grid-cols-3 gap-5">
            <StatCard
              picture={<BookOpen className="text-green-700" />}
              headText={'100'}
              text={'Posts read'}
            />
            <StatCard
              picture={<Heart className="text-green-700" />}
              headText={'256'}
              text={'Likes gives'}
            />
            <StatCard
              picture={<MessageCircle className="text-green-700" />}
              headText={'45'}
              text={'Replies sent'}
            />
          </div>
          <ProfileCard>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Member since</h2>
              <p className="text-xl font-semibold">Jan 2025</p>
            </div>
          </ProfileCard>
          <ProfileCard>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Interests</h3>
              <p className="text-md font-normal">Your favorite blog topics</p>
              <div className="flex gap-2">
                {topics.map((topic) => (
                  <TopicPill key={topic.id} text={topic.topic} />
                ))}
              </div>
            </div>
          </ProfileCard>
          <ProfileCard>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold">Recent activity</h3>
              <p className="text-md font-normal">Your latest activity</p>
              <ActivityCard
                picture={
                  <div className="rounded-full p-3 bg-red-200">
                    <Heart className="text-red-700" />
                  </div>
                }
                type={'Liked "Clear Water Standstill"'}
                date={'2 hours ago'}
              />
              <ActivityCard
                picture={
                  <div className="rounded-full p-3 bg-blue-200">
                    <BookOpen className="text-blue-700" />
                  </div>
                }
                type={'Read "Golden Sunset Beach"'}
                date={'5 hours ago'}
              />
              <ActivityCard
                picture={
                  <div className="rounded-full p-3 bg-green-200">
                    <MessageCircle className="text-green-700" />
                  </div>
                }
                type={'Replied to "Rocky Canyon Pass"'}
                date={'6 hours ago'}
              />
            </div>
          </ProfileCard>
        </div>
      </div>
    </>
  );
};

export default Profile;
