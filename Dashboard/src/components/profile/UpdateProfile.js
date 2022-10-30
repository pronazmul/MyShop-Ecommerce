import React from 'react'
import { useSelector } from 'react-redux'

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className='card'>
      <div className='flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5'>
        <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100'>
          Account Setting
        </h2>
        <div className='flex justify-center space-x-2'>
          <button className='btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90'>
            Cancel
          </button>
          <button className='btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
            Save
          </button>
        </div>
      </div>
      <div className='p-4 sm:p-5'>
        <div className='flex flex-col'>
          <span className='text-base font-medium text-slate-600 dark:text-navy-100'>
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
        <div className='my-7 h-px bg-slate-200 dark:bg-navy-500'></div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <label className='block'>
            <span>Display name </span>
            <span className='relative mt-1.5 flex'>
              <input
                className='form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                placeholder='Enter name'
                type='text'
              />
              <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <i className='fa-regular fa-user text-base'></i>
              </span>
            </span>
          </label>
          <label className='block'>
            <span>Full Name </span>
            <span className='relative mt-1.5 flex'>
              <input
                className='form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                placeholder='Enter full name'
                type='text'
              />
              <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <i className='fa-regular fa-user text-base'></i>
              </span>
            </span>
          </label>
          <label className='block'>
            <span>Email Address </span>
            <span className='relative mt-1.5 flex'>
              <input
                className='form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                placeholder='Enter email address'
                type='text'
              />
              <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <i className='fa-regular fa-envelope text-base'></i>
              </span>
            </span>
          </label>
          <label className='block'>
            <span>Phone Number</span>
            <span className='relative mt-1.5 flex'>
              <input
                className='form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                placeholder='Enter phone number'
                type='text'
              />
              <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <i className='fa fa-phone'></i>
              </span>
            </span>
          </label>
        </div>
        <div className='my-7 h-px bg-slate-200 dark:bg-navy-500'></div>

        {/* Linked Devices */}
        <div>
          <h3 className='text-base font-medium text-slate-600 dark:text-navy-100'>
            Linked Devices
          </h3>
          <div className='pt-4'>
            <div className='is-scrollbar-hidden min-w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-navy-500'>
              <table className='w-full text-left'>
                <thead>
                  <tr>
                    <th className='whitespace-nowrap border border-t-0 border-l-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5'>
                      Serial
                    </th>
                    <th className='whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5'>
                      Name
                    </th>
                    <th className='whitespace-nowrap border border-t-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5'>
                      Job
                    </th>
                    <th className='whitespace-nowrap border border-t-0 border-r-0 border-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:border-navy-500 dark:text-navy-100 lg:px-5'>
                      Favorite Color
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      1
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Cy Ganderton
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Quality Control Specialist
                    </td>
                    <td className='whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Blue
                    </td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      2
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Hart Hagerty
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Desktop Support Technician
                    </td>
                    <td className='whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Purple
                    </td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap border border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      3
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Brice Swyre
                    </td>
                    <td className='whitespace-nowrap border border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Tax Accountant
                    </td>
                    <td className='whitespace-nowrap border border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Red
                    </td>
                  </tr>
                  <tr>
                    <td className='whitespace-nowrap border border-b-0 border-l-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      4
                    </td>
                    <td className='whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Marjy Ferencz
                    </td>
                    <td className='whitespace-nowrap border border-b-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Office Assistant I
                    </td>
                    <td className='whitespace-nowrap border border-b-0 border-r-0 border-slate-200 px-3 py-3 dark:border-navy-500 lg:px-5'>
                      Crimson
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
