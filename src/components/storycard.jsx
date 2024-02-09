import React from 'react'

function StoryCard({ item }) {
    return (
        <div className='w-2/5 min-h-4/5 bg-purple-50 p-5 rounded-xl my-5'>
            <div>
            <img src={item.img} className='w-4/5 h-3/5' />
            </div>
        </div>
    )
}

export default StoryCard