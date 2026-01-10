import { motion, type Variants } from 'framer-motion';

interface ExperienceProps {
    company: string;
    logo?: string;
    role: string;
    period: string;
    description: string | string[];
    skills: string[];
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0, 0, 0.58, 1]
        }
    }
};

export const ExperienceCard = ({ company, logo, role, period, description, skills }: Omit<ExperienceProps, 'index'>) => (
    <motion.div variants={itemVariants} className="group mb-8">
        <div className="cv-card">
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-3 md:space-y-0 text-left">
                    <div className="flex items-center space-x-4">
                        {logo && (
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1">
                                <img src={logo} alt={company} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        )}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">{role}</h3>
                            <p className="text-gray-500 font-sans text-sm">{company}</p>
                        </div>
                    </div>
                    <span className="text-[13px] font-sans font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded w-fit uppercase tracking-wider">
                        {period}
                    </span>
                </div>

                {Array.isArray(description) ? (
                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 font-serif text-[16px] leading-relaxed text-left">
                        {description.map((point, i) => (
                            <li key={i} className="pl-1">
                                {point}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600 font-serif text-[17px] leading-relaxed text-left">
                        {description}
                    </p>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                    {skills && skills.map((skill) => (
                        <span
                            key={skill}
                            className="text-[11px] font-sans text-gray-400 border border-gray-100 px-2 py-0.5 rounded-sm uppercase tracking-tighter"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export const Experience = ({ items }: { items: any[] }) => (
    <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
    >
        {items.map((exp, idx) => (
            <ExperienceCard
                key={idx}
                {...exp}
            />
        ))}
    </motion.div>
);
