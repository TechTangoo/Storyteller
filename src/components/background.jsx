import React from 'react';
import Lottie from 'lottie-react';
import moon from "../img/moon.json";
import star from "../img/star.json";
import bg from "../img/bg.png";

function Background() {
    const containerStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
    };
    return (
        <div style={containerStyle} className='w-screen absolute h-screen'>
            <div className='absolute w-1/5 right-2'>
                <Lottie animationData={moon} loop={true} />
            </div>
        </div>
    )
}

export default Background