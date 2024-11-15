interface Project {
    id: number,
    name: string;
    description: string;
    image: string;
    link: string;
  }
  
  interface Skill {
    name: string;
    proficiency: number;  
  }
  
  interface Data {
    projects: Project[];
    skills: Skill[];
  }
  