import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <img src='/media/images/homeHero.png' alt='Home Hero Image' className='mb-4'></img>
                <h1 className='mt-2'>Invest in everything</h1>
                <p>Online plateform for invest in stocks, mutual funds, derivatives and more.</p>
                <button className='btn btn-primary fs-.8 p-2 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;