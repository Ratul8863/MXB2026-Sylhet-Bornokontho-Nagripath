import React, { useEffect, useState } from 'react'

import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import useAuth from '../Hooks/useAuth';
import Footer from '../Components/Foooter/Footer';
import ScrollToTop from '../Custom/ScrollToTop';

function MainLayout() {

  const { user } = useAuth();

  const [cuser,setCuser]= useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://bornokontho-server.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => setCuser(data));
    }
  }, [user]);
console.log(cuser);
  return (
    <div className="">
       <ScrollToTop />
        <Navbar cuser={cuser}></Navbar>
        <div className='min-h-screen bg-[#14120d]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout