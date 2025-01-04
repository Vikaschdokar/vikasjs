import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link';
import React, { useState } from 'react'


export default function careers() {
 const cards = [
    {
      image: "/images/coverImage.jpg",
      title: "What is the connection between Angular and AWS?",
      description: "In today’s digital landscape, the combination of Angular and AWS can...",
     },
    {
      image: "/images/coverImage1.jpg",
      title: "Exploring React with Server Components Rendering",
      description: "React's new server components offer seamless server-side rendering...",
    
    },
    {
      image: "/images/coverImage2.jpg",
      title: "Mastering Tailwind CSS for Modern UI Design",
      description: "Tailwind CSS has revolutionized modern web design with its utility-first...",
     
    },
  ];
    const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { 
      id: 1, 
      title: ( <>
          Job Opportunities and <br /> Application Submission
        </> 
        ),
      content: "Submit your application for job opportunities." 
    },
    { id: 2, title: "Shortlisting", content: "Your application is under review for shortlisting." },
    { id: 3, title: (<>Business/ Technical <br/>Interview</>), content: "Prepare for in-depth technical discussions." },
    { id: 4, title: "HR Interview", content: "Discuss company policies, benefits, and culture." },
    { id: 5, title: "Decision and Offer", content: "Receive an offer with details about your compensation and role." },
  ];
  return (
    <div>
        <Header/>
        <section>
            <div className="md:h-[450px]  h-[250px] w-full relative bg-cover bg-center" style={{ backgroundImage: "url('/images/carer.jpg')" }}>
             {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
              {/* Content */}
                <div className="relative lg:pt-36 px-5  mx-auto max-w-[1300px]">
                <h1 className="text-white lg:text-4xl md:text-2xl text-xl font-bold">
                    Empower your career in the <br /> digital age
                </h1>
                <p className="font-light text-white py-5"> Experience the thrill of technology with our dynamic team. <br /> Where your career aspirations meet endless possibilities.</p>
                <button className="text-white text-sm lg:text-lg bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg">Contact now</button>
                </div>
            </div>
       </section>

        <section>
           <div className='mx-auto max-w-[1300px] px-5 '>
              <div className='lg:py-16 py-10'>
                    <h2 className='text-3xl '>Our Values</h2>
                    <p className='font-light'>We drive innovation and boundary-pushing with unwavering integrity. Our team operates on principles of <br/> mutual respect, seamless teamwork, and effective communication, ensuring collective success in <br/> achieving our objectives.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cards.map((card, index) => (
                  <div key={index} className="rounded-lg border-2 overflow-hidden">
                  <img className="hover:scale-105 duration-500 w-full h-[250px] cursor-pointer" src={card.image} alt={card.title}/>
                     <div className="p-4">
                          <h3 className="font-semibold text-xl">{card.title}</h3>
                          <p className="text-gray-500 py-4">{card.description}</p>
                        </div>
                      </div>
                ))}
              </div>
           </div>
        </section>
         
         <section className=''>
             <div className='mx-auto max-w-[1300px] lg:py-20 py-8 px-5 '>
                  <div className='lg:flex gap-8 '>
                  <div className='lg:w-1/2  '>
                      <h3 className='text-xl pb-3'>At Triggrsweb, you’ll supercharge your potential. You’ll find your career. And you’ll find your spark. All at a place that knows that helping our clients stay on top starts by putting our people first. We offer:</h3>
                      <div className='bg-gray-200 p-3  flex my-3 rounded-md lg:mr-20 items-center'>
                        <img  src='/images/MicrosoftTeams-image.avif'/>
                        <p className='px-5'> Career opportunities on your terms</p>
                      </div>
                      <div className='bg-gray-200 p-3 flex  my-3 rounded-md lg:mr-20 items-center'>
                        <img  src='/images/supercharging-highligh-icon-2.svg'/>
                        <p className='px-5'> Enriching job experiences</p>
                      </div>
                      <div className='bg-gray-200 p-3 flex  my-3 rounded-md lg:mr-20 items-center'>
                        <img  src='/images/supercharging-highligh-icon-3.svg'/>
                        <p className='px-5'> An employment that you can trust in</p>
                      </div>
                      <div className='bg-gray-200 p-3 flex  my-3 rounded-md lg:mr-20 items-center'>
                        <img  src='/images/MicrosoftTeams-image.avif'/>
                        <p className='px-5'>A diverse, international culture that values your whole self</p>
                      </div>    
                  </div>
                  <div className='lg:w-1/2 lg:py-10'>
                    <img className='w-[600px]  rounded-2xl' src='/images/office.jpg'/>
                  </div>

                  </div>
             </div>
         </section>

         <section className='bg-gray-100'>
            <div className="flex flex-col items-center text-center  lg:py-20 p-4 sm:p-6 mx-auto max-w-[1400px] ">
             {/* Stepper Header */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`flex  items-center  text-center px-4 py-2 border-2 rounded-lg cursor-pointer sm:w-auto 
                        ${activeStep === step.id ? "border-blue-500  bg-blue-100 text-blue-600" : "border-gray-300 bg-white"}`}
                      onClick={() => setActiveStep(step.id)}>
                      <div className={`w-8 h-8   flex items-center justify-center p-5 rounded-full font-bold 
                        ${activeStep === step.id ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
                        {step.id}
                      </div>
                      <span className=" p-3  text-sm">{step.title}</span>
                    </div>
                  ))}
                </div>

                {/* Content Section */}
                <div className="w-full max-w-2xl p-4 sm:p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                    {[activeStep - 1].title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-xl">{steps[activeStep - 1].content}</p>
                </div>
              </div>
         </section>

          
         {/* <section>
           <div className="  ">
            <div className='lg:flex flex-wrap items-center   mx-auto max-w-[1300px]'>
              Left Section: Text and Illustration
              <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">Join Us</h2>
              <p className="mb-6">
                Be part of a company that values your talent and offers endless opportunities.
                <br />
                Grow your career in a supportive and inclusive environment.
              </p>
              <div className=" w-full">
                <img src="/images/job.jpg"  alt="Join Us "  className=""/>
              </div>
            </div>

            Right Section: Form
            <div className="w-full md:w-1/2  bg-gray-100 p-8 rounded-md shadow-lg">
              <form className=''>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" id="name" name="name" placeholder="Your name here" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" id="email" name="email" placeholder="Your email here" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone"> Contact Number
                    </label>
                    <input type="text" id="phone" name="phone" placeholder="Your phone here" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="resume"> Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <input type="file" id="resume" name="resume" className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>
                 <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">
                      Your Qualifications <span className="text-red-500">*</span>
                    </label>
                    <input type="message" id="message" name="message" placeholder="Your  Qualifications" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"/>
                  </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a few words"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          </div>
           </section> */}

           <Footer/>
    </div>
  )
}
