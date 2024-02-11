import React from 'react';
import Avatar from '@mui/material/Avatar';
import StoryCardSmall from '../components/storycardsmall';
import adventure from '../img/adventure.jpg';
import animalnature from '../img/animalnature.jpg';
import fantasy from '../img/fantasy.jpg';
import moralstory from '../img/moralstory.jpg';
import scifi from '../img/scifi.jpg';
import superheors from '../img/superheors.jpg';
import Divider from '@mui/material/Divider'

function Profile() {

  const images = [
    { name: 'A boy on a journey to find magic crystal', img: adventure, author: "Priyanka J", published: '3 days ago', 'likes': '5.6k' },
    { name: 'Princess of the Midnight Forest', img: animalnature, author: "Haarvish", published: '2 days ago', 'likes': '8.2k' },
    { name: 'A city full of flying parachute', img: fantasy, author: "Priyanka J", published: '1 day ago', 'likes': '10.4k' },
    { name: 'Once upon a time...', img: moralstory, author: "Joe James", published: 'Few hours ago', 'likes': '6.6k' },
    { name: 'Stimulation world', img: scifi, author: "Jessi James", published: '4 days ago', 'likes': '1.2k' },
    { name: 'Super Heros - The Beginning', img: superheors, author: "Jonny Brown", published: '8 days ago', 'likes': '7.7k' }
  ];

  return (
    <div className='w-screen min-h-screen h-full dark:bg-purple-900 bg-purple-100'>
      <div className='pt-24 pl-8 flex justify-between'>
        <div className=''>
          <Avatar className='p-10 font-bold' alt="Priyanka" src="/static/images/avatar/1.jpg" sx={{ backgroundColor: 'purple ' }} />
          <p className='text-purple-950 text-lg font-bold dark:text-purple-200'>Priyanka J</p>
          <div className='text-md mt-1 text-purple-950 font-bold dark:text-purple-200'>
            Author <br />
            Sleeping and waking with smile is blessings... 
          </div>
        </div>
        <div className='mr-10 flex items-center'>
          <p className='text-center rounded-md bg-purple-700 dark:bg-purple-300 font-bold py-1 px-4 dark:text-purple-950 text-md text-purple-200 cursor-pointer hover:bg-purple-800'>Edit Profile</p>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: "center", marginBottom: 15, marginTop: 15 }}>
        <Divider sx={{ color: "#3b0764", width: '95%', display: 'flex' }}>
          <div style={{ display: 'flex' }}>
            <svg style={{ marginLeft: 5, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <svg style={{ marginLeft: 5, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            <svg style={{ marginLeft: 5, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
          </div>
        </Divider>
      </div>
      <div className='text-md ml-5 text-purple-950 font-bold
      dark:text-purple-200'>My stories</div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5'>
        {images.map((item, i) => <StoryCardSmall key={i} item={item} />)}
      </div>
    </div>
  )
}

export default Profile