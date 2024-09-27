import React, { useEffect, useState } from 'react';
import { Header, Panel } from '../components/Admin';
import Button from '../components/Button';
import AddModal from '../components/Modal/AddModal';
import EditModal from '../components/Modal/EditModal';
import axios from 'axios';

interface FormDataType {
  _id: number;
  id: number;
  authorImg: string;
  authorName: string;
  newsTitle: string;
  panelImg: string;
  panelContent: string;
}



function Admin() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const [items, setItems] = useState<FormDataType[]>([]);
  const [itemToEdit, setItemToEdit] = useState<FormDataType | null>(null);

  // Handle adding a new item
  const handleAddItem = async (newItem: FormDataType) => {
    try {
      await axios.post('http://localhost:4000/api/news/create', { ...newItem });
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Handle saving edited item
  const handleSave = async (newData: FormDataType) => {
    try {
      const response = await axios.post('http://localhost:4000/api/news/editNews', { ...newData });
    
      fetchData();
      setIsEditModalOpen(false);
      setItemToEdit(null);
    } catch (error) {
      console.error("Error editing item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/news/getNews');
      const newsData = response.data;
      console.log(newsData);
      if (Array.isArray(newsData)) {
        setItems(newsData);
      } else {
        console.error("Fetched data is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle deleting an item
  const handleDelete = async (id : number) => {
    try {
      console.log("del--------id-------->", id);
      await axios.delete(`http://localhost:4000/api/news/delNews/${id}`);
      console.log('sec');
      fetchData();
      // setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="container flex flex-col rounded-lg relative">
      <div className="absolute right-0">
        <Button
          label="Add New +"
          onClick={() => setIsAddModalOpen(true)}
          disabled={false}
          className="rounded-full bg-white text-gray-400 invisible lg:visible"
        />
        <AddModal
          isAddOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddItem}
        />
      </div>
      <div className="News my-10">
        {Array.isArray(items) && items.map(item => (
          <div key={item.id} className='mb-20'>
            <Header srcUrl={item.authorImg} alt={item.authorName} author={item.authorName} newsTitle={item.newsTitle} />
            <Panel srcUrl={item.panelImg} Text={item.panelContent} />
            <div className="flex justify-center items-center mt-10 gap-5">
              <Button
                label="Edit"
                onClick={() => {
                  setIsEditModalOpen(true);
                  setItemToEdit(item);
                }}
                disabled={false}
                className="rounded-xl bg-blue-700 text-white text-lg px-20 w-20"
              />
              <Button
                label="Delete"
                onClick={() => handleDelete(item._id)}
                disabled={false}
                className="rounded-xl bg-red-600 text-white text-lg px-20 w-20"
              />
            </div>
            <EditModal
              isEditOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
              onSave={handleSave}
              existingData={itemToEdit || {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
