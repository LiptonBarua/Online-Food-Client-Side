import { AuthContext } from '@/AuthProvider/AuthProvider';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const Header = () => {
  const { user } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })
  }
  const navItem = <>
    <li><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Home</Link></li>
    <li><Link href='/Services' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Service</Link></li>

    {
      user?.email ?
        <>
          <li><Link href='/AddProduct' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Add Product</Link></li>
          <li><Link href='/MyReview' className='hover:underline underline-offset-4 decoration-2 decoration-white'>My Reviews</Link></li>
          <li onClick={handleLogOut}><Link href='' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Sign Out</Link></li>
        </>
        : <li><Link href='/Login' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Login</Link></li>
    }


    {/* <li><Link href='/Register' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Register</Link></li> */}
  </>
  return (
    <nav>
      <div className="lg:px-7 shadow-2xl bg-gradient-to-r from-[#0D0605] via-[#120101] to-[#B43B07] navbar fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">

          <Link href='/' className="btn btn-ghost normal-case text-2xl text-orange-500 font-bold"><img className='w-28 h-14' src="https://i.ibb.co/wBWmdgV/Navy-Blue-Minimalist-Text-Logo-removebg-preview.png" alt="" /></Link>
        </div>
        <div className="navbar-end ">
          <ul className="menu menu-horizontal hidden lg:flex text-white">
            {navItem}
          </ul>
          <div className="dropdown dropdown-end">
            <label onClick={() => setOpenNav(!openNav)} tabIndex={0} className="text-white lg:hidden">
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </label>
            {
              openNav && (
                <ul onClick={() => setOpenNav(openNav)} tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-gradient-to-r from-[#0D0605] via-[#120101] to-[#B43B07] text-white rounded-box w-52">
                  {navItem}
                </ul>
              )
            }
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Header;