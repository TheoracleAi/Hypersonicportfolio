import { motion } from 'framer-motion';
import { Code2Icon, PaintbrushIcon as PaintBrushIcon, RocketIcon } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Development', Icon: Code2Icon, description: 'Building robust web applications with modern technologies' },
    { name: 'Design', Icon: PaintBrushIcon, description: 'Creating beautiful and intuitive user interfaces' },
    { name: 'Innovation', Icon: RocketIcon, description: 'Pushing boundaries with cutting-edge solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-gray-300">
              I'm a passionate developer with over 5 years of experience in creating
              modern web applications. My journey in tech has been driven by a
              constant desire to learn and innovate.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Working"
              className="relative rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(({ name, Icon, description }, index) => (
            <motion.div
              key={name}
              className="p-6 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}