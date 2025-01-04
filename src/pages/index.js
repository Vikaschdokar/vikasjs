"ues clinet"
import { HoverEffect } from "@/compo/ui/card-hover-effect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OurCustomers from "@/components/Slider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation } from 'swiper/modules';


export default function HomePage() {


  const projects = [
    {
      title: "Web Design and Development",
      description: "Web design and development are the key components of creating websites that are visually appealing, user-friendly, and optimized for performance.",
    },
    {
      title: "Ecommerce Development",
      description: "It involves designing and developing e-commerce websites, integrating payment gateways, setting up product catalogs, implementing shopping carts, and managing order processing and fulfillment.",
    },
    {
      title: "Maintenance and Support",
      description: "Performance optimization is also a key component of technology maintenance. As technology is used, it may accumulate data, temporary files, or other resources that can impact its performance over time.",
    },
    {
      title: "API Development",
      description: "APIs allow different software applications and systems to communicate and interact with each other, enabling businesses to create seamless integrations, deliver innovative solutions, and enhance their overall operations.",
    },
    {
      title: "Back-end Web Development",
      description: "It involves building and maintaining the server-side infrastructure that supports the front-end user interface and enables data processing, storage, and retrieval.",
    },
    {
      title: "Technology Integration",
      description: "It requires careful planning, implementation, and ongoing management to ensure that systems are integrated seamlessly and work together harmoniously.",
    },
  ];
  const items = [
    "Fast Delivery",
    "24/7 Support",
    "Quality Work",
    "Timely Updates",
    "Creative People",
    "Good Reviews",
    "Affordable Prices",
  ];
  const accordionData = [
    {
      question: "What services do you provide?",
      answer:
        "We offer a variety of services, including web development, SEO, digital marketing, and more.",
    },
    {
      question: "What is engine optimization (SEO)?",
      answer:
        "SEO is the process of optimizing your website to rank higher in search engine results, increasing visibility and traffic.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies such as React, Next.js, Node.js, Tailwind CSS, and more to deliver high-quality solutions.",
    },
    {
      question: "Why choose us for your website design?",
      answer:
        "We provide customized, user-friendly, and visually appealing designs tailored to your business needs.",
    },
    {
      question: "How long does it take to complete my website?",
      answer:
        "The timeline depends on the complexity of the project, but we strive to deliver most websites within 4–6 weeks.",
    },
  ];

  // State to track active accordion item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle accordion toggle
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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

const content = [
    {
      title: "Web Design and Development",
      description:
        "Web development is the process of creating websites and web applications using a variety of programming languages and technologies. It encompasses everything from designing the user interface to coding the back-end functionality and deploying the website to a server. A successful website requires a team of experienced web developers who stay up-to-date with the latest trends and technologies. With the right tools and expertise, a web development team can create websites that are fast, secure, and optimized for search engines, resulting in increased traffic and higher conversion rates. ",
        content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image src="/images/Web-Design-and-Development.png" width={500} height={500} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "E-Commerce Development",
      description:
      "E-Commerce Development involves creating an online platform for businesses to sell products and services to customers over the internet. This process requires choosing an e-commerce platform that suits the business needs, designing an appealing and user-friendly website, integrating payment gateways for online payments, setting up a product catalog with detailed descriptions and images, implementing robust security measures to protect customer information, and promoting the business through various marketing strategies. E-commerce development has become increasingly popular due to the rise of technology and the internet, and it offers businesses a way to expand their sales channels and reach new customers.",
     content: (
        <div className="overflow-hidden  flex items-center justify-center text-white">
          <Image src="/images/Ecommerce-Development.png" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Maintenance and Support",
      description:
      "Maintenance and Support services are essential for ensuring that applications and systems are operating optimally and efficiently. A TriggrsWeb Solutions offers various maintenance and support services to help clients maintain their software solutions. These services include corrective, adaptive, and perfective maintenance that addresses bugs, changes in business environment or user requirements, and enhancement of existing features or the addition of new ones. Regular maintenance and support services are crucial for minimizing downtime, ensuring system stability, and maintaining high levels of customer satisfaction. The development company provides technical expertise and experience to identify and resolve any issues quickly and efficiently, keeping the software running smoothly and meeting its intended objectives.",
      content: (
        <div className=" overflow-hidden  flex items-center justify-center text-black">
        <Image src="/images/Maintenance-and-Support.png" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
      </div>
      ),
    },
    {
      title: "API-Development",
      description:
        "API development involves creating a set of protocols and tools that enable software applications to communicate with each other. This allows for seamless integration and exchange of data between different systems. API development includes designing and building the API, selecting the appropriate programming languages and tools, defining endpoints and methods, and designing the data format and schema. Clear and concise API documentation is also essential for ensuring that developers can easily understand and use the API. Other key aspects of API development include testing, versioning, and security to ensure that the API is reliable, scalable, and secure. APIs are becoming increasingly popular due to their ability to enable interoperability between different systems and provide more efficient ways of building software applications.",
      content: (
        <div className="overflow-hidden  flex items-center justify-center text-black">
          <Image src="/images/API-Development.png" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
    {
      title: "Technology Integration",
      description:
        "Technology integration is the process of incorporating new technologies into an organization's existing systems and processes. This can range from implementing new software applications to upgrading hardware infrastructure. Effective technology integration can improve organizational efficiency, enhance productivity, and improve customer satisfaction.Benefits of technology integration can include improved efficiency, increased productivity, reduced costs, improved data accuracy, and enhanced customer experience. Successful technology integration can help organizations stay competitive in a rapidly changing technological landscape.",
      content: (
        <div className="overflow-hidden  flex items-center justify-center text-black">
          <Image src="/images/Technology-Integration.png" width={300} height={300} className="h-full w-full object-cover" alt="linear board demo" />
        </div>
      ),
    },
  ];
  return (
    <>
      <Header />
      <div className="relative ">
        <div className="flex h-screen">
          <div className="w-full">
            <video src="/images/v1.mp4" type="video/mp4" autoPlay loop muted className="h-full w-full object-cover "></video>
          </div>
        </div>
        {/* Overlay text */}
        <div className="absolute top-0 bg-black/30 left-0 right-0 bottom-0  z-20 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center py-6 text-white ">
             Building a smarter, more efficient future through technology
          </h1>
        </div>
       
      </div>
          
    <section className="bg-blue-300">
      <div className="relative overflow-hidden mx-auto max-w-[1300px] py-4">
        {/* Scrolling content */}
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-lg font-semibold text-gray-800 flex items-center"
            >
              {item} <span className="mx-4 text-xl">✷</span>
            </div>
          ))}
          {/* Duplicate items for seamless loop */}
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="text-lg font-semibold text-gray-800 flex items-center"
            >
              {item} <span className="mx-4 text-xl">✷</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </section>

      {/* Hero Section */}
          <section className=""> 
                <div className="text-gray-600 body-font mx-auto max-w-[1300px]">
              <div className="container mx-auto flex px-5 gap-5 lg:py-18 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    We build custom solutions to elevate your brand and drive growth.
                  </h1>
                  <p className="mb-8 leading-relaxed text-gray-500">
                    Our website development company provides tailored solutions to
                    businesses of all sizes. Our team of experts combines technical
                    expertise and creative design to bring your vision to life on the
                    web.
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white text-sm lg:text-lg bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded ">
                      Know more
                    </button>
                    <button className="ml-4 inline-flex text-gray-700 text-sm lg:text-lg bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded ">
                      Discuss A Project
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <img className="object-cover object-center  w-[500px] h-[400] rounded-tl-[100px] rounded-2xl" alt="hero" src="/images/home1.jpg" />
                </div>
              </div>
            </div>
          </section>

      {/* Projects Section */}
          <section className="py-10"> 
          <div className="max-w-5xl  mx-auto text-2xl">
              <h2 className="text-center  lg:text-4xl  text-2xl">What We Do</h2>
              <HoverEffect items={projects} />
            </div>
          </section>
        
        {/* why tw */}
             <section className="bg-blue-100 px-4">
                <div className="mx-auto max-w-[1300px] py-10 ">
                  <div className="flex flex-col md:flex-row">
                  <div className="lg:py-20 ">
                    <h2 className="font-semibold text-3xl py-3 text-black">Why triggrsweb ?</h2>
                    <p className="text-gray-500">We believe in integrity, innovation, constant improvement, commitment to customers, teamwork and trust. We provide high-level planning and infrastructure consulting through technology partnerships. We work on developing your technology implementation and management plan.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-3 text-white rounded-xl my-5 lg:my-8">More About Us</button>
                  </div>
                     <div className="">
                        <div className="flex bg-white/50 p-3 rounded-lg  m-5 duration-300 hover:shadow-md hover:shadow-gray-400">
                          <div> <img className="items-center w-52 text-center" src="/images/expert-team.webp"/></div>
                          <div className="px-3">
                            <h3 className="text-black text-2xl pb-2">Expert Team</h3>
                            <p className="text-gray-500 text-sm">At Triggrsweb, we believe in quality, so we have a more comprehensive, versatile, and skilled team that will go above and beyond to meet the needs of our clients.</p>
                          </div>
                        </div>
                        <div className="flex bg-white/50 p-3 rounded-lg  m-5 duration-300 hover:shadow-md hover:shadow-gray-400">
                          <div> <img className="items-center w-52 text-center" src="/images/commited.webp"/></div>
                          <div className="px-3">
                            <h3 className="text-black text-2xl pb-2">Committed to delivery</h3>
                            <p className="text-gray-500 text-sm">At Triggrsweb, we believe in quality, so we have a more comprehensive, versatile, and skilled team that will go above and beyond to meet the needs of our clients.</p>
                          </div>
                        </div>
                        <div className="flex bg-white/50 p-3 rounded-lg  m-5 duration-300 hover:shadow-md hover:shadow-gray-400">
                          <div> <img className="items-center w-52 text-center" src="/images/24-hour.webp"/></div>
                          <div className="px-3">
                            <h3 className="text-black text-2xl pb-2">Expert Team</h3>
                            <p className="text-gray-500 text-sm">At Triggrsweb, we believe in quality, so we have a more comprehensive, versatile, and skilled team that will go above and beyond to meet the needs of our clients.</p>
                          </div>
                        </div>
                     </div>
                  </div>
                </div>
              </section>

         {/* Our Customers */}
          {/* <section>
          <div className="bg-white py-6 mt-5 lg:py-16">
                <div className="mx-auto lg:max-w-[1200px] px-5">
                    <h2 className="font-bold text-gray-800 text-center text-2xl lg:text-4xl">Our  Customers</h2>
                  <div className="py-5 lg:mt-2 mx-auto">
                    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 ">
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-1.png" alt="Krrunch cafe developed by Triggrs Web Solutions" />
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-2.png" alt="Eboli developed by Triggrs Web Solutions" />
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-3.png" alt="Oness infra pvt. Ltd. developed by Triggrs Web Solutions" />
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-4.png" alt="Sarthak Singapore developed by Triggrs Web Solutions developed by Triggrs Web Solutions" />
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-5.png" alt="Sidhhivinayak Pest Control and fumigation developed by Triggrs Web Solutions" />
                        <img className="border-gray-200 shadow-md rounded-lg" src="/images/clients/client-6.png" alt="Barrister Babu developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="/images/clients/client-7.png" alt="Adinath Poly Plast Pvt. Ltd." />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-8.png" alt="Magam Industried developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="/images/clients/client-9.png" alt="DJ Consultants developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-10.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-11.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-12.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-14.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-15.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-16.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-17.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-18.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-19.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        <img className="hidden md:block border-gray-200 shadow-md rounded-lg" src="images/clients/client-20.png" alt="Mystay Rooms developed by Triggrs Web Solutions" />
                        
                    </div>
                    <a href="/our-customers"><button  class="flex mx-auto lg:mt-12 mt-6 text-white bg-slate-800 border-0 py-1.5 px-4 focus:outline-none  rounded-lg text-base lg:text-lg">View more</button></a>
                </div>
                </div>
              </div>
          </section> */}
            <div>
              <OurCustomers />
            </div>
          
          
         
          {/* customer */}
          <section>
            <div className="max-w-[1300px] mx-auto pt-10 p-4">
                <div className="md:flex gap-5">
                <div className="lg:w-1/2">
                  <h3 className="md:text-3xl text-xl font-semibold">We’re Delivering The Best Customer Experience!</h3>
                  <img className="w-[500px] p-5" src="/images/indai_websoft.webp"/>
               </div>
               <div className="lg:w-1/2 p-6">
                {accordionData.map((item, index) => (
                  <div key={index} className="border-b border-gray-300  py-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
                    {/* Question */}
                    <div className="flex justify-between  items-center">
                      <h3 className="font-medium text-2xl  text-gray-800">
                        {`${index + 1}. ${item.question}`}
                      </h3>
                      <span className="text-xl text-gray-500 ">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* Answer (conditionally rendered) */}
                    {activeIndex === index && (
                      <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
                </div>
            </div>
          </section>
            {/* our services */}
            {/* <section >
                <div className="py-10 ">
                <StickyScroll content={content} />
                </div>
            </section> */}

              
          <section className="py-10 lg:py-20 " style={{ backgroundImage: "url('/images/imggg.jpg')" }}>
                <div className=" mx-auto max-w-[1300px] px-4">
                 <div className="mb-8 text-center">
                 <h3 className=" text-3xl text-white font-semibold">Industries that we serve</h3>
                  <p className="text-lg text-gray-300 mt-4">We achieved the business transformation objectives by utilising advanced technology to produce exceptional results. Working with clients from around the world has aided us in developing a comprehensive approach and knowledge base to meet a wide range of industries' unique requirements.</p>
                </div>
                <div className="grid gap-6 grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg  bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300 hover:border bg-opacity-20  duration-200">
                    <img className="w-12 h-12 object-contain " src="/images/aro.png"/>
                    <p className="text-white">Arospace</p>
                  </div>
                 </div>
                </div>
          </section>

          {/* testimonial */}
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
      

       {/* Infinite Moving Cards Section */}
      {/* <section>
          <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
           
            <video className="absolute inset-0 w-full h-full object-cover z-[-1]" src="/images/v1.mp4" autoPlay loop muted playsInline/>
            
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
          </div>
        </section> */}
       <Footer/>
    </>
  );
}
