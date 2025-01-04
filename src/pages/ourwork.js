import Header from '@/components/Header'
import React from 'react'
import Image from "next/image";
import Footer from '@/components/Footer';
export default function ourwork() {
  const services = [
    {
      title: "Website Designing & Development",
      image: "/images/img1.webp",
      points: [
        "PHP Development",
        "WordPress Development",
        "Laravel Development",
        "React JS Development",
      ],
    },
    {
      title: "E-Commerce Web Solution",
      image: "/images/img2.webp",
      points: [
        "Woocommerce Development",
        "Shopify Development",
        "PHP Development",
        "Codeigniter Development",
      ],
    },
    {
      title: "Mobile Application Development - Android",
      image: "/images/img6.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development - iOS",
      image: "/images/img4.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development - Cross-Platform",
      image: "/images/img5.png",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development - Web",
      image: "/images/img6.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
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
  return (
    <div>
      <Header/>
      <section>
        <div
          className="md:h-[450px] h-[250px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/moon.jpg')" }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-bold text-center px-4">
              Unlocking the potential of your business with cutting-edge solutions
            </h1>
          </div>
        </div>
      </section>
      
      <section className="bg-blue-300">
      <div className="relative overflow-hidden mx-auto max-w-[1300px] py-4">
        {/* Scrolling content */}
        <div className="flex lg:gap-8 gap-4 lg:text-xl text-xs animate-marquee whitespace-nowrap">
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

        {/* card */}
        <section className='bg-gray-100'>
            <div className="mx-auto max-w-[1300px] ">
              <div className="text-black font-semibold  text-center py-10">
                <h1 className="text-bold lg:text-4xl text-2xl">We Provide The Best Services</h1>
              </div>
              <div className="min-h-screen p-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12">
                  {services.map((service, index) => (
                    <div key={index} className=" border hover:scale-105 duration-300 hover:shadow-md hover:shadow-gray-400   rounded-lg shadow-lg p-6">
                      <Image src={service.image} alt={service.title} width={400} height={200} className="rounded-md mb-4" />
                      <h2 className="text-xl font-bold mb-4">{service.title}</h2>
                      <ul className="space-y-2 text-gray-600 ">
                        {service.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-green-500 stroke-2">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                          {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className=' mx-auto lg:py-20 py-7 max-w-[1300px]'>
          <div>
              <h1 class="sm:text-3xl text-2xl font-bold title-font text-center lg:pb-14 pb-5  ">Technology We Use</h1>
          </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-1.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">Next.JS</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">Next.js is a cutting-edge web development technology that allows for lightning-fast performance and seamless server-side rendering, making it the perfect choice for modern web applications.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-2.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">React</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">React is a popular JavaScript library for building user interfaces, providing a declarative and efficient way to create complex UIs with reusable components.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-3.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">HTML</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">HTML (Hypertext Markup Language) is the foundation of web development, used to create the structure and content of web pages, and is essential for building any modern website.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-4.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">CSS</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">CSS (Cascading Style Sheets) is a crucial web development technology used to style and format web pages, allowing for creative and dynamic visual designs that enhance the user experience.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-5.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">Flutter</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">Flutter is a mobile app development framework powered by Google, enabling developers to build natively compiled, high-performance apps for iOS, Android, and the web using a single codebase.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-6.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">Amazon Web Services</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">AWS (Amazon Web Services) is a comprehensive cloud computing platform that provides a broad range of on-demand services, allowing businesses to scale and grow while minimizing their infrastructure costs.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-7.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">Microsoft Azure</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">Microsoft Azure is a cloud computing platform that provides a wide range of services, including computing, analytics, storage, and networking, enabling businesses to build, deploy, and manage applications with ease.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-8.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">Node JS</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">Node.js is a powerful open-source server-side JavaScript runtime environment that allows developers to build scalable, high-performance web applications using JavaScript on both the server and client-side.</p>
                </div>
              </div>
            </div>
            <div class="p-4   ">
              <div class="flex rounded-2xl hover:scale-105 duration-200 hover:shadow-md bg-opacity-50 hover:shadow-gray-200 h-full bg-slate-300 p-6 flex-col">
                <div class="flex gap-3 items-center mb-3">
                  <img class="w-[80px] shadow-md rounded-full" alt="Triggrs Web Solutions uses Next.JS Technology" src="images/tech-9.png"/>
                  <h2 class="text-slate-800 text-2xl font-bold">MongoDB</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base text-black">MongoDB is a NoSQL document-oriented database that provides scalability, flexibility, and high performance, making it a popular choice for building modern web applications.</p>
                </div>
              </div>
            </div>
        </div>
        </section>
          <Footer/>
    </div>
  )
}
