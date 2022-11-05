import { Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { updateUserSchema } from '../../schema/userSchema'
import { SvgMailIcon } from '../../utils/svgIcons'
import InputText from './../inputs/InputText'

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.auth)

  function updateHandler(values, { resetForm }) {
    // delete values?.remember
    // login(values)
    // resetForm()
    alert(JSON.stringify(values))
  }

  return (
    <div className='card'>
      {/* Update Header */}
      <div className='flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5'>
        <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100'>
          Account Setting
        </h2>
      </div>
      {/* Update Body */}
      <div className='p-4 sm:p-5'>
        {/* Update Avatar */}
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
        {/* Update Info */}
        <Formik
          initialValues={{
            name: user.name ?? '',
            mobile: user.mobile ?? '',
            email: user.email ?? '',
          }}
          validationSchema={updateUserSchema}
          onSubmit={updateHandler}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <InputText
                  value={values.name}
                  error={errors.name}
                  icon={<i className='fa-regular fa-user text-base'></i>}
                  label='Name'
                  name='name'
                  placeholder='Enter Email'
                  onChange={handleChange}
                  required
                />
                <InputText
                  value={values.mobile}
                  error={errors.mobile}
                  icon={<i className='fas fa-mobile-alt text-base'></i>}
                  label='Mobile'
                  name='mobile'
                  placeholder='Enter Mobile Number'
                  onChange={handleChange}
                  required
                />
                <InputText
                  value={values.email}
                  error={errors.email}
                  icon={SvgMailIcon}
                  label='Email'
                  name='email'
                  placeholder='Enter Email'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='my-7 h-px bg-slate-200 dark:bg-navy-500 col-sapn-2'></div>
              <button
                type='submit'
                className='btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
              >
                Update
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default UpdateProfile
