import React, { useState, useEffect, Fragment } from 'react';
import adventure from '../img/adventure.jpg';
import animalnature from '../img/animalnature.jpg';
import fantasy from '../img/fantasy.jpg';
import moralstory from '../img/moralstory.jpg';
import scifi from '../img/scifi.jpg';
import superheors from '../img/superheors.jpg';
import { Button } from '@mui/material';
import anime from 'animejs/lib/anime.es.js';
import click from '../img/click.wav'

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
  const [animate, setAnimate] = useState(true);

  const handleClick = (item) => {
    setSelectedItem(item.name);
  };

  const handleCreate = () => {
    const audio = new Audio(click);
    audio.volume = 0.2;
      audio.play();
  }

  useEffect(() => {
    const callbackFunction = () => {
      // Your callback logic here
      console.log("Callback function executed after 5 seconds");
      setAnimate(false);
    };

    const timeoutId = setTimeout(callbackFunction, 5000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  const Animation = () => {
    useEffect(() => {
      var ml4 = {};
      ml4.opacityIn = [0, 1];
      ml4.scaleIn = [0.2, 1];
      ml4.scaleOut = 3;
      ml4.durationIn = 800;
      ml4.durationOut = 600;
      ml4.delay = 500;

      anime.timeline({ loop: true })
        .add({
          targets: '.ml4 .letters-1',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        }).add({
          targets: '.ml4 .letters-1',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        }).add({
          targets: '.ml4 .letters-2',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        }).add({
          targets: '.ml4 .letters-2',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        }).add({
          targets: '.ml4 .letters-3',
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn
        }).add({
          targets: '.ml4 .letters-3',
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay
        }).add({
          targets: '.ml4',
          opacity: 0,
          duration: 500,
          delay: 500
        });
    }, []);

    return (
      <div className='bg-purple-200 dark:bg-purple-900 w-screen h-screen items-center flex justify-center'>
        <h1 className="ml4">
          <span className="letters letters-1 text-purple-900 dark:text-purple-100">Get</span>
          <span className="letters letters-2 text-purple-900 dark:text-purple-100">Set</span>
          <span className="letters letters-3 text-purple-900 dark:text-purple-100">Go!</span>
        </h1>
      </div>
    );
  };

  return (
    <div className='bg-purple-200 dark:bg-purple-900 w-screen h-full'>
      {
        animate ? <Animation /> : <Fragment>
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
        </Fragment>
      }
    </div>
  )
}

export default Create