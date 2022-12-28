import React from 'react'
import DrugAndDropUpload from '../ui/DrugAndDropUpload'

const AddProductImage = ({ formik }) => {
  const { values, setFieldValue } = formik
  return (
    <div className='card p-5'>
      <h2 className='text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100 border-b border-slate-600'>
        Product Images
      </h2>
      <div className='mt-5'>
        <DrugAndDropUpload
          fileName='images'
          files={values.images}
          setFiles={setFieldValue}
        />
      </div>
    </div>
  )
}

export default AddProductImage
