import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Shield, Code2, Database, Download, Mouse } from "lucide-react";
import { getAssetUrl } from "../utils";

interface HeroProps {
	name: string;
	location: string[];
	phone: string;
	email: string;
	linkedin: string;
	github: string;
	bio: string;
}

export const Hero = ({ name, location, email, linkedin, github, bio }: HeroProps) => {
	return (
		<section
			id="about"
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden pt-16"
		>
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

			<div className="container mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-4xl mx-auto"
				>
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="mb-8 flex justify-center gap-4"
					>
						<div className="p-4 bg-teal-500/10 rounded-xl backdrop-blur-sm border border-teal-500/20">
							<Shield className="w-8 h-8 text-teal-400" />
						</div>
						<div className="p-4 bg-fuchsia-500/10 rounded-xl backdrop-blur-sm border border-fuchsia-500/20">
							<Code2 className="w-8 h-8 text-fuchsia-400" />
						</div>
						<div className="p-4 bg-blue-500/10 rounded-xl backdrop-blur-sm border border-blue-500/20">
							<Database className="w-8 h-8 text-blue-400" />
						</div>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent pb-3 overflow-visible"
					>
						{name}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className="text-xl md:text-2xl text-slate-300 mb-4"
					>
						Full Stack Developer & Cybersecurity Specialist
					</motion.p>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.6 }}
						className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
					>
						{bio}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.6 }}
						className="flex flex-wrap justify-center gap-4 mb-8"
					>
						<a
							href={`mailto:${email}`}
							className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-700/50 hover:border-teal-500/50 transition-all duration-300"
						>
							<Mail className="w-4 h-4" />
							<span className="text-sm">{email}</span>
						</a>
						<a
							href={linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
						>
							<Linkedin className="w-4 h-4" />
							<span className="text-sm">LinkedIn</span>
						</a>
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:bg-slate-700/50 hover:border-amber-500/50 transition-all duration-300"
						>
							<Github className="w-4 h-4" />
							<span className="text-sm">GitHub</span>
						</a>
						<a
							href={getAssetUrl("resume.pdf")}
							download
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white border border-emerald-600 rounded-lg hover:bg-emerald-600 hover:border-emerald-400 transition-all duration-300 font-medium shadow"
						>
							<Download className="w-4 h-4" />
							<span className="text-sm">Download Resume</span>
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm"
					>
						<div className="flex items-center gap-2">
							<MapPin className="w-4 h-4" />
							<span>{location.join(" / ")}</span>
						</div>
					</motion.div>
				</motion.div>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="mt-6">
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
						className="flex items-start justify-center p-2"
					>
						<Mouse size={32} strokeWidth={1.5} className="text-slate-500" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};
