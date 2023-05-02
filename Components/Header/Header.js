
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { ShareContext } from "@/ShareProvider/ShareProvider";
import Link from "next/link";

const Nav = () => {
  const { user, signOutUser, logOut } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const { userProfile } = useContext(ShareContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })
  }



  const dropDownItems = (
    <>
      <li ><Link href='/Profile' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Profile</Link></li>
      <li onClick={handleLogOut}><Link href='' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Log Out</Link></li>
    </>
  );

  const navItems = (
    <>


      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Home</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Services' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Service</Link></li>


      {user?.uid ? (
        <>
          <li><Link href='/AddProduct' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Add Product</Link></li>
          <li><Link href='/MyReview' className='hover:underline underline-offset-4 decoration-2 decoration-white'>My Reviews</Link></li>
        

          <div className="grid items-center justify-center justify-items-center relative">
            {userProfile[0]?.image ? (
              <>
                <img
                  onClick={() => setDropDown(!dropDown)}
                  className="w-8 h-8 rounded-full items-center justify-center"
                  src={userProfile[0]?.image}
                  alt="user"
                />
              </>
            ) : (
              <>
                {user?.photoURL ? (
                  <img
                    onClick={() => setDropDown(!dropDown)}
                    className="w-10 h-10 rounded-full items-center justify-center"
                    src={user?.photoURL}
                    alt="user"
                  />
                ) : (
                  <img
                  onClick={() => setDropDown(!dropDown)}
                  className="w-8 h-8 rounded-full items-center justify-center"
                  src='https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913955/business-man-icon-md.png'
                  alt="user"
                />
                )}
              </>
            )}
            {dropDown && (
              <ul
                className="lg:absolute lg:top-[52px] -z-10 lg:-right-10 menu ul lg:bg-gradient-to-r from-[#6c2506] via-[#ac3806] to-[#B43B07] dropdown-content menu items-center shadow w-64 px-auto lg:w-36 justify-center" 
                onClick={() => {
                  setDropDown(!dropDown);
                  setNavbar(!navbar);
                }}>
                {dropDownItems}
              </ul>
            )}
          </div>
        </>
      ) : (
        <li
          onClick={() => setNavbar(!navbar)}
          className="hover:text-orange-400">
          <Link href="/Login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <nav className="fixed bg-gradient-to-r from-[#0D0605] via-[#120101] to-[#B43B07] dark:bg-dark bg-opacity-30 shadow-md  z-50 w-full md:px-5 py-1  right-0 top-0">
      <div className="justify-between px-4 mx-auto lg:items-center lg:flex">
        <div>
          <div className="flex items-center justify-between  lg:block">
            <Link href='/' className="btn btn-ghost normal-case text-2xl text-orange-500 font-bold"><img className='w-28 h-12 md:h-14' src="https://i.ibb.co/wBWmdgV/Navy-Blue-Minimalist-Text-Logo-removebg-preview.png" alt="" /></Link>
            <div className="lg:hidden flex items-center gap-1 justify-center">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center text-white gap-4">
          <div

            className={`text-center flex-1 justify-self-center items-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 cursor-pointer ${navbar ? "hidden" : "block"
              }`}>
            <ul className="items-center justify-center ul  space-y-5 lg:flex lg:space-x-6 lg:space-y-0">
              {navItems}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;