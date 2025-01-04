

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

export default function projects() {
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
      title: "Mobile Application Development",
      image: "/images/img3.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development",
      image: "/images/img4.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development",
      image: "/images/img5.png",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
    {
      title: "Mobile Application Development",
      image: "/images/img6.webp",
      points: [
        "Android Development",
        "IOS Development",
        "Flutter Development",
        "Firebase Development",
      ],
    },
  ];

  return (
  <div className='mt-20'>
    <Header/>
   <div className='mx-auto max-w-[1400px]'>
   <div className='text-white mt-20 text-center py-20'>
          <h1 className='text-bold lg:text-4xl text-2xl '>We Provide The Best Services</h1>
        </div>
    <div className="min-h-screen  p-8 ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-800 text-white rounded-lg shadow-lg p-6"
          >
            <Image src={service.image} alt={service.title} width={400} height={200} className="rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-4">{service.title}</h2>
            <ul className="space-y-2">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="currentColor"  className="w-5 h-5 text-green-500">  <path    fillRule="evenodd"    d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"    clipRule="evenodd"  />
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
    <Footer/>
  </div>

  );
}
