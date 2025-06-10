import type { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProfileDropdownProps {
  onLogout: () => void;
}

const ProfileDropdown: FunctionComponent<ProfileDropdownProps> = ({
  onLogout,
}) => {
  const navigate = useNavigate();

  return (
    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
      <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
        <p
          className='hover:text-black cursor-pointer'
          onClick={() => navigate('/my-profile')}
        >
          My Profile
        </p>
        <p
          className='hover:text-black cursor-pointer'
          onClick={() => navigate('/my-appointments')}
        >
          My Appointments
        </p>
        <p className='hover:text-black cursor-pointer' onClick={onLogout}>
          Logout
        </p>
      </div>
    </div>
  );
};

export default ProfileDropdown;
