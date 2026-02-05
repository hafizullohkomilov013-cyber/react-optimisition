import React from 'react'
import { memo } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    console.log("child render");
    
  return (
    <section className="   bg-gray-400">
      <nav className="flex px-5 py-5 max-w-300 m-auto w-full items-center justify-between">
        <h2 className='text-3xl font-bold text-white'>Logo</h2>
        <div className='flex gap-3 text-white font-bold'>
          <Link to={"/"}>Home</Link>
          <Link to={"/aboute"}>Aboute</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </nav>
    </section>
  );
}

export default memo(Navbar)
