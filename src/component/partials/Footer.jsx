import React from 'react'
import * as IMAGES from "../../assets/";
import * as ICONS from "../../assets/icons";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

  return (
    <footer className='bg-isSkyBlue500 p-4 pt-10 md:py-12'>
        <section className='md:w-[85%] md:mx-auto'>
          <div className='flex justify-center border-b border-isSkyBlue400 pb-6 md:p-0 md:justify-between md:py-6'>
            <HashLink smooth to="/#home">
              <img className='w-[40%] md:w-[82%]' src={IMAGES.LOGO_FOOTER} alt='' />
            </HashLink>
            <div className='hidden font-inter md:flex md:space-x-12 md:text-[#9898F0] md:text-sm'>
              <Link to='/' className="hover:text-white">Terms & Conditions</Link>
              <Link to='/privacy_policy' className="hover:text-white">Privacy policy</Link>
              <Link to='/' className="hover:text-white">FAQs</Link>
            </div>
          </div>
          <div className='text-[#9898F0]'>
            <div className="flex flex-col items-center md:flex-row md:justify-between">

              <div className='text-sm font-[400] flex space-x-3 md:hidden'>
                <Link to='/'>Terms & Conditions</Link>
                <Link to='/privacy_policy'>Privacy policy</Link>
                <Link to='/'>FAQs</Link>
              </div>
              
              <span className="mt-2 font-inter text-sm md:mt-0">&copy;{new Date().getFullYear()} </span>
              
              <div className='flex space-x-5 -order-1 text-lg mb-4 md:order-1'>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100088835607970&mibextid=ZbWKwL" className="hover:text-white cursor-pointer">
                  <ICONS.FaFacebookF />
                </a>
                <div className="hover:text-white cursor-pointer">
                  <ICONS.BsTwitter />
                </div>
                <a target="_blank" href="https://instagram.com/pay_tyme?igshid=YmMyMTA2M2Y=" className="hover:text-white cursor-pointer">
                  <ICONS.FaInstagram />
                </a>
              </div>
              
              <div className="-order-2 flex flex-col item-center py-4 mb-4 md:order-2 md:flex-row md:gap-4 md:items-center">
                <span className='font-normal'>Download the App</span>
                <div className='grid space-x-3 mt-3'>
                  <div className="md:flex md:gap-4">
                    <div className='flex space-x-2 p-1.5 px-3 rounded-[5px] outline outline-1 bg-isSkyBlue500 hover:bg-isSkyBlue400 cursor-pointer text-white mb-4'>
                      <img
                        className=''
                        src={IMAGES.APPLE_ICON}
                        alt='apple-icon'
                      />
                      <div className='flex flex-col space-y-1 w-'>
                        <span className='text-xs tracking-[0.09rem]'>
                          Download on the
                        </span>
                        <h2 className='leading-3 text-[1.1rem] font-medium'>
                          App Store
                        </h2>
                      </div>
                    </div>
                    <div className='flex space-x-2  p-1.5 px-3 rounded-[5px] outline outline-1 bg-isSkyBlue500 hover:bg-isSkyBlue400 cursor-pointer text-white md:h-fit'>
                      <img
                        className=''
                        src={IMAGES.GOOGLE_ICON}
                        alt='apple-icon'
                      />
                      <div className='flex flex-col space-y-1'>
                        <span className='text-xs tracking-[0.09rem]'>
                          GET IT ON
                        </span>
                        <h2 className='leading-3 text-[1.1rem] font-medium'>
                          Google Play
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </footer>
  )
}

export default Footer