import React, { useState, useEffect } from 'react';

interface EditModalProps {
  isEditOpen: boolean;
  onClose: () => void;
  onSave: (data: FormDataType) => void;
  existingData: FormDataType | {} ;
}

interface FormDataType {
  _id: number;
  id: number;
  authorImg: string;
  authorName: string;
  newsTitle: string;
  panelImg: string;
  panelContent: string;
}

const EditModal: React.FC<EditModalProps> = ({ isEditOpen, onClose, onSave, existingData }) => {
  const [formData, setFormData] = useState<FormDataType>({
    _id: 0,
    id: 0,
    authorImg: '',
    authorName: '',
    newsTitle: '',
    panelImg: '',
    panelContent: ''
  });

  useEffect(() => {
    if (existingData && '_id' in existingData) {
      setFormData(existingData as FormDataType);
    }
  }, [existingData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isEditOpen || !existingData) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit News</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Author Image URL
          </label>
          <input
            type="text"
            name="authorImg"
            value={formData.authorImg}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Author Name
          </label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            News Title
          </label>
          <input
            type="text"
            name="newsTitle"
            value={formData.newsTitle}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Panel Image URL
          </label>
          <input
            type="text"
            name="panelImg"
            value={formData.panelImg}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Panel Content
          </label>
          <textarea
            name="panelContent"
            value={formData.panelContent}
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
