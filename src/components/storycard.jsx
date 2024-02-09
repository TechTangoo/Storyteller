import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';

function StoryCard({ item }) {
    return (
        <div className='min-w-1/4 max-w-sm min-h-4/5 bg-purple-50 p-5 rounded-xl my-5 shadow'>
            <div className='flex-1'>
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
                <h2 className='font-bold text-purple-900 text-xl flex-1 text-center mt-2'>{item.name}</h2>
                <div className='flex flex-1 mt-5 justify-between items-center'>
                    <div className='flex items-center gap-1 text-purple-950 font-bold cursor-pointer transition duration-300 ease-in-out transform hover:scale-105'>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                        <p className='bg-purple-100 px-2 py-1 rounded-full text-sm'>Priyanka</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg style={{ marginLeft: 1, marginRight: 1, color: "#3b0764" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className='text-purple-950 font-bold text-sm'>Just Now</p>
                    </div>
                </div>
                <Divider sx={{ color: "#3b0764" }}>
                    <svg style={{ marginLeft: 1, marginRight: 1 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                </Divider>
                <div className='line-clamp-4 text-purple-950'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed gravida est nec quam consequat, sed feugiat magna accumsan.
                    Nam ultricies velit non tempor tempor.
                    Phasellus vehicula quam id augue convallis, vel volutpat eros faucibus.
                    Curabitur in nisi at turpis mollis blandit.
                    Vivamus interdum quam eget lacus convallis, eget hendrerit dui commodo.
                    Nullam lacinia velit at lacinia mattis.
                    Integer nec eleifend leo. Ut pulvinar ante ac nibh rhoncus aliquam.
                    Donec tincidunt, nunc auctor cursus volutpat, leo risus consequat nisi, eu mollis lorem ante eu justo.
                    Sed eleifend euismod neque, vel finibus arcu facilisis nec.
                </div>
            </div>
        </div>
    )
}

export default StoryCard