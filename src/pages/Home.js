import React from 'react';
import Hello from '../image/undraw_social_friends_re_7uaa.svg';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div className='home'>
        <div className='box1'>
            <h1 className='h'>Inspire Your client Digitally</h1>
            <p className='p'>Make a Digital Business card that is smart, Elegant and Affordable.</p>
            <Link to={'/features'}><button className='button'>Demo</button></Link>
        </div>
        
        <div className='box2'>
            <img src={ Hello }  alt='hello'/>
        </div>
    </div>
  )
}

export default home;