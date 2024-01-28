import React from 'react';
import Sidebar from '../components/sidebar';

function Home() {
  return (
    <div style={{ backgroundColor: '#f3e8ff', width: '100vw', height: '100vh' }}>
      
      <div style={{alignItems:'center', position: 'absolute', display: 'flex', flex: 1, backgroundColor: '#a855f7', height: 50, width: '100vw', justifyContent:'space-between' }}>
        <div>LOGO</div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Home