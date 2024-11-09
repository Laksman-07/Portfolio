import { FC } from 'react';
import "../styles/home.css"; 

const Home: FC = () => (
    <div className='flex'>
<div id="about" className="justify-center align-center pt-16">
  <h1>About Section</h1>
</div>

<div id="skills" className="justify-center pt-16">
  <h1>Skills Section</h1>
</div>

<div id="projects" className="justify-center pt-16">
  <h1>Projects Section</h1>
</div>

<div id="contact" className="justify-center pt-16">
  <h1>Contact Section</h1>
</div>
</div>
);

export default Home;
