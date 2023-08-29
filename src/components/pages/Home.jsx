import React from 'react'
import '../../App.css'
import Herosection from '../HeroSection'
import Cards from '../Cards';
import PageSupport from '../PageSupport';

function Home(){
    return(
        <> 
        <Herosection/>
        <Cards/>
        <PageSupport/>
        </>
    )
}
export default Home;