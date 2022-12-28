import { Dropzone, FileItem } from '@dropzone-ui/react'
import React from 'react'
import { productImageConfig } from '../../utils/data'

const DrugAndDropUpload = ({ fileName, files, setFiles }) => {
  return (
    <Dropzone
      style={{ background: 'transparent' }}
      minHeight='200px'
      maxFiles={productImageConfig.maxFiles}
      maxFileSize={productImageConfig.maxFileSize}
      value={files}
      header={files && files.length ? true : false}
      label={productImageConfig.title}
      view='list'
      accept={productImageConfig.accept}
      onDrop={(acceptedFiles) => {
        if (acceptedFiles.length === 0) return
        if (files.length === productImageConfig.maxFiles) return
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

export default DrugAndDropUpload
