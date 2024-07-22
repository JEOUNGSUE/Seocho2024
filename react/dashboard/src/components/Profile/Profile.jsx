import Chartgraph from './Chartgraph';
import Shortcuts from './Shortcuts';
import User from './User';

const Profile = () => {
  return (
    <div className="px-2 py-4 mt-2 bg-gray-200 rounded-lg w-full dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col justify-between gap-4">
      <User />
      <Shortcuts />
      <Chartgraph />
    </div>
  );
};

export default Profile;
