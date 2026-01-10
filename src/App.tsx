import { Profile } from './components/Profile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import resumeData from './data/resume.json';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CookieConsent } from './components/CookieConsent';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { profile, experience, skills, projects, universityProjects } = resumeData;

  return (
    <div className="relative min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="md:hidden bg-[#5F4848] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-sans"
        >
          {profile.name}
        </motion.h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-500 ease-in-out bg-[#5F4848]
        md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full p-10 overflow-y-auto">
          <Profile profile={profile} />
        </div>
      </div>

      {/* Main Content */}
      <main className="cv-main relative overflow-x-hidden min-h-screen">
        <div className="max-w-4xl mx-auto w-full space-y-20 py-16 px-6">
          <Section title="Experience" delay={0.1}>
            <Experience items={experience} />
          </Section>

          <Section title="Skills" delay={0.2}>
            <Skills items={skills} />
          </Section>

          <Section title="Projects" delay={0.3}>
            <Projects items={projects} />
          </Section>

          {universityProjects && (
            <Section title="University Projects" delay={0.4}>
              <Projects items={universityProjects} isUniversity={true} />
            </Section>
          )}
        </div>
      </main>
      <CookieConsent />
    </div>
  );
}

const Section = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
  <motion.section
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className="space-y-10"
  >
    <div className="border-b-2 border-gray-900/5 pb-4">
      <h2 className="text-[32px] font-sans font-bold text-gray-900 flex items-center">
        {title}
        <span className="ml-4 h-[2px] w-12 bg-[#1E88E5]/20 rounded-full" />
      </h2>
    </div>
    <div className="pt-2">
      {children}
    </div>
  </motion.section>
);

export default App;
