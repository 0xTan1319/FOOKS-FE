import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { Circles } from 'react-loading-icons'

interface AddModalProps {
  isAddOpen: boolean
  onClose: () => void
  onSubmit: (item: {
    _id: number
    id: number
    authorImg: string
    authorName: string
    newsTitle: string
    panelImg: string
    panelContent: string
  }) => void
}

const AddModal: React.FC<AddModalProps> = ({
  isAddOpen,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    id: 0,
    authorName: '',
    newsTitle: '',
    panelContent: ''
  })

  const [authorImageFile, setAuthorImageFile] = useState<File | null>(null)
  const [panelImageFile, setPanelImageFile] = useState<File | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  const pinata_api_key = `da10feb25a53a03d1dd7`
  const pinata_secret_api_key = `5519815176e7990660711f25228ab574d5d6aad125ed6ae7ff8d8296baa5de43`

  const sendFileToIPFS = async (file: File) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`
    const data = new FormData()
    data.append('file', file)

    const res = await axios.post(url, data, {
      maxContentLength: Infinity,
      headers: {
        'Content-Type': `multipart/form-data`,
        pinata_api_key: pinata_api_key,
        pinata_secret_api_key: pinata_secret_api_key
      }
    })
    console.log(`res.data.IpfsHash : ${res.data.IpfsHash}`)
    let returnUrl =
      'https://pink-tiny-manatee-55.mypinata.cloud/ipfs/' + res.data.IpfsHash
    return returnUrl
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true)

    // Simulate an asynchronous operation (e.g., API call)
    setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    event.preventDefault()
    let authorImgHash = ''
    let panelImgHash = ''

    if (authorImageFile) {
      const hash = await sendFileToIPFS(authorImageFile)
      if (hash) {
        authorImgHash = hash
      }
    }

    if (panelImageFile) {
      const hash = await sendFileToIPFS(panelImageFile)
      if (hash) {
        panelImgHash = hash
      }
    }

    onSubmit({
      _id: 0, // Adding the _id field
      id: formData.id,
      authorImg: authorImgHash,
      authorName: formData.authorName,
      newsTitle: formData.newsTitle,
      panelImg: panelImgHash,
      panelContent: formData.panelContent
    })

    // Reset form data and file inputs after submission
    setFormData({
      id: 0,
      authorName: '',
      newsTitle: '',
      panelContent: ''
    })
    setAuthorImageFile(null)
    setPanelImageFile(null)

    onClose()
  }

  if (!isAddOpen) {
    return null
  }
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      {isLoading && <Circles />}
      <div className="relative bg-white rounded-lg shadow-lg w-96 p-6">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Title</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Author Avatar:</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={(e) => handleFileChange(e, setAuthorImageFile)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Panel IMG:</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              onChange={(e) => handleFileChange(e, setPanelImageFile)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              placeholder="Author Name"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="newsTitle"
              value={formData.newsTitle}
              onChange={handleInputChange}
              placeholder="News Title"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="panelContent"
              value={formData.panelContent}
              onChange={handleInputChange}
              placeholder="Panel Content"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'POST'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddModal
