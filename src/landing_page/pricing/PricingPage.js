import React from 'react';
import Brokrage from './Brokrage';
import Hero from './Hero';
import OpenAccounts from '../OpenAccounts';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <OpenAccounts/>
        <Brokrage />
        </>
     );
}

export default PricingPage;