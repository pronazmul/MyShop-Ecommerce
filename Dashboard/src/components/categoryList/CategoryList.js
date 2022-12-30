import React from 'react'
import CategoryListHeader from './CategoryListHeader'
import CategoryListTable from './CategoryListTable'
import CategoryListTableFooter from './CategoryListTableFooter'

const ProductList = () => {
  return (
    <div className='mt-5 card p-4 space-y-4'>
      <CategoryListHeader />
      <CategoryListTable />
      <CategoryListTableFooter />
    </div>
  )
}

export default ProductList
