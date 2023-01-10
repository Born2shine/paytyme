import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets/";
import * as ICONS from "../../assets/icons";
import * as SVGS from "../../assets/svgs";
import Contact from "../../component/partials/Contact";
import { Offers } from "../../utils/data/offer";
import TopNavbar from "./../../component/nav/TopNavbar";
import Footer from "./../../component/partials/Footer";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Home = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [showFaqImage, setShowFaqImage] = useState("");

  const toggleTab = (tab) => {
    setActiveFaq((activeTab) => {
      setShowFaqImage(tab);
      return activeTab == tab ? -+tab : tab;
    });
  };

  useEffect(() => {
    // console.log(activeFaq)
  }, [activeFaq]);
  return (
    <div className='h-screen w-screen overflow-scroll'>
      {/* Header */}
      <TopNavbar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      {/* End Header */}

      {/* Main */}
      <main className='mt-20 md:mt-32 relative' id='home'>
        <div className='p-4 mt-5 md:w-[85%] md:mx-auto md:flex md:justify-between'>
          <aside data-aos='fade-up'
          data-aos-duration='1000'>
            <h1 className='text-isSkyBlue400 text-[2.5rem] font-semibold leading-[3rem] md:text-[4rem] md:leading-[4.5rem]'>
              Try once <br /> and Every time <br /> with -{" "}
              <span className='text-isSkyBlue550'>Paytyme</span>
            </h1>
            <p className='text-isDark400 font-inter font-[400] mt-4 md:w-[55%] md:text-[15px] md:my-4 md:leading-6'>
              With Paytyme mobile app, you don’t have to worry about settling
              all your bills. You can settle all your bills, all in one place
            </p>
            <div className='grid grid-cols-2 space-x-4 mt-6 lg:w-[50%]'>
              <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 text-white w-[180px]'>
                <img className='' src={IMAGES.APPLE_ICON} alt='apple-icon' />
                <div className='flex flex-col space-y-1'>
                  <span className='text-xs tracking-[0.09rem]'>
                    Download on the
                  </span>
                  <h2 className='leading-3 text-[1.1rem] font-medium'>
                    App Store
                  </h2>
                </div>
              </div>
              <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 w-fit text-white'>
                <img className='' src={IMAGES.GOOGLE_ICON} alt='apple-icon' />
                <div className='flex flex-col space-y-1'>
                  <span className='text-xs tracking-[0.09rem]'>GET IT ON</span>
                  <h2 className='leading-3 text-[1.1rem] font-medium'>
                    Google Play
                  </h2>
                </div>
              </div>
            </div>
          </aside>
          <aside className='mt-12 md:mt-0'>
            <Splide 
                options={ {
                  rewind: true,
                  width : 650,
                  autoplay : true,
                  // gap   : '1rem',
                  arrows: false,
                } }
                hasTrack={false} 
                // aria-label='...' 
                className='slider'>
              <SplideTrack>
                <SplideSlide>
                  <div className='slider-1'>
                    <img
                      className='md:w-[]'
                      src={IMAGES.SLIDER_1}
                      alt='slider-1'
                    />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className='slider-1'>
                    <img
                      className='md:w-[]'
                      src={IMAGES.SLIDER_2}
                      alt='slider-1'
                    />
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className='slider-1'>
                    <img
                      className='md:w-[]'
                      src={IMAGES.SLIDER_3}
                      alt='slider-1'
                    />
                  </div>
                </SplideSlide>
              </SplideTrack>
            </Splide>
          </aside>
        </div>
        <div className='bg-isSkyBlue50 p-4 rounded-t-2xl' id='about'>
          {/* All bill settlement */}
          <section className='flex flex-col md:grid md:grid-cols-2 md:gap-32 py-6 md:w-[85%] md:mx-auto md:items-center'>
            <aside className='bg-isPurple150 order-2 md:-order-1 flex justify-center'>
              <img
                className='w-[70%] pt-14 md:w-[55%]'
                src={IMAGES.IPHONE_1}
                alt=''
              />
            </aside>
            <aside className='mb-16'>
              <h2
                className='text-isSkyBlue400 text-[2.2rem] font-semibold 
              leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem]'
              >
                All your bills settlement in one place
              </h2>
              <p className='font-inter text-isDark400 font-[400] my-6'>
                Paytyme is a mobile payment platform that enables and make
                payments for utilities and bills easy and quick. This app offers
                millions of its users’ various different operational value in
                the day to day bill and utilities payment community.
              </p>

              <div className='grid grid-cols-2 space-x-4 mt-6 lg:w-[62%]'>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 text-white w-[180px]'>
                  <img className='' src={IMAGES.APPLE_ICON} alt='apple-icon' />
                  <div className='flex flex-col space-y-1'>
                    <span className='text-xs tracking-[0.09rem]'>
                      Download on the
                    </span>
                    <h2 className='leading-3 text-[1.1rem] font-medium'>
                      App Store
                    </h2>
                  </div>
                </div>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 w-fit text-white'>
                  <img className='' src={IMAGES.GOOGLE_ICON} alt='apple-icon' />
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
            </aside>
          </section>
          {/* End All bill settlement */}

          {/* How it works */}
          <section className='md:grid md:grid-cols-2 mt-4 md:gap-32 py-6 md:w-[85%] md:mx-auto md:mt-32'>
            <aside className='mb-16'>
              <h2
                className='text-isSkyBlue400 text-[2.2rem] font-semibold 
              leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem]'
              >
                How it works
              </h2>
              <div className='content mt-6'>
                {/* single item */}
                <div className='flex space-x-5 justify-betwen items-baseline border-t-[1px] border-t-isPurple300 py-4 relative'>
                  <span className='text-isDark500 font-semibold text-[1.2rem]'>
                    01
                  </span>
                  <div>
                    <span className='text-[1.2rem] block'>
                      Sign up in minutes
                    </span>
                    <p
                      className={`text-isGray mt-2 font-inter font-normal text-[14px] w-[90%] ${
                        activeFaq !== 1 && "hidden"
                      }`}
                    >
                      Download Paytyme on your Play store or App store. Register
                      using your email and password. Once login, you can fund
                      your wallet and commence transactions on any of our
                      services.
                    </p>
                  </div>
                  <span
                    className='text-isPurple400 text-2xl absolute right-0 cursor-pointer'
                    onClick={() => toggleTab(1)}
                  >
                    {activeFaq == 1 ? (
                      <ICONS.CgChevronUpO />
                    ) : (
                      <ICONS.CgChevronDownO />
                    )}
                  </span>
                </div>
                {/* end single item */}

                {/* single item */}
                <div className='flex space-x-5 justify-betwen items-baseline border-t-[1px] border-t-isPurple300 py-4 relative'>
                  <span className='text-isDark500 font-semibold text-[1.2rem]'>
                    02
                  </span>
                  <div>
                    <span className='text-[1.2rem] block'>Fund Wallet</span>
                    <p
                      className={`text-isGray mt-2 font-inter font-normal text-[14px] w-[90%] ${
                        activeFaq !== 2 && "hidden"
                      }`}
                    >
                      Click on the{" "}
                      <span className='font-bold'>Fund Wallet</span> icon to
                      select any payment methods that suit you. You can fund
                      your wallet using either cards and bank transfer, or by
                      filling a form to pay directly into our account.
                    </p>
                  </div>
                  <span
                    className='text-isPurple400 text-2xl absolute right-0 cursor-pointer'
                    onClick={() => toggleTab(2)}
                  >
                    {activeFaq == 2 ? (
                      <ICONS.CgChevronUpO />
                    ) : (
                      <ICONS.CgChevronDownO />
                    )}
                  </span>
                </div>
                {/* end single item */}

                {/* single item */}
                <div className='flex space-x-5 justify-betwen items-baseline border-t-[1px] border-t-isPurple300 py-4 relative'>
                  <span className='text-isDark500 font-semibold text-[1.2rem]'>
                    03
                  </span>
                  <div>
                    <span className='text-[1.2rem] block'>Add Card</span>
                    <p
                      className={`text-isGray mt-2 font-inter font-normal text-[14px] w-[90%] ${
                        activeFaq !== 3 && "hidden"
                      }`}
                    >
                      You will be advice to add a card of your choice when
                      making transactions or when the funds in your wallet is
                      depleted.
                    </p>
                  </div>
                  <span
                    className='text-isPurple400 text-2xl absolute right-0 cursor-pointer'
                    onClick={() => toggleTab(3)}
                  >
                    {activeFaq == 3 ? (
                      <ICONS.CgChevronUpO />
                    ) : (
                      <ICONS.CgChevronDownO />
                    )}
                  </span>
                </div>
                {/* end single item */}

                {/* single item */}
                <div className='flex space-x-5 justify-betwen items-baseline border-t-[1px] border-t-isPurple300 py-4 relative'>
                  <span className='text-isDark500 font-semibold text-[1.2rem]'>
                    04
                  </span>
                  <div>
                    <span className='text-[1.2rem] block'>
                      Commence Transaction
                    </span>
                    <p
                      className={`text-isGray mt-2 font-inter font-normal text-[14px] w-[90%] ${
                        activeFaq !== 4 && "hidden"
                      }`}
                    >
                      You will be advice to add a card of your choice when
                      making transactions or when the funds in your wallet is
                      depleted.
                    </p>
                  </div>
                  <span
                    className='text-isPurple400 text-2xl absolute right-0 cursor-pointer'
                    onClick={() => toggleTab(4)}
                  >
                    {activeFaq == 4 ? (
                      <ICONS.CgChevronUpO />
                    ) : (
                      <ICONS.CgChevronDownO />
                    )}
                  </span>
                </div>
                {/* end single item */}
              </div>
            </aside>
            <aside className='flex justify-center'>
              <img
                className='w-[100%] md:w-[90%]'
                src={IMAGES.IPHONE_WORK_1}
                alt=''
              />
            </aside>
          </section>
          {/* End how it works */}
        </div>

        {/* Our Offer */}
        <div
          className='bg-isSkyBlue500 mt-6 p-4 px-6 ml-6 rounded-l-2xl md:mt-0 md:ml-0 md:rounded-none md:pb-20'
          id='how_it_works'
        >
          <section className='pt-4 md:mt-10 md:w-[85%] md:mx-auto'>
            <div className='mb-8'>
              <h2
                className='text-white text-[1.6rem] font-semibold 
              leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem] md:font-semibold'
              >
                What Paytyme has to offer
              </h2>
              <p className='mt-1 text-white font-inter text-[15px] font-[300] leading-6 w-[90%] md:w-[38%] md:text-[16px]'>
                With Paytyme app, you are rest assured that all your payments
                and bills will be settled in one place.
              </p>
            </div>
            <div className='content overflow-x-scroll'>
              <div className='flex space-x-6 w-[550px] md:w-[700px]'>
                {/* single offer */}
                {Offers?.map(({ id, icon, title, content, coming_soon }) => (
                  <div
                    key={id}
                    className='bg-white p-7 relative rounded-2xl min-w-[265px] md:min-w-[285px]'
                  >
                    <span> {icon} </span>
                    <span className='text-[#000000] font-semibold block pt-2 text-lg'>
                      {title}
                    </span>
                    <p className='text-isGray font-inter font-[400] text-[13px] leading-5 pt-3'>
                      {content}
                    </p>
                    {coming_soon && (
                      <div className='flex items-center absolute top-5 right-5 space-x-2 font-normal bg-[#F5F5FD] p-2 px-3 rounded-md'>
                        {" "}
                        <span>
                          {" "}
                          <SVGS.PADLOCK_ICON />{" "}
                        </span>{" "}
                        <span className='text-isPurple300'>
                          {" "}
                          Coming Soon!
                        </span>{" "}
                      </div>
                    )}
                  </div>
                ))}
                {/* end single offer */}
              </div>
            </div>
          </section>
        </div>
        {/* End Our Offer */}

        {/* Make Payment */}
        <section className='bg-isSkyBlue50 p-4 md:py-24' id='services'>
          <section className='flex flex-col md:grid md:grid-cols-2 md:gap-5 py-6 md:w-[85%] md:mx-auto md:items-center md:bg-white md:rounded-2xl md:border md:border-isSkyBlue100 md:py-0'>
            <aside className='bg-white rounded-lg border border-isSkyBlue100 order-2 md:-order-1 flex justify-center relative overflow-hidden md:rounded-none md:border-none md:rounded-l-2xl'>
              <img
                className='w-[60%] pt-8 md:w-[55%] relative z-20'
                src={IMAGES.IPHONE_2}
                alt=''
              />
              <img
                className='absolute left-0 z-10 h-full md:rounded-l-2xl'
                src={IMAGES.IPHONE_BG_1}
                alt=''
              />
            </aside>
            <aside className='mb-16'>
              <h2
                className='text-isSkyBlue400 text-[2.2rem] font-semibold 
                  leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem]'
              >
                Make Payment with ease and speed
              </h2>
              <p className='font-inter text-isDark400 font-[400] my-6  md:w-[68%]'>
                With Paytyme, your payment is made simple and easy. Make payment
                for your electricity bills with ease
              </p>

              <div className='grid grid-cols-2 space-x-4 mt-6 lg:w-[57%]'>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 text-white w-[180px]'>
                  <img className='' src={IMAGES.APPLE_ICON} alt='apple-icon' />
                  <div className='flex flex-col space-y-1'>
                    <span className='text-xs tracking-[0.09rem]'>
                      Download on the
                    </span>
                    <h2 className='leading-3 text-[1.1rem] font-medium'>
                      App Store
                    </h2>
                  </div>
                </div>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 w-fit text-white'>
                  <img className='' src={IMAGES.GOOGLE_ICON} alt='apple-icon' />
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
            </aside>
          </section>
        </section>
        {/* End Make Payment */}

        {/* Get Our App */}
        <section className='bg-isSkyBlue500 p-4 pb-0 md:py-24 md:ml-[8%] md:p-0 md:rounded-l-2xl'>
          <section className='flex flex-col md:grid md:grid-cols-2 md:gap-5 pt-6 md:ml-[8%] md:items-center md:py-0'>
            <aside className='mb-8'>
              <h2
                className='text-white text-[2.2rem] font-semibold 
                  leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem]'
              >
                Get the <span className='text-isSkyBlue550'>Paytyme</span>{" "}
                <br /> mobile app
              </h2>
              <p className='font-inter text-white font-[400] my-4 w-[85%] md:w-[68%]'>
                With Paytyme app, you are rest assured that all your payments
                and bills will be settled in one place.
              </p>

              <div className='grid grid-cols-2 space-x-4 lg:w-[57%]'>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 text-white w-[180px]'>
                  <img className='' src={IMAGES.APPLE_ICON} alt='apple-icon' />
                  <div className='flex flex-col space-y-1'>
                    <span className='text-xs tracking-[0.09rem]'>
                      Download on the
                    </span>
                    <h2 className='leading-3 text-[1.1rem] font-medium'>
                      App Store
                    </h2>
                  </div>
                </div>
                <div className='flex space-x-2 p-1.5 px-3 cursor-pointer rounded-[5px] bg-isSkyBlue600 hover:bg-isSkyBlue550 w-fit text-white'>
                  <img className='' src={IMAGES.GOOGLE_ICON} alt='apple-icon' />
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
            </aside>
            <aside className='flex justify-center relative overflow-hidden'>
              <div className='md:hidden'>
                <img
                  className='md:w-[55%] relative'
                  src={IMAGES.LADY_1_MOBILE}
                  alt=''
                />
              </div>
              <div className='hidden md:block'>
                <img
                  className='rounded-l-2xl relative'
                  src={IMAGES.LADY_2}
                  alt=''
                />
              </div>
            </aside>
          </section>
        </section>
        {/* End Get Our App */}

        {/* Get In Touch */}

        <Contact />

        {/* End Get In Touch */}
      </main>
      {/* Main */}

      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
};

export default Home;
