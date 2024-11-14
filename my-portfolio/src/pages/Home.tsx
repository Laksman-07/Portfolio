import { FC } from 'react';
import Image from 'next/image';
import "../styles/home.css";

const Home: FC = () => (
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
      <h1>Projects Section</h1>
    </div>

    <div id="contact" className="pt-16">
      <h1>Contact Section</h1>
    </div>
  </>
);

export default Home;
