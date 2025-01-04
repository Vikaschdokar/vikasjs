// import Header from '@/components/Header'
 import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation } from 'swiper/modules';

 export default function contect() {
  const testimonial = [
    {
      name: "John Doe",
      title: "CEO, Tech Innovators",
      image: "/images/Dr.-Victoria-Ossadnik.avif", // Replace with your image path
      quote:
        "This platform has completely transformed the way we handle our business processes. The team is amazing, and the technology !",
    },
    {
      name: "Jane Smith",
      title: "Marketing Head, Creative Solutions",
      image: "/images/Dr.-Victoria-Ossadnik.avif", // Replace with your image path
      quote:
        "An outstanding experience! The solutions provided were tailored perfectly to our needs. Highly recommended!",
    },
    {
      name: "Michael Brown",
      title: "CTO, Global Systems",
      image: "/images/Dr.-Victoria-Ossadnik.avif", // Replace with your image path
      quote:
        "Their expertise and dedication are unparalleled. We achieved results beyond our expectations. A true game-changer!",
    },
    {
      name: "Michael Brown",
      title: "CTO, Global Systems",
      image: "/images/Dr.-Victoria-Ossadnik.avif", // Replace with your image path
      quote:
        "Their expertise and dedication are unparalleled. We achieved results beyond our expectations. A true game-changer!",
    },
    {
      name: "Michael Brown",
      title: "CTO, Global Systems",
      image: "/images/Dr.-Victoria-Ossadnik.avif", // Replace with your image path
      quote:
        "Their expertise and dedication are unparalleled. We achieved results beyond our expectations. A true game-changer!",
    },
  ];
  return (

    <>
    <Header/>

    {/* Hero Section */}
      {/* <section
        className="relative bg-cover mt-[40px] h-[850px] lg:h-[550px] md:h-[500px]"
        style={{ backgroundImage: "url('/images/contect-us.jpg')" }}
      >
        <div className='absolute inset-0 bg-black/70'>
        <div className="lg:max-w-[1000px] px-5  py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-9 lg:mt-20">
            <h1 className="text-3xl lg:text-5xl font-medium mb-4 text-gray-200">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto font-medium text-base text-gray-300">
              "Get in Touch and Let's Create Something Amazing Together!"
            </p>
          </div>
        </div>
        <div class="flex flex-wrap  text-center mx-auto max-w-[1400px]  ">
            <div class="p-2 md:w-1/3 w-full">
              <div class="bg-white hover:border hover:shadow-lg duration-200 border-[#0989FF]  px-4 py-6 rounded-xl">
                <svg class="w-16 shadow-xl rounded-full inline-block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M18.375 8.625H15.9375C15.291 8.625 14.671 8.88181 14.2139 9.33893C13.7568 9.79605 13.5 10.416 13.5 11.0625V28.9375C13.5 29.584 13.7568 30.204 14.2139 30.6611C14.671 31.1182 15.291 31.375 15.9375 31.375H24.0625C24.709 31.375 25.329 31.1182 25.7861 30.6611C26.2432 30.204 26.5 29.584 26.5 28.9375V11.0625C26.5 10.416 26.2432 9.79605 25.7861 9.33893C25.329 8.88181 24.709 8.625 24.0625 8.625H21.625M18.375 8.625V10.25H21.625V8.625M18.375 8.625H21.625M18.375 28.9375H21.625" stroke="url(#paint0_linear_6074_90)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_6074_90" x1="20" y1="8.625" x2="20" y2="31.375" gradientUnits="userSpaceOnUse"><stop stop-color="#0989FF"/><stop offset="1" stop-color="#536EFF"/></linearGradient></defs> </svg>
                <h2 class=" font-medium text-xl mt-3 text-gray-900">Mobile</h2>
                <p class="leading-relaxed text-gray-600 text-base">+91 6268839263</p>
              </div>
            </div>
            <div class="p-2 md:w-1/3 w-full">
              <div class="bg-white hover:border hover:shadow-lg duration-200 border-[#0989FF] px-4 py-6 rounded-xl">
                <svg class="w-16 shadow-xl rounded-full inline-block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" fill="white"/> <path d="M30.5625 14.3125V25.6875C30.5625 26.334 30.3057 26.954 29.8486 27.4111C29.3915 27.8682 28.7715 28.125 28.125 28.125H11.875C11.2285 28.125 10.6085 27.8682 10.1514 27.4111C9.69431 26.954 9.4375 26.334 9.4375 25.6875V14.3125M30.5625 14.3125C30.5625 13.666 30.3057 13.046 29.8486 12.5889C29.3915 12.1318 28.7715 11.875 28.125 11.875H11.875C11.2285 11.875 10.6085 12.1318 10.1514 12.5889C9.69431 13.046 9.4375 13.666 9.4375 14.3125M30.5625 14.3125V14.5758C30.5625 14.9919 30.456 15.4011 30.2531 15.7645C30.0502 16.1278 29.7577 16.4332 29.4033 16.6514L21.2783 21.651C20.894 21.8877 20.4514 22.0131 20 22.0131C19.5486 22.0131 19.106 21.8877 18.7217 21.651L10.5967 16.6525C10.2423 16.4342 9.94978 16.1289 9.74687 15.7656C9.54396 15.4022 9.43745 14.993 9.4375 14.5768V14.3125" stroke="url(#paint0_linear_6074_88)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <defs> <linearGradient id="paint0_linear_6074_88" x1="20" y1="11.875" x2="20" y2="28.125" gradientUnits="userSpaceOnUse"> <stop stop-color="#0989FF"/> <stop offset="1" stop-color="#536EFF"/> </linearGradient> </defs> </svg> 
                <h2 class="font-medium text-xl mt-3 text-gray-900">Email</h2>
                <p class="leading-relaxed text-gray-600 text-base">sales@triggrsweb.com</p>
              </div>
            </div>
            
             </div>
           </div>
  
      </section> */}

      {/* Contact Section */}
      <section className=" z-10  bg-[url('/images/contect-us.jpg')] bg-cover bg-center ">
       <div className='bg-black/40 pt-20 lg:pt-[120px] p-3'>
       <div className="max-w-[1200px] mx-auto rounded-lg shadow-lg">
          <div className="flex flex-wrap lg:justify-between">
            <div className="w-full lg:px-6 lg:w-1/2">
              
            <div className="mb-12 max-w-[570px] ">
                <h2 className="mb-6">
                  <p className="text-[32px] text-dark font-bold  text-white sm:text-[40px] lg:text-[36px]">
                    Contact Triggrsweb
                  </p>
                  <p className="text-lg text-gray-100">
                    Your tech transformation is just a message away — connect with Triggrsweb, India's trusted innovation partner!
                  </p>
                </h2>
                
                <div class="p-2 w-full">
                  <div class="bg-white flex gap-4 hover:border hover:shadow-lg duration-200 border-[#0989FF] px-4 py-6 rounded-xl">
                    <div>
                    <svg class="w-16 shadow-xl rounded-full inline-block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" fill="white"/> <path d="M30.5625 14.3125V25.6875C30.5625 26.334 30.3057 26.954 29.8486 27.4111C29.3915 27.8682 28.7715 28.125 28.125 28.125H11.875C11.2285 28.125 10.6085 27.8682 10.1514 27.4111C9.69431 26.954 9.4375 26.334 9.4375 25.6875V14.3125M30.5625 14.3125C30.5625 13.666 30.3057 13.046 29.8486 12.5889C29.3915 12.1318 28.7715 11.875 28.125 11.875H11.875C11.2285 11.875 10.6085 12.1318 10.1514 12.5889C9.69431 13.046 9.4375 13.666 9.4375 14.3125M30.5625 14.3125V14.5758C30.5625 14.9919 30.456 15.4011 30.2531 15.7645C30.0502 16.1278 29.7577 16.4332 29.4033 16.6514L21.2783 21.651C20.894 21.8877 20.4514 22.0131 20 22.0131C19.5486 22.0131 19.106 21.8877 18.7217 21.651L10.5967 16.6525C10.2423 16.4342 9.94978 16.1289 9.74687 15.7656C9.54396 15.4022 9.43745 14.993 9.4375 14.5768V14.3125" stroke="url(#paint0_linear_6074_88)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <defs> <linearGradient id="paint0_linear_6074_88" x1="20" y1="11.875" x2="20" y2="28.125" gradientUnits="userSpaceOnUse"> <stop stop-color="#0989FF"/> <stop offset="1" stop-color="#536EFF"/> </linearGradient> </defs> </svg> 
                    </div>
                     <div>
                     <h2 class="font-medium text-xl mt-3 text-gray-900">Email</h2>
                      <p class="leading-relaxed text-gray-600 text-base">sales@triggrsweb.com</p>
                  </div> 
                  </div>
                </div>
                <div class="p-2  w-full">
                  <div class="bg-white flex gap-4 hover:border hover:shadow-lg duration-200 border-[#0989FF]  px-4 py-6 rounded-xl">
                    <div>
                    <svg class="w-16 shadow-xl rounded-full inline-block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="white"/><path d="M18.375 8.625H15.9375C15.291 8.625 14.671 8.88181 14.2139 9.33893C13.7568 9.79605 13.5 10.416 13.5 11.0625V28.9375C13.5 29.584 13.7568 30.204 14.2139 30.6611C14.671 31.1182 15.291 31.375 15.9375 31.375H24.0625C24.709 31.375 25.329 31.1182 25.7861 30.6611C26.2432 30.204 26.5 29.584 26.5 28.9375V11.0625C26.5 10.416 26.2432 9.79605 25.7861 9.33893C25.329 8.88181 24.709 8.625 24.0625 8.625H21.625M18.375 8.625V10.25H21.625V8.625M18.375 8.625H21.625M18.375 28.9375H21.625" stroke="url(#paint0_linear_6074_90)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_6074_90" x1="20" y1="8.625" x2="20" y2="31.375" gradientUnits="userSpaceOnUse"><stop stop-color="#0989FF"/><stop offset="1" stop-color="#536EFF"/></linearGradient></defs> </svg>
                    </div>
                    <div>
                    <h2 class=" font-medium text-xl mt-3 text-gray-900">Mobile</h2>
                    <p class="leading-relaxed text-gray-600 text-base">+91 6268839263</p>
                  </div>  
                  </div>
                </div>
                <div class="p-2  w-full">
                  <div class="bg-white flex gap-4  hover:border hover:shadow-lg duration-200 border-[#0989FF] px-4 py-6 rounded-xl">
                      <div>
                      <svg class="w-16 shadow-xl rounded-full inline-block" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="20" cy="20" r="20" fill="white"/> <path d="M20 13.5V20H24.875M29.75 20C29.75 21.2804 29.4978 22.5482 29.0078 23.7312C28.5178 24.9141 27.7997 25.9889 26.8943 26.8943C25.9889 27.7997 24.9141 28.5178 23.7312 29.0078C22.5482 29.4978 21.2804 29.75 20 29.75C18.7196 29.75 17.4518 29.4978 16.2688 29.0078C15.0859 28.5178 14.0111 27.7997 13.1057 26.8943C12.2003 25.9889 11.4822 24.9141 10.9922 23.7312C10.5022 22.5482 10.25 21.2804 10.25 20C10.25 17.4141 11.2772 14.9342 13.1057 13.1057C14.9342 11.2772 17.4141 10.25 20 10.25C22.5859 10.25 25.0658 11.2772 26.8943 13.1057C28.7228 14.9342 29.75 17.4141 29.75 20Z" stroke="url(#paint0_linear_6074_89)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <defs> <linearGradient id="paint0_linear_6074_89" x1="20" y1="10.25" x2="20" y2="29.75" gradientUnits="userSpaceOnUse"> <stop stop-color="#0989FF"/> <stop offset="1" stop-color="#536EFF"/> </linearGradient> </defs> </svg> 
                      </div>  
                      <div>
                      <h2 class="font-medium text-xl mt-3 text-gray-900">Opening Hours</h2>
                      <p class="leading-relaxed text-gray-600 text-base">Monday - Saturday (10AM - 7PM)</p>
                      </div>
                   </div>
                </div>            
                
              </div>
              
            </div>
            {/* <svg className="w-[35px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 9H17V11H15V9ZM17 5H15V7H17V5ZM11 15H13V13H11V15ZM13 5H11V7H13V5ZM11 11H13V9H11V11ZM9 5H7V7H9V5ZM9 9H7V11H9V9ZM14.55 21H13V17.5H11V21H5V3H19V11.03C19.71 11.09 20.39 11.31 21 11.63V1H3V23H15.91C15.5 22.44 15 21.76 14.55 21ZM7 19H9V17H7V19ZM9 13H7V15H9V13ZM22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13C20.4 13 22 14.6 22 16.5ZM19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6Z" fill="#3C50E0"/>
               </svg>

            {/* Form Section */}
            <div className="w-full px-3 lg:w-1/2 py-20 xl:w-5/12 ">
              <div className="relative rounded-lg border-2 bg-white bg-gradient-to-r from-triggrsweb to-blue-500 p-4 shadow-lg lg:p-8">
                <form id="contact-form" method="POST">
                  <div className="lg:flex gap-4">
                    <div className="mb-6">
                      <input id="fullName" type="text" placeholder="First Name" className="text-black placeholder:text-gray-500 bg-gray-300/20 w-full rounded-lg py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                    <div className="mb-6">
                      <input id="fullName" type="text" placeholder="Last Name" className="text-black placeholder:text-gray-500 bg-gray-300/20 w-full rounded-lg py-3 px-[14px] text-base outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <input id="email" type="email" placeholder="Your Email" className="text-black placeholder:text-gray-500 bg-gray-300/20 w-full rounded-lg py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input id="mobile" type="tel" placeholder="Your Phone" className="text-black placeholder:text-gray-500 bg-gray-300/20 w-full rounded-lg py-3 px-[14px] text-base outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="budget_range">Your budget range :- </label>
                    <select id="budget_range" name="budget_range" className="border-2 mx-4 text-black bg-gray-300/20 rounded-lg py-3 px-[14px] text-base outline-none"
                    >
                      <option value="More than 1 Lakh">More than 1 Lakh</option>
                      <option value="2-5 Lakh">2-5 Lakh</option>
                      <option value="5-8 Lakh">5-8 Lakh</option>
                      <option value="More than 8 lakh">More than 8 lakh</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <textarea id="messageContact" rows="4" placeholder="Your Idea" className="text-black placeholder:text-gray-500 bg-gray-300/20 w-full rounded-lg py-3 px-[14px] text-base outline-none"
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="Service">Service :- </label>
                    <select id="Service" name="Service" placeholder="Choose service " className="border-2 mx-4 text-black placeholder:text-gray-500 bg-gray-300/20 rounded-lg py-3 px-[14px] text-base outline-none"
                    > <option value="API_developmant">API Development</option>
                      <option value="Cloud_developmant">Cloud Development</option>
                      <option value="Ecommerce_developmant"> Ecommerce Development
                      </option>
                      <option value="SAAS_Developmant">SAAS Development</option>
                      <option value="Custom_Web_developmant"> Custom Web Development
                      </option>
                      <option value="Technology Integration"> Technology Integration
                      </option>
                    </select>
                  </div>
                  <div id="errMsgContact"></div>
                  <button
                    id="contact-submit"
                    type="submit"
                    className="bg-blue-500 border-primary w-full rounded-full border p-3 text-white hover:bg-blue-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
       </div>
      </section>
        

       <section className='lg:py-20 py-5'>
       <div className='mx-auto max-w-[1300px]'>
       <div className='items-center text-center'>
          <h2 className='text-4xl font-bold py-5'>Company overview</h2>
          <p className='text-xl text-gray-500 pb-10'>When it comes to our work, we take utmost pride.</p>
        </div>
            <div className='lg:flex gap-5'>
            <div className='lg:w-1/2 p-5'>
             <div>
                <h3 className='text-2xl font-semibold'>Our experience spans more than 5 years in the IT Industry - and we’re just starting!</h3>
                <h2 className='text-xl py-3'>THE FIRST CHOICE, THE BEST CHOICE!</h2>
                <p className='font-light'>1st choice of professionals – 90% of our clients are fast movers and so we are. When it comes to delivering qualitative work, we excel! We are happy to say that in 2020 and 2023, EngineerBabu is the only service company whose products were nominated in Y-Combinator.</p>
              </div>
              <div>
                <h2 className='text-xl py-3'>THE FIRST CHOICE, THE BEST CHOICE!</h2>
                <p className='font-light'>1st choice of professionals – 90% of our clients are fast movers and so we are. When it comes to delivering qualitative work, we excel! We are happy to say that in 2020 and 2023, EngineerBabu is the only service company whose products were nominated in Y-Combinator.</p>
              </div>
               <div>
                <h2 className='text-xl py-3'>THE FIRST CHOICE, THE BEST CHOICE!</h2>
                <p className='font-light'>1st choice of professionals – 90% of our clients are fast movers and so we are. When it comes to delivering qualitative work, we excel! We are happy to say that in 2020 and 2023, EngineerBabu is the only service company whose products were nominated in Y-Combinator.</p>
              </div>
             </div>
              <div className='lg:w-1/2 p-10 '>
                <img className='rounded-3xl h-[500px] w-[700px]' src='/images/offic.jpeg'/>
              </div>
            </div>
       </div>
       </section>
       <section className="bg-gray-100 lg:py-12 py-5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    What Our Clients Say
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Hear from some of our satisfied customers who have seen real results.
                  </p>
                </div>

                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 1000, // Delay between transitions in milliseconds (3 seconds)
                    disableOnInteraction: false, // Continue autoplay even after user interaction
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                  }}
                  className="mySwiper"
                >
                  {testimonial.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white rounded-lg m-8 shadow-lg p-6 flex flex-col items-center text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                        <p className="mt-4 text-gray-600 italic">"{testimonial.quote}"</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
      
      <Footer/>
    </>
  );
}
