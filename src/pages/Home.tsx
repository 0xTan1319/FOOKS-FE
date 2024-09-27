import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Image from '../components/User/Image';
import SubPanel from '../components/User/SubPanel';
import PanelHeader from '../components/User/PanelHeader';
import PanelContent from '../components/User/PanelContent';

// Type definition for FormData
interface FormDataType {
  authorName: string;
  avatar: string;
  panelImg: string;
  panelTitle: string;
  panelContent: string;
  date: string;
  newsTitle: string;
}

const Home: React.FC = () => {
  // State for managing panel content and fetched data
  const [panelContent, setPanelContent] = useState<string>(''); // Default to an empty string
  const [items, setItems] = useState<FormDataType[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/news/getNews');
      const panelData: FormDataType[] = response.data;
      setItems(panelData); // Set the fetched data into the state
      if (panelData.length > 0) {
        setPanelContent(panelData[0].panelContent || ''); // Use an empty string if content is undefined
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (

    <div className="container mx-auto">
      {console.log("first")}
      <div className='md:flex md:flex-row-reverse justify-between gap-20 space-y-4'>
        <NavBar />
        <div className="main scrollable-content left-scroll w-full lg:w-2/3">

          <div className='main-panel flex flex-col justify-start'>
            <div className="panel-title">
              <p className='panel-title text-[30px] font-bold text-blue-700'>
                {items.length > 0 ? items[0].newsTitle : 'Loading...'}
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
              <div className="flex flex-col">
                {items.length > 0 && (
                  <PanelHeader
                    srcImg={items[0]?.avatar}
                    author={items[0]?.authorName}
                    publishDate='01/03/2024'
                  />
                )}
                <PanelContent
                  pContent={panelContent || 'No content available.'} // Fallback to a message if undefined
                />
              </div>
              <div className="panel-img mt-5">
                {items[1] && (
                  <Image
                    srcUrl={items[1]?.panelImg} // Can also use dynamic data if available
                    alt='panel'
                    classname=''
                  />
                )}
              </div>
            </div>
            <div className="panel-description mt-5">
              <p>{panelContent}</p>
            </div>
          </div>

          <div className="sub-panel mt-5">
            <p className='text-blue-700 text-3xl'>More from Buggy</p>
            <div className="panels flex flex-col md:flex-row gap-5">
              {items[1] && (
                <SubPanel
                  imgUrl={items[1]?.panelImg}
                  alt={items[1]?.panelTitle}
                  panelTitle={items[1]?.newsTitle}
                  panelContent={items[1]?.panelContent}
                  date='01/03/2024'
                />
              )}
              {items[2] && (
                <SubPanel
                  imgUrl={items[2]?.panelImg}
                  alt={items[2]?.panelTitle}
                  panelTitle={items[2]?.newsTitle}
                  panelContent={items[2]?.panelContent}
                  date='01/03/2024'
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
