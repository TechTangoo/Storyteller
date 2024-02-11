import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function StoryCardSmall({ item }) {
    return (
        <div className='relative w-full h-72 transition duration-300 ease-in-out transform bg-purple-50 p-5 rounded-xl my-5 shadow hover:scale-105 '>
            <div className='flex-1 hover:brightness-75'>
                <div style={{ display: 'flex', flexWrap: 'wrap', flex: 1, gap: 25, justifyContent: 'center' }}>
                    <div
                        className='relative cursor-pointer cardimage'
                        onClick={() => { }}
                    >
                        <img
                            src={item.img}
                            className={`absolute inset-0 w-full h-full object-cover rounded-lg transition duration-300 ease-in-out transform`}
                            alt={item.name}
                        />
                        <div className={`absolute bottom-1 left-1 text-white px-2 py-1 text-lg font-bold rounded-bl-lg`}>
                            <div className='w-10 rounded-full h-10 bg-purple-700 px-2 py-2 transition duration-300 ease-in-out transform hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='font-bold text-purple-900 text-xl flex-1 text-center mt-2 line-clamp-1'>{item.name}</h2>
                <div className='flex flex-1 mt-3 justify-between items-center'>
                    <div className='flex items-center gap-1 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
                        <FavoriteIcon sx={{ color: '#dc2626' }} /> <span className='text-purple-950'>{item.likes}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg style={{ marginLeft: 1, marginRight: 1, color: "#3b0764" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className='text-purple-950 font-bold text-sm'>Just Now</p>
                    </div>
                </div>

            </div>
            <div className={`absolute top-1 right-1 text-white px-2 py-1 text-lg font-bold rounded-bl-lg cursor-pointer`}>
                <div className='w-8 rounded-full h-8 bg-purple-700 bg-opacity-50 hover:bg-opacity-70 px-2 py-2 transition duration-300 ease-in-out transform hover:scale-110 items-center text-center flex justify-center text-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default StoryCardSmall