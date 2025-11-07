import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import RateLimitedUI from '../components/RateLimitedUI';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  return (
    <div className='min-h-screen'>
      <NavBar />

      {isRateLimited && <RateLimitedUI />}  
      Home
    </div>
  )
}

export default HomePage
