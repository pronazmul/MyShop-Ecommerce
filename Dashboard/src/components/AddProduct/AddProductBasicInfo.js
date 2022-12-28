import React from 'react'
import InputText from '../inputs/InputText'

const AddProductBasicInfo = ({ formik }) => {
  const { handleChange, values, errors } = formik
  return (
    <div className='card p-5'>
      <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100 border-b border-slate-600'>
        Basic Information
      </h2>
      <div className='grid grid-cols-1 gap-4 mt-5'>
        <InputText
          value={values.name}
          error={errors.name}
          label='Product Name'
          name='name'
          placeholder='Enter Product Name'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.code}
          error={errors.code}
          label='Code'
          name='code'
          placeholder='Enter Code'
          onChange={handleChange}
          required
        />
        <InputText
          value={values.description}
          error={errors.description}
          label='Description'
          name='description'
          placeholder='Enter product description'
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default AddProductBasicInfo
