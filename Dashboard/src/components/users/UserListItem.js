import React from 'react'

const UserListItem = ({ user }) => {
  return (
    <div class='card'>
      <div class='p-2 text-right'>
        <button class='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </button>
      </div>
      <div class='flex grow flex-col items-center px-4 pb-5 sm:px-5'>
        <div class='avatar h-20 w-20'>
          <img class='rounded-full' src={user.avatar} alt='avatar' />
        </div>
        <h3 class='pt-3 textLg font-medium text-slate-700 dark:text-navy-100'>
          {user?.name}
        </h3>
        <p class='text-xs+'>
          {`${user?.address[0]?.city}, ${user?.address[0]?.country}`}
        </p>
        <div class='inline-space mt-3 flex grow flex-wrap items-start'>
          {user.roles.map((role, index) => (
            <p
              key={index}
              class='tag rounded-full bg-success/10 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25'
            >
              {role}
            </p>
          ))}
        </div>
        <div class='mt-6 grid w-full grid-cols-2 gap-2'>
          <button class='btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-4 w-4 shrink-0'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeWidth='2'
                d='M5 19.111c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848C19 20.154 18.181 21 17.172 21H6.828C5.818 21 5 20.154 5 19.111zM16.083 6.938c0 2.174-1.828 3.937-4.083 3.937S7.917 9.112 7.917 6.937C7.917 4.764 9.745 3 12 3s4.083 1.763 4.083 3.938z'
              />
            </svg>
            <span>Profile</span>
          </button>
          <button class='btn space-x-2 bg-primary px-0 font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-4 w-4 shrink-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34'></path>
              <polygon points='18 2 22 6 12 16 8 16 8 12 18 2'></polygon>
            </svg>

            <span> Edit </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserListItem
