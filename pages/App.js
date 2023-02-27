import React from 'react';

import NavBar from './components/Navbar'
import Header from './components/Header'
import SpecialMenu from './components/SpecialMenu'
import Chef from './components/Chef'
import Intro from './components/Intro'
import Laurels from './components/Laurels'
import FindUs from './components/FindUs'
import Gallery from './components/Gallery'
import AboutUs from './components/AboutUs';
import Footer from './components/Footer'

export default function App(){

return(
  <div>
  <NavBar />
  <Header/>  
   <AboutUs />
  <SpecialMenu />
   <Chef />
 <Intro />
   <Laurels />
  <Gallery />
  <FindUs />
  <Footer />
</div>

)

}
