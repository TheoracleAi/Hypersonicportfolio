import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, PanelsTopLeft, Box, Mouse as House } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: 'Project Alpha',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    github: '#',
    live: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web'
  },
  {
    title: 'Project Beta',
    description: 'Real-time chat application with WebSocket integration',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800',
    github: '#',
    live: '#',
    tags: ['WebSocket', 'Express', 'Redis'],
    category: 'web'
  },
  {
    title: 'Project Gamma',
    description: 'AI-powered content management system',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    github: '#',
    live: '#',
    tags: ['Python', 'TensorFlow', 'React'],
    category: 'ai'
  }
];

const ProjectGrid = ({ projects }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <motion.div
        key={project.title}
        className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <div className="relative group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <a
              href={project.github}
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <GithubIcon className="w-6 h-6 text-gray-900" />
            </a>
            <a
              href={project.live}
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <ExternalLinkIcon className="w-6 h-6 text-gray-900" />
            </a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <Tabs defaultValue="all" className="w-full">
          <ScrollArea>
            <TabsList className="mb-8 h-auto -space-x-px bg-gray-800/50 p-1 shadow-sm shadow-black/5 rtl:space-x-reverse rounded-lg">
              <TabsTrigger
                value="all"
                className="relative overflow-hidden rounded-md border border-gray-700 py-2 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:after:bg-purple-500"
              >
                <House
                  className="-ms-0.5 me-1.5 opacity-60 inline"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="relative overflow-hidden rounded-md border border-gray-700 py-2 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:after:bg-purple-500"
              >
                <PanelsTopLeft
                  className="-ms-0.5 me-1.5 opacity-60 inline"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Web Development
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="relative overflow-hidden rounded-md border border-gray-700 py-2 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-gray-800 data-[state=active]:text-white data-[state=active]:after:bg-purple-500"
              >
                <Box
                  className="-ms-0.5 me-1.5 opacity-60 inline"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                AI Projects
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <TabsContent value="all" className="mt-6">
            <ProjectGrid projects={projects} />
          </TabsContent>
          
          <TabsContent value="web" className="mt-6">
            <ProjectGrid projects={projects.filter(p => p.category === 'web')} />
          </TabsContent>
          
          <TabsContent value="ai" className="mt-6">
            <ProjectGrid projects={projects.filter(p => p.category === 'ai')} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}