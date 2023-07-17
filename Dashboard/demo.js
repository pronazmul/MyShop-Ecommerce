

import React from 'react'
import { Dropzone, FileItem } from 'dropzone-ui'

const CustomDropzoneUI = ({ fileName, files, setFiles }) => {
  return (
    <Dropzone
      style={{ maxHeight: '20vh' }}
      maxFiles={5}
      maxFileSize={1024000}
      value={files}
      header={files && files.length ? true : false}
      label='Drop files here or Click to browse'
      view='list'
      accept='image/png, image/jpg, image/jpeg'
      onDrop={(acceptedFiles) => {
        if (acceptedFiles.length === 0) return
        if (files.length === 5) return
        const filteredFiles = acceptedFiles.filter((item) => item.valid)
        setFiles(fileName, [...files, ...filteredFiles])
      }}
    >
      {files.map((file, index) => (
        <span key={index}>
          <FileItem
            {...file}
            onDelete={(id) =>
              setFiles(
                fileName,
                files.filter((x) => x.id !== id)
              )
            }
            preview
            info
          />
        </span>
      ))}
    </Dropzone>
  )
}

export default CustomDropzoneUI







{
    user: id,
    supplier: id,
    category: id,
    tags: [String],
    reviewsCount: { type: Number, default: 0 },
    rating: {
      type: Number,
      default: 0,
    },
    name: { type: String, required: true },
    description: String,
    brand: String,
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    taxRate: { type: Number, default: 0 },
    countInStock: { type: Number, required: true },
    images: [String],
  }