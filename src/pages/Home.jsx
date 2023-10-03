// import React from 'react'
// import Header from '../components/layouts/Header'
// import Specialize from '../components/Specialize/Specialize'
// import Stats from '../components/Stats/Stats'
// import Process from '../components/Process/Process'
// import Footer from '../layouts/Footer'
import Header from "../sections/HeaderSection/Header"
import Process from "../sections/ProcessSection/Process";
import Stats from "../sections/StatsSection/Stats";
import Footer from "../shared/Footer";
import "../styles/main.css";
import Specialize from './../sections/SpecializeSection/Specialize';

const Home = () => {
  return (
    <>    
      <Header />
      <Specialize />
      <Stats />
      <Process />
      <Footer />
    </>
  );
};

export default Home;
