import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExtraCurricular } from './components/ExtraCurricular';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { portfolioData } from './data/portfolioData';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <ScrollProgress />

        <Hero
          name={portfolioData.name}
          location={portfolioData.location}
          phone={portfolioData.phone}
          email={portfolioData.email}
          linkedin={portfolioData.linkedin}
          github={portfolioData.github}
          bio={portfolioData.bio}
        />

        <Education education={portfolioData.education} />

        <Experience experiences={portfolioData.experiences} />

        <Projects projects={portfolioData.projects} />

        <Skills skills={portfolioData.skills} languages={portfolioData.languages} />

        <ExtraCurricular />

        <Footer
          email={portfolioData.email}
          linkedin={portfolioData.linkedin}
          github={portfolioData.github}
        />
      </div>
    </QueryClientProvider>
  );
}

export default App;
