

const Footer = () => {
  return (
    <div>
      <div className="footbanner">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div >
            <div className="footer py-10">
              <div className='z-10 text-white'>
                <div>
                  <img className='w-32 h-14' src="https://i.ibb.co/wBWmdgV/Navy-Blue-Minimalist-Text-Logo-removebg-preview.png" alt="" />
                </div>
                <p className='text-md'>Bahadarhat, Chittagong, Bangladesh</p>

              </div>
              <div className='z-10 text-white'>
                <h1 className='text-2xl'>Contact Info</h1>
                <p className='text-xl'>Call : +8801638776808</p>
                <h1 className='text-lg'>Email No: liptonbarua274@gmail.com</h1>
              </div>
              <div className='z-10 text-white'>
                <h1 className='text-2xl'>Our Services</h1>
                <a className="link link-hover">Fast Delivery</a>
                <a className="link link-hover">Vegan Cusine</a>
                <a className="link link-hover">Skilled Chefs</a>

              </div>
              <div className='z-10 text-white'>
                <h1 className='text-2xl'>Opening Hours</h1>
                <a className="link link-hover">Tuesday-Saturday: 10.00AM-7.30PM</a>
                <a className="link link-hover">Sunday: 12.00PM-8.30AM</a>
                <a className="link link-hover">Monday: 0ff</a>
              </div>


            </div>
          </div>
          <div className="z-10 text-white flex flex-col justify-between pt-5 pb-10 border-t border-[white] sm:flex-row">
            <p className="text-sm z-10 text-white">
              © Copyright 2020 Lorem Inc. All rights reserved.
            </p>
            <div className="z-10 text-white flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://github.com/LiptonBarua"
               target='_blank'  className=" transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="/"
                className=" transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/lipton.barua.33/" target='_blank'
                className=" transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;