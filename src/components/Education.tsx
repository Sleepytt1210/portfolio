import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Education as EducationType } from "../types/portfolio";

interface EducationProps {
	education: EducationType[];
}

export const Education = ({ education }: EducationProps) => {
	return (
		<section id="education" className="py-20 bg-slate-800">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-3 mb-4">
						<GraduationCap className="w-8 h-8 text-teal-400" />
						<h2 className="text-4xl md:text-5xl font-bold text-white">Education</h2>
					</div>
				</motion.div>

				<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
					{education.map((edu, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
						>
							<a target="_blank" rel="noopener noreferrer" href={edu.link} >
								<p className="text-sm text-teal-400 font-medium mb-3">{edu.period}</p>
								<h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
								<p className="text-slate-300 font-medium mb-4">{edu.institution}</p>

								{edu.result && (
									<div className="mb-4 inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-lg">
										<p className="text-teal-400 font-semibold text-sm">{edu.result}</p>
									</div>
								)}

								<div className="mt-4 pt-4 border-t border-slate-700">
									<p className="text-sm text-slate-400 font-medium mb-2">Key Courses:</p>
									<div className="flex flex-wrap gap-2">
										{edu.courses.map((course, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-300"
											>
												{course}
											</span>
										))}
									</div>
								</div>
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
