import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container my-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    <img
                        src='/media/images/homeHero.png'
                        alt='Home Hero'
                        className='img-fluid mb-4'
                    />
                    <h1 className='mt-2'>Invest in everything</h1>
                    <p>
                        Online platform for investing in stocks, mutual funds, derivatives, and more.
                    </p>
                    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                        <Link to='/signup'
                            className='btn btn-primary px-4 py-2 fs-6'
                        >
                            Sign Up Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
