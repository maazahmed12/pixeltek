import AnimatedText from '@/components/AnimatedText';
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import article1 from '../../public/images/articles/a5.jpg';
import article2 from '../../public/images/articles/a2.jpg';
import article3 from '../../public/images/articles/a3.jpg';
import article4 from '../../public/images/articles/a4.jpg';
import TransitionEffect from '@/components/TransitionEffect';

const Article = ({ title, point1,point2,point3,point4,point5 ,summary, time, img, closeArticle }) => {
  return (
    <div className="col-span-2 w-full p-4 bg-light relative border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
      <h2 className="capitalize text-2xl font-bold my-2 mt-4">{title}</h2>
      <p className="text-sm mb-2">{summary}</p>
      <p className="text-sm font-semibold mb-2">{point1}</p>
      <p className="text-sm font-semibold mb-2">{point2}</p>
      <p className="text-sm font-semibold mb-2">{point3}</p>
      <p className="text-sm font-semibold mb-2">{point4}</p>
      <p className="text-sm font-semibold mb-2">{point5}</p>

      <span className="text-blue-600 font-semibold dark:text-primaryDark">{time}</span>
      <button onClick={closeArticle} className="w-full absolute bottom-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500">
        Close
      </button>
    </div>
  );
};

const FeaturedArticle = ({ title, point1,point2,point3,point4,point5 ,summary, time, img }) => {
  const [selected, setSelected] = useState(null);

  const handleArticleClick = () => {
    setSelected(title);
  };

  const closeArticle = () => {
    setSelected(null);
  };

  return (
    <div>
      {selected === title ? (
        <Article title={title} point1={point1} point2={point2} point3={point3} point4={point4} point5={point5} summary={summary} time={time} img={img} closeArticle={closeArticle} />
      ) : (
        <li className="col-span-1 w-full p-4 bg-light relative border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
          <div className="absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
          <button onClick={handleArticleClick} className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
            <Image src={img} alt={title} className="w-full h-auto" />
          </button>
          <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
          {/* <p className="text-sm mb-2">{summary}</p> */}
          {/* <p className="text-sm mb-2">{point1}</p> */}

          <span className="text-blue-600 font-semibold dark:text-primaryDark">{time}</span>
        </li>
      )}
    </div>
  );
};

const articlesData = [
  {
    title: 'Choosing the Right Technology Stack for Your Project',
    summary: 'Selecting the appropriate technology stack for your software project is a crucial decision that can impact its success. A well-chosen stack can lead to efficient development and scalability. In contrast, the wrong choice can result in compatibility issues and maintenance challenges. In this blog post, we will explore the key factors to consider when selecting a technology stack for your project.When it comes to choosing a technology stack, you need to assess your projects specific requirements and goals. Consider factors such as',
    point1:'Project Type : Is it a web application, mobile app, or desktop software? Each may require a different stack.',
    point2:'Scalability : Do you anticipate rapid growth? Ensure the stack can handle scalability.',
    point3:'Team Expertise : What technologies are your developers skilled in? Utilize their strengths.',
    point4:'Community Support : Is the technology well-supported with a strong community?',
    point5:'Cost : Evaluate licensing and infrastructure costs',
    time: '9 min read',
    img: article1,
  },
  {
    title: 'The Importance of User-Centered Design in Software',
    summary: 'User-centered design (UCD) is a philosophy that places the end-users at the core of the software development process. It is not just about creating visually appealing interfaces but ensuring that the software is intuitive and meets users needs. In this blog post, we will delve into why UCD is crucial for successful software development.User-centered design involves several key steps:',
    point1:'User Research : Understand your target audience, their preferences, and pain points.',
    point2:'Prototyping : Create interactive prototypes to gather user feedback early in the development process.',
    point3:'Usability Testing : Continuously test the software with real users to identify and address issues.',
    point4:'Iterative Design : Make improvements based on user feedback and testing results.',
    point5:'Accessibility : Ensure your software is inclusive and accessible to users with disabilities.',
    time: '10 min read',
    img: article2,
  },
  {
    title: 'The Impact of DevOps on Software Development and Deployment',
    summary: 'DevOps is a set of practices that aim to streamline and automate the software development and deployment processes. It bridges the gap between development and operations teams, leading to faster releases and improved software quality. In this blog post, we will explore the profound impact of DevOps on modern software development',
    time: '3 min read',
    img: article3,
  },
  {
    title: 'The Future of AI and Machine Learning in Software Development',
    summary: 'Artificial Intelligence (AI) and Machine Learning (ML) are transforming the software development landscape. These technologies empower software to learn and adapt, making systems smarter and more efficient. In this blog post, we will explore the exciting future of AI and ML in software development.',
    time: '5 min read',
    img: article4,
  },
  
  // Add more articles as needed
];

const Articles = () => {
  return (
    <>
      <Head>
        <title>PixelTEK | Blogs Page</title>
        <meta name="description" content="my description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Empowering Tomorrow's Tech Today." className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl sm:mt-8" />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {articlesData.map((article, index) => (
              <FeaturedArticle
                key={index}
                title={article.title}
                summary={article.summary}
                point1={article.point1}
                point2={article.point2}
                point3={article.point3}
                point4={article.point4}
                point5={article.point5}
                time={article.time}
                img={article.img}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;







