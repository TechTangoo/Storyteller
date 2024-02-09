import React, { useState, useEffect } from 'react'
import adventure from '../img/adventure.jpg';
import animalnature from '../img/animalnature.jpg';
import fantasy from '../img/fantasy.jpg';
import moralstory from '../img/moralstory.jpg';
import scifi from '../img/scifi.jpg';
import superheors from '../img/superheors.jpg';
import { Button } from '@mui/material';
import click from '../img/click.wav'

function Gener() {

  const images = [
    { name: 'Adventure', img: adventure },
    { name: 'Animal/Nature', img: animalnature },
    { name: 'Fairy/Fantasy', img: fantasy },
    { name: 'Moral/Folk', img: moralstory },
    { name: 'Science Friction', img: scifi },
    { name: 'Super Heros', img: superheors }];

  const [gener, setGener] = useState(null)

  const buttonClick = () => {
    const audio = new Audio(click);
    audio.volume = 0.2;
    audio.play();
  }

  const handleClick = (item) => {
    setGener(item)
  }

  return (
    <div className='bg-purple-200 dark:bg-purple-900 w-screen min-h-screen h-full'>
      <h3 className='text-purple-800 dark:text-purple-100'>gener</h3>
      <div className='margingener'>
        <div className='text-2xl md:text-2xl lg,xl,2xl:text-3xl font-bold dark:text-purple-200 text-purple-900 mb-2 ml-4'>Select Gener</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: 25, justifyContent: 'center' }}>
          {images.map((item, index) =>
            <div
              key={index}
              className='relative cursor-pointer imagebg'
              onClick={() => { handleClick(item); buttonClick(); }}
            >
              <img
                src={item.img}
                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform ${gener === item.name ? 'scale-105 brightness-50' : 'scale-100 hover:scale-105'}`}
                alt={item.name}
              />
              <div className={`absolute bottom-0 left-0 text-white px-2 py-1 text-lg font-bold rounded-bl-lg`}>
                {item.name}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gener