import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  const cards = [
    {
      image: "/images/coverImage.jpg",
      title: "What is the connection between Angular and AWS?",
      description: "In today’s digital landscape, the combination of Angular and AWS can...",
      button: "Read Article",
      link: "/blog/angular-aws", // Route for this card
    },
    {
      image: "/images/coverImage1.jpg",
      title: "Exploring React with Server Components Rendering",
      description: "React's new server components offer seamless server-side rendering...",
      button: "Read Article",
      link: "/blog/react-server-components", // Route for this card
    },
    {
      image: "/images/coverImage2.jpg",
      title: "Mastering Tailwind CSS for Modern UI Design",
      description: "Tailwind CSS has revolutionized modern web design with its utility-first...",
      button: "Read Article",
      link: "/blog/tailwind-css", // Route for this card
    },
  ];

  return (
    <>
      <Header />
      <section>
        <div
          className="h-[450px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/moon.jpg')" }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-bold text-center px-4">
              Unlocking the potential of your business with cutting-edge solutions
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1300px] my-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((card, index) => (
              <div key={index} className="rounded-lg border-2 overflow-hidden">
                <Link href={card.link} passHref>
                 
                    <img
                      className="hover:scale-105 duration-500 w-full h-[250px] cursor-pointer"
                      src={card.image}
                      alt={card.title}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-xl">{card.title}</h3>
                      <p className="text-gray-500 py-4">{card.description}</p>
                      <button className="rounded-xl py-2 px-4 w-full bg-blue-600 hover:bg-blue-500 text-white">
                        {card.button}
                      </button>
                    </div>
                 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto py-10">
        <div
          className="w-full h-[250px] rounded-3xl bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/moon.jpg')" }}
        >
          <div className="text-center bg-opacity-50 p-4 rounded-xl">
            <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-bold mb-4">
              Unlocking the potential of your business with cutting-edge solutions
            </h1>
            <button className="rounded-xl py-2 px-6 bg-blue-600 hover:bg-blue-500 text-white">
              Contact Now
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
