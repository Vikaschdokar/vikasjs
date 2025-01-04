import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const clients = [
  { src: '/images/clients/client-1.png', alt: 'Client 1' },
  { src: '/images/clients/client-2.png', alt: 'Client 2' },
  { src: '/images/clients/client-3.png', alt: 'Client 3' },
  { src: '/images/clients/client-4.png', alt: 'Client 4' },
  { src: '/images/clients/client-5.png', alt: 'Client 5' },
  { src: '/images/clients/client-6.png', alt: 'Client 6' },
  { src: '/images/clients/client-7.png', alt: 'Client 7' },
  { src: '/images/clients/client-8.png', alt: 'Client 8' },
  { src: '/images/clients/client-9.png', alt: 'Client 9' },
  { src: '/images/clients/client-10.png', alt: 'Client 10' },
  { src: '/images/clients/client-11.png', alt: 'Client 11' },
  { src: '/images/clients/client-12.png', alt: 'Client 12' },
  { src: '/images/clients/client-13.png', alt: 'Client 13' },
  { src: '/images/clients/client-14.png', alt: 'Client 14' },
  { src: '/images/clients/client-15.png', alt: 'Client 15' },
  { src: '/images/clients/client-16.png', alt: 'Client 16' },
  { src: '/images/clients/client-17.png', alt: 'Client 17' },
  { src: '/images/clients/client-18.png', alt: 'Client 18' },
  { src: '/images/clients/client-19.png', alt: 'Client 19' },
  { src: '/images/clients/client-20.png', alt: 'Client 20' },
];

export default function OurCustomers() {
  return (
    <section>
      <div className="bg-white py-6 mt-5 lg:py-16">
        <div className="mx-auto lg:max-w-[1300px] px-5">
          <h2 className="font-bold text-gray-800 text-center text-2xl lg:text-4xl">Our Customers</h2>
          <div className="lg:mt-2">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2000, // Delay between transitions in milliseconds (3 seconds)
                disableOnInteraction: false, // Continue autoplay even after user interaction
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 40 },
                1280: { slidesPerView: 5, spaceBetween: 50 },
              }}
              className="mySwiper px-5"
            >
              {clients.map((client, index) => (
                <SwiperSlide key={index}>
                  <img
                    className="w-full h-auto lg:m-20 m-10 object-cover"
                    src={client.src}
                    alt={client.alt}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
