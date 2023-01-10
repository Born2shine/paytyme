import React from 'react'
import * as ICONS from "../../assets/icons";
import * as IMAGES from "../../assets/";

const Contact = () => {
  return (
    <section className='bg-isSkyBlue50 p-4 pt-20 md:py-24' id="contact">
          <div className='md:w-[85%] md:mx-auto'>
            <div className='mb-8 text-center'>
              <h2
                className='text-isSkyBlue400 text-[2.2rem] font-semibold 
                    leading-[2.6rem] md:text-[3.5rem] md:leading-[3.8rem]'
              >
                Get in Touch
              </h2>
              <p className='font-inter text-isGray font-[400] my-4 md:w-[35%] md:mx-auto'>
                You can get in touch with us with any of the contact details or
                using the form below.
              </p>
            </div>
            <div className='flex flex-col justify-between md:shadow-sm md:bg-white md:rounded-xl md:flex-row md:justify-start'>
              <aside className='bg-skyBlue500 p-8 pb-40 md:w-2/6 md:rounded-lg relative overflow-hidden md:pb-48'>
                <div className='mb-4'>
                  <h5 className='text-white text-[1.4rem] font-[400]'>
                    Contact Information
                  </h5>
                  <p className='text-[15px] font-normal text-sky-300 leading-4'>
                    Don't hesitate to contact us if you have any questions.
                  </p>
                </div>
                <div className='mt-8'>
                  <div className='flex items-center space-x-4 text-white'>
                    <span className='text-2xl'>
                      <ICONS.MdPhoneInTalk />
                    </span>
                    <div className='flex flex-col font-inter font-[400] leading-7'>
                      <span>+23490 3668 8636</span>
                      <span>+23480 2832 0651</span>
                    </div>
                  </div>

                  <div className='flex items-center space-x-4 text-white mt-5 border-t border-t-[#43A5DF] pt-5'>
                    <span className='text-2xl'>
                      <ICONS.BiEnvelope />
                    </span>
                    <div className='flex flex-col font-inter font-[400] leading-7'>
                      <span>admin@paytyme.com.ng</span>
                      <span>support@paytyme.com.ng</span>
                    </div>
                  </div>
                </div>
                <img
                  className='absolute left-0 bottom-0 w-[80%]'
                  src={IMAGES.PHONE}
                  alt=''
                />
              </aside>
              <aside className='-order-1 md:order-1 mb-8'>
                <div className='md:w-[85%] md:mx-auto md:mt-10'>
                  <form action=''>
                    <div className='justify-between'>
                      <div className='md:grid md:grid-cols-2 md:space-x-10'>
                        <div className='mb-6'>
                          <span className='font-inter font-[400] text-sm text-[#B5B5B5] md:text-md'>
                            First Name
                          </span>
                          <input
                            type='text'
                            className='text-isDark300 placeholder:text-isDark300 bg-isSkyBlue50 font-inter font-[400] border-b border-b-[#B8DDF3] focus:outline-none focus:border-b-[#4492c0] pb-2 pt-3 w-full md:bg-white'
                            placeholder='John'
                          />
                        </div>

                        <div className='my-4 md:mt-0'>
                          <span className='font-inter font-[400] text-sm text-[#B5B5B5] md:text-md'>
                            Last Name
                          </span>
                          <input
                            type='text'
                            className='text-isDark300 placeholder:text-isDark300 font-inter font-[400] border-b border-b-[#B8DDF3] focus:outline-none focus:border-b-[#4492c0] pb-2 pt-3 w-full bg-isSkyBlue50 md:bg-white'
                            placeholder='Doe'
                          />
                        </div>
                      </div>

                      <div className='md:grid md:grid-cols-2 md:space-x-10'>
                        <div className='mb-6'>
                          <span className='font-inter font-[400] text-sm text-[#B5B5B5] md:text-md'>
                            Email
                          </span>
                          <input
                            type='email'
                            className='text-isDark300 placeholder:text-isDark300 bg-isSkyBlue50 font-inter font-[400] border-b border-b-[#B8DDF3] focus:outline-none focus:border-b-[#4492c0] pb-2 pt-3 w-full md:bg-white'
                            placeholder='johndoe@gmail.com'
                          />
                        </div>

                        <div className='my-4 md:mt-0'>
                          <span className='font-inter font-[400] text-sm text-[#B5B5B5] md:text-md'>
                            Subject
                          </span>
                          <input
                            type='text'
                            className='text-isDark300 placeholder:text-isDark300 font-inter font-[400] border-b border-b-[#B8DDF3] focus:outline-none focus:border-b-[#4492c0] pb-2 pt-3 w-full bg-isSkyBlue50 md:bg-white'
                            placeholder='How can we help you?'
                          />
                        </div>
                      </div>

                      <div className=''>
                        <div className='mb-6'>
                          <span className='font-inter font-[400] text-sm text-[#B5B5B5] md:text-md'>
                            Message
                          </span>
                          <input
                            type='text'
                            className='text-isDark300 placeholder:text-isDark300 bg-isSkyBlue50 font-inter font-[400] border-b border-b-[#B8DDF3] focus:outline-none focus:border-b-[#4492c0] pb-2 pt-3 w-full md:bg-white'
                            placeholder='Write your message here!'
                          />
                        </div>
                      </div>

                      <button className='bg-skyBlue500 hover:bg-sky-600 text-white p-3 rounded-md font-normal mt-3 w-full md:w-auto md:px-8'>
                        {" "}
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </section>
  )
}

export default Contact