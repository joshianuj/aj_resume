import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

export const Skills = ({ items }: { items: Record<string, string[]> }) => {
    // Helper to format category keys (e.g. "cloud_devops" -> "Cloud Devops")
    const formatCategory = (key: string) => {
        return key
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .replace('Devops', 'DevOps') // Specific fix for DevOps
            .replace('Api', 'API');      // Specific fix for API
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
            {Object.entries(items).map(([category, skills]) => (
                <motion.div
                    key={category}
                    variants={itemVariants}
                    className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors"
                >
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
                        {formatCategory(category)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="bg-white text-gray-800 text-[13px] font-medium px-3 py-1.5 rounded-lg border border-gray-200/60 shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};
