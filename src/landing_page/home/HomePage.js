import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Navbar from '../Navbar';
import Pricing from './Pricing';
import Stats from './Stats';
import OpenAccounts from '../OpenAccounts';
import Footer from '../Footer';

function HomePage() {
    return (    
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccounts />
        </>
     );
}

export default HomePage;