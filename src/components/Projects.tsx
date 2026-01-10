import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const ProjectCard = ({ title, description, tech }: any) => (
    <motion.div variants={itemVariants}>
        <div className="cv-card h-full flex flex-col hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col flex-1 text-left">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 tracking-tight">
                    {title}
                </h3>

                <p className="text-gray-600 font-serif text-[16px] leading-relaxed flex-1 mb-6">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tech.map((t: string) => (
                        <span
                            key={t}
                            className="text-[11px] font-sans text-gray-400 border border-gray-100 px-2 py-0.5 rounded-sm uppercase tracking-tighter"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export const Projects = ({ items, isUniversity = false }: { items: any[]; isUniversity?: boolean }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={`grid grid-cols-1 ${isUniversity ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-8 mt-4`}
    >
        {items.map((project) => (
            <ProjectCard
                key={project.title}
                {...project}
            />
        ))}
    </motion.div>
);
