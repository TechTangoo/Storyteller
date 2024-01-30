import React from 'react';
import gif from '../img/404page.gif';

function Notfound() {
    return (
        <div style={{
            width: '100vw', height: '100vh', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fae8ff', flexDirection:'column'}}>
            <img src={gif} alt='404 page not found' width={540} height={540} />
            <p>Page not found.</p>
        </div>
    );
}

export default Notfound;
