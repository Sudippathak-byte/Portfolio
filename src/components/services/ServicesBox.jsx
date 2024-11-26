import React from "react";
import { Layers, Paintbrush, Code2, Wrench } from "lucide-react";

const Services = [
  {
    name: "Frontend Development",
    description: 
      "Crafting responsive user interfaces using React and modern JavaScript. Specializing in component-based architecture and interactive web elements.",
    image: "https://picsum.photos/200/300",
    icon: <Layers className="text-4xl" />,
    bgcolor: "bg-blue-500/70",
  },
  {
    name: "Web Design",
    description:
      "Creating beautiful and responsive layouts using Tailwind CSS. Focused on modern design principles, clean aesthetics, and mobile-first approach.",
    image: "https://picsum.photos/200/301",
    icon: <Paintbrush className="text-4xl" />,
    bgcolor: "bg-lime-500/70",
  },
  {
    name: "Javascript Development",
    description:
      "Building dynamic web applications with modern JavaScript. Experience with ES6+ features, DOM manipulation, and API integration.",
    image: "https://picsum.photos/200/302",
    icon: <Code2 className="text-4xl" />,
    bgcolor: "bg-fuchsia-500/70",
  },
  {
    name: "Tools & Technologies",
    description:
      "Proficient with essential development tools including Git, NPM, and modern build tools like Vite. Experienced in using VS Code and Chrome DevTools.",
    image: "https://picsum.photos/200/303",
    icon: <Wrench className="text-4xl" />,
    bgcolor: "bg-orange-500/70",
  },
];

const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgcolor }) => (
          <div
            key={name}
            className={`${bgcolor} rounded-xl text-white relative overflow-hidden`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl hover:backdrop-blur-md transition-all duration-300">
              <div className="text-white">
                {icon}
              </div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-gray-100">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;