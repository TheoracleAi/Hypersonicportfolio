import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <div className="space-y-6">
              {[
                { Icon: MailIcon, text: 'hello@example.com' },
                { Icon: PhoneIcon, text: '+1 (555) 123-4567' },
                { Icon: MapPinIcon, text: 'San Francisco, CA' }
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}