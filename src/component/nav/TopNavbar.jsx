import React from 'react'
import * as IMAGES from "../../assets/";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const TopNavbar = ({navBarOpen, setNavBarOpen}) => {
  return (
    <header className='bg-white shadow-sm fixed z-30 w-screen top-0' >
        <div className='flex justify-between cursor-pointer p-4 md:p-0'>
          <img className='md:h-fit md:hidden' src={IMAGES.LOGO} alt='' />
          <span className='md:hidden' onClick={() => setNavBarOpen(true)}>
            <img src={IMAGES.MENU_BTN} alt='' />
          </span>
        </div>
        <div
          className={`p-4 fixed top-0 w-screen h-screen bg-white transition-all ease-in duration-200 ${
            navBarOpen ? "-translate-y-0" : "-translate-y-full"
          } md:-translate-y-0 md:flex md:justify-between md:items-center md:w-[85%] md:mx-auto md:relative md:h-full`}
        >
          <aside className='md:flex md:space-x-32 md:items-center'>
            <HashLink smooth to="/#home" className='flex justify-between cursor-pointer'
            onClick={() => setNavBarOpen(false)}
            >
              <img className='md:h-fit' src={IMAGES.LOGO} alt='' />
              <span className='md:hidden' onClick={() => setNavBarOpen(false)}>
                <img src={IMAGES.CLOSE_BTN} alt='' />
              </span>
            </HashLink>
            <nav>
              <ul className='flex flex-col space-y-6 mt-9 md:flex-row md:space-y-0 md:space-x-8 md:mt-0'>
                <li>
                  <HashLink
                    smooth to="/#home"
                    className='text-isDark400 hover:text-isSkyBlue550'
                    onClick={() => setNavBarOpen(false)}
                  >
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth to="/#about"
                    className='text-isDark400 hover:text-isSkyBlue550'
                    onClick={() => setNavBarOpen(false)}
                  >
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth to='/#how_it_works'
                    className='text-isDark400 hover:text-isSkyBlue550'
                    onClick={() => setNavBarOpen(false)}
                  >
                    How it works
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth to="/#services"
                    className='text-isDark400 hover:text-isSkyBlue550'
                    onClick={() => setNavBarOpen(false)}
                  >
                    Our Services
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth to="/#contact"
                    className='text-isDark400 hover:text-isSkyBlue550'
                    onClick={() => setNavBarOpen(false)}
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </nav>
          </aside>
          <HashLink smooth to="/#how_it_works" className='flex space-x-2 transition ease-linear delay-150 hover:bg-isSkyBlue600 hover:text-white border border-skyBlue rounded-[4px] w-fit p-2 px-4 font-semibold text-isDark400 mt-7 md:mt-0' onClick={() => setNavBarOpen(false)}>
            <span>Explore our offerings</span>
            <span>
              <img className='w-[90%]' src={IMAGES.GIFT_ICON} alt='' />
            </span>
          </HashLink>
          <div className='grid grid-cols-2 space-x-3 mt-6 md:hidden'>
            <div className='flex space-x-2 p-1.5 px-3 rounded-[5px] bg-isSkyBlue600 text-white'>
              <img className='' src={IMAGES.APPLE_ICON} alt='apple-icon' />
              <div className='flex flex-col space-y-1 w-[180px]'>
                <span className='text-xs tracking-[0.09rem]'>
                  Download on the
                </span>
                <h2 className='leading-3 text-[1.1rem] font-medium'>
                  App Store
                </h2>
              </div>
            </div>
            <div className='flex space-x-2  p-1.5 px-3 rounded-[5px] bg-isSkyBlue600 w-fit text-white'>
              <img className='' src={IMAGES.GOOGLE_ICON} alt='apple-icon' />
              <div className='flex flex-col space-y-1'>
                <span className='text-xs tracking-[0.09rem]'>GET IT ON</span>
                <h2 className='leading-3 text-[1.1rem] font-medium'>
                  Google Play
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default TopNavbar