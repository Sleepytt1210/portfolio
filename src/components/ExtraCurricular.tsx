import { motion } from 'framer-motion';
import { Trophy, Target } from 'lucide-react';

export const ExtraCurricular = () => {
  const activities = [
    {
      period: '2019 – Present',
      title: 'TryHackMe.com',
      icon: Target,
      description: 'Active member ranked top 1% across the server. Continuously learning cybersecurity through practical Capture The Flag challenges and completing rooms on current security trends.',
    },
    {
      period: '2018 – 2019',
      title: 'Peer Tutor, INTO Newcastle',
      icon: Trophy,
      description: 'Served as a mentor to incoming students, providing guidance on solving mathematical questions and strategies. Honed leadership and communication skills through this experience.',
    },
  ];

  return (
    <section id="extra" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-teal-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Extra-Curricular</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/10 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-sm text-teal-400 font-medium mb-2">{activity.period}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
