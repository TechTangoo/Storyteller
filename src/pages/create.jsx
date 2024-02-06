import React, { useState } from 'react';
import adventure from '../img/adventure.jpg';
import animalnature from '../img/animalnature.jpg';
import fantasy from '../img/fantasy.jpg';
import moralstory from '../img/moralstory.jpg';
import scifi from '../img/scifi.jpg';
import superheors from '../img/superheors.jpg';
import { Button } from '@mui/material';

function Create() {

  const images = [
    { name: 'Adventure', img: adventure },
    { name: 'Animal/Nature', img: animalnature },
    { name: 'Fairy/Fantasy', img: fantasy },
    { name: 'Moral/Folk', img: moralstory },
    { name: 'Science Friction', img: scifi },
    { name: 'Super Heros', img: superheors }];
  const [reqbody, setReqbody] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item.name);
  };

  const handleCreate = () => {

  }

  return (
    <div className='bg-purple-200 dark:bg-purple-900 w-screen h-full'>
      <h3 className='text-purple-800 dark:text-purple-100'>Create New Story</h3>
      <div style={{ marginLeft: 20, marginTop: '15%' }}>
        <div className='text-3xl md:text-2xl sm:text-xl font-bold dark:text-purple-200 text-purple-900 mb-2'>Choose your story category</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: 25 }}>
          {images.map((item, index) =>
            <div
              key={index}
              style={{ width: 250, height: 150 }}
              className={`relative w-500 h-500 cursor-pointer`}
              onClick={() => handleClick(item)}
            >
              <img
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform ${selectedItem === item.name ? 'scale-105 brightness-50' : 'scale-100 hover:scale-105'}`}
                alt={item.name}
              />
              <div className={`absolute bottom-0 left-0 text-white px-2 py-1 text-lg font-bold rounded-bl-lg`}>
                {item.name}
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 25, marginLeft: 20, }}>
        <div className='text-3xl md:text-2xl sm:text-xl font-bold text-purple-900 dark:text-purple-200 mb-2'>Title of Story</div>
        <div className='dark:bg-purple-800 bg-purple-50' style={{ alignItems: 'center', borderRadius: 25, padding: 3, width: '95%' }}>
          <input className='text-purple-800 dark:text-purple-100' placeholder='An Owl in Night' style={{ width: '100%' }} onChange={(e) => setReqbody({ ...reqbody, title: e.target.value })} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 25, marginLeft: 20, }}>
        <div className='text-3xl md:text-2xl sm:text-xl font-bold text-purple-900 dark:text-purple-200 mb-2'>Description of Story</div>
        <div className='dark:bg-purple-800 bg-purple-50' style={{ alignItems: 'center', borderRadius: 25, padding: 3, width: '95%' }}>
          <textarea className='text-purple-800 dark:text-purple-100' rows={20} placeholder='Your full story...' style={{ width: '100%' }} onChange={(e) => setReqbody({ ...reqbody, description: e.target.value })} />
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <button onClick={() => handleCreate()} className='bg-purple-800 dark:bg-purple-300 dark:text-purple-900 text-purple-200' style={{ fontWeight: 'bold', fontFamily: 'Cormorant, serif', border: 'none', padding: 5, borderRadius: 20, width: 200, fontSize: 18, marginTop: 50, marginBottom: 50 }}>CONFIRM</button>
      </div>
    </div>
  )
}

export default Create