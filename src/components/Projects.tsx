import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { Project } from "../types/portfolio";

interface ProjectsProps {
	projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
	return (
		<section id="projects" className="py-20 bg-slate-900">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-3 mb-4">
						<FolderGit2 className="w-8 h-8 text-amber-400" />
						<h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
					</div>
				</motion.div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 flex flex-col"
						>
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
								<p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

								<div className="mb-4">
									<div className="flex flex-wrap gap-2">
										{project.technologies.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-md text-xs text-amber-400 font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div className="mt-auto pt-4 border-t border-slate-700">
									<ul className="space-y-2">
										{project.highlights.slice(0, 2).map((highlight, idx) => (
											<li key={idx} className="flex gap-2 text-xs text-slate-400">
												<span className="text-amber-400 mt-1 w-1 h-1 rounded-full bg-amber-400 flex-shrink-0"></span>
												<span className="leading-relaxed">{highlight}</span>
											</li>
										))}
									</ul>
								</div>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
