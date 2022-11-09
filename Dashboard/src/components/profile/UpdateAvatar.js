import React from 'react';
import { useSelector } from 'react-redux';

const UpdateAvatar = () => {
    const { user } = useSelector((state) => state.auth)
    const [profileImage, setProfileImage] = React.useState(null)

    return (
        <div className='flex flex-col'>
          <span className='text-base font-medium text-slate-600 dark:text-nsavy-100'>
            Avatar
          </span>
          <div className='avatar mt-1.5 h-20 w-20'>
            <img className='mask is-squircle' src={user?.avatar} alt='avatar' />
            <div className='absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700'>
              <button className='btn h-6 w-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3.5 w-3.5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
    );
};

export default UpdateAvatar;