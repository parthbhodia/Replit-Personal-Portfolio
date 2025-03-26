import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Alex Chen
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Full-Stack Web Developer
        </h2>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="default">My Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            I'm a passionate web developer with expertise in building modern, responsive
            web applications. I specialize in React, Node.js, and creating seamless
            user experiences.
          </p>
          <p className="text-lg mb-4">
            With over 5 years of experience in the industry, I've worked with startups
            and established companies to bring their digital products to life.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {["React", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "MongoDB", "Express", "Git"].map((skill) => (
            <div 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A brief description of the project and the technologies used.
                </p>
                <Button variant="link" className="p-0">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
        <div className="max-w-xl mx-auto p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div className="grid gap-4 mb-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md min-h-[120px]"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <Button className="w-full">Send Message</Button>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;