import { Outlet } from 'react-router-dom';
import Footer from './../shared/Footer';
import Navbar from '../shared/Navbar';
import { Header } from '../sections';

const SharedLayout = () => {
  return (
    <>
     <Navbar />
      <main>
        <Outlet />
      </main>
     <Footer />
    </>
  );
};

export default SharedLayout;


