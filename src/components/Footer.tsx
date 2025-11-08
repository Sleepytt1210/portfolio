import { motion } from 'framer-motion';
import { Heart, Mail, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  email: string;
  linkedin: string;
  github: string;
}

export const Footer = ({ email, linkedin, github }: FooterProps) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center gap-6 mb-6">
            <a
              href={`mailto:${email}`}
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-teal-500/50 hover:bg-slate-800 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-slate-400 hover:text-teal-400 transition-colors" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-400 hover:text-amber-400 transition-colors" />
            </a>
          </div>

          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Vite & TanStack
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {new Date().getFullYear()} Dylon Chung Yee Wong. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
