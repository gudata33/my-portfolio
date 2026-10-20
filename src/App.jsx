import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Navigation & Dark Mode Toggle */}
      <nav className="fixed w-full top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Gudeta.dev</h1>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Gudeta Amenu Edossa</h1>
        <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">Full Stack Developer</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Detail-oriented IT professional with 4 years of experience building enterprise systems using React, TypeScript, and Node.js. 
        </p>
        <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me & Skills</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                I recently worked at the Ethiopian Immigration and Citizenship Services where I developed critical infrastructure. I hold a B.Sc. in Information Technology and have a proven track record of solving real-world problems through code.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'JavaScript', 'Python', 'SQL', 'Tailwind CSS', 'Git'].map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1: RRS */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Refugee & Return Service (RRS) System</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A comprehensive system to manage refugee and returnee data, streamlining registration and case management processes.
            </p>
            <div className="flex gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
              <span>React</span> • <span>TypeScript</span> • <span>Node.js</span>
            </div>
          </div>

          {/* Project 2: Queue Management */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Queue Management System</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A solution to improve service efficiency, reduce wait times, and enhance user experience for citizens accessing immigration services.
            </p>
            <div className="flex gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
              <span>React</span> • <span>TypeScript</span> • <span>Node.js</span>
            </div>
          </div>

          {/* Project 3: E-Commerce */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition md:col-span-2">
            <h3 className="text-xl font-bold mb-2">React E-Commerce Storefront</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A fully functional storefront fetching data from the FakeStoreAPI. Features include category filtering, a slide-out cart drawer, and real-time price calculations using React state.
            </p>
            <div className="flex gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4">
              <span>React</span> • <span>Tailwind CSS</span> • <span>API Integration</span>
            </div>
            <a href="https://react-ecommerce-psi-jet.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-bold text-sm">
              View Live Demo →
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-200 dark:border-gray-800">
        <p className="mb-4">Let's connect!</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:gudataamanu12@gmail.com" className="text-blue-500 hover:underline">Email</a>
          <a href="www.linkedin.com/in/gudeta-edossa-3474b2439" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="https://github.com/gudata33" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">GitHub</a>
        </div>
        <p className="mt-8 text-sm text-gray-500">© 2026 Gudeta Amenu Edossa</p>
      </footer>

    </div>
  );
}

export default App;