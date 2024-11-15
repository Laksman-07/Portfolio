'use client'
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import "../styles/home.css";
import axios from 'axios';

const Home: FC = () => {
  const [data, setData] = useState<Data>({
    projects: [],
    skills: [],
  });
  
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/staticData'); 
        setData(response.data); 
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return(
  <>
    <div id='about' className='pt-16'>
      <div className='title  text-xl text-center font-bold pt-8'>About Me</div>
      <div className="flex flex-col md:flex-row items-center">
        <div className='image flex p-4 md:items-center justify-center basis-2/5'>
          <Image
            src="/laksman_pic.jpg"
            width={250}
            height={250}
            alt="Picture of the author"
            loading="lazy"
            quality={100}
            className='imageStyle'
          />
        </div>
        <div className='decription flex p-4 md:items-center justify-center basis-3/5 max-w-2xl text-lg'>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p>
        </div>
      </div>
    </div>

    <div id="skills" className="pt-16">
      <h1>Skills Section</h1>
    </div>





    <div id="projects" className="pt-16">
  <div className="title px-4 text-xl text-center font-bold pt-8">Projects</div>

  <div className="flex flex-wrap justify-center gap-4"> 
    {data.projects.map((project) => (
      <div
        key={project.id}
        className="flex justify-center items-center sm:w-full md:w-1/3 lg:w-1/4" 
      >
        <div className="project-container flex flex-col items-center">
          <h3 className="text-lg font-semibold py-4">{project.name}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            className="project-image"
            src={project.image}
            width= {600}
            height= {600}
            alt={project.name}
            quality={100}
          />
          </a>
          <p className="project-description text-center">{project.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>








    <div id="contact" className="pt-16">
      <h1>Contact Section</h1>
    </div>
  </>
);
};

export default Home;
