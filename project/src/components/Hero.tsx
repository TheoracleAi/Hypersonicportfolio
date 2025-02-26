'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
 
export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl h-[500px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <TypeAnimation
                  sequence={[
                    'Pramudit Uma Tiwari',
                    1000,
                    'Web Developer',
                    1000,
                    'UI Designer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                />
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                Crafting digital experiences with code and creativity. Specialized in building modern web applications that combine aesthetics with functionality.
              </p>

              <motion.div
                className="flex gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { Icon: GithubIcon, href: "#" },
                  { Icon: LinkedinIcon, href: "#" },
                  { Icon: MailIcon, href: "#" }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    className="text-white hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}