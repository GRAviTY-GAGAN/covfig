import React from 'react';
import stat from '../image/undraw_all_the_data_re_hh4w.svg';


const features = () => {
  return (
    <div>
        <div>
            <p className='fep'>Are Printed Business Cards Actually Worth it</p>
        </div>
        <div className='b1'>
            <div className='d1'>
                <p className='para'>
                Customers can't find the visiting cards when they actually need it, 9 out of 10 times
                </p>
                <p className='para'>88% of the printed visiting cards go to the dustbin after 1st week</p>
                <p className='para'>Almost 80% of people never save contact number from the visiting cards</p>
                <p className='para'>Don't you think your printed visiting card expired in this competitive digital world ?</p>
                <p className='para'>People can't find full list of offering products / services in printed visiting cards</p>  
            </div>
            <div className='d2'>
                <img className='stat' src={stat} alt='stat' />
            </div>
        </div>
    </div>
  )
}

export default features;