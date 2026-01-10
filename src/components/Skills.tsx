import { motion } from 'framer-motion';

interface Skill {
    name: string;
    level: number;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <motion.div variants={itemVariants} className="space-y-2">
        <div className="flex justify-between text-[13px] font-sans font-bold text-gray-700 tracking-tight">
            <span>{name}</span>
            <span className="text-blue-600">{level}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-[#1E88E5] rounded-full"
            />
        </div>
    </motion.div>
);

export const Skills = ({ items }: { items: Skill[] }) => {
    const half = Math.ceil(items.length / 2);
    const leftCol = items.slice(0, half);
    const rightCol = items.slice(half);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
        >
            <div className="space-y-5">
                {leftCol.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                ))}
            </div>
            <div className="space-y-5">
                {rightCol.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                ))}
            </div>
        </motion.div>
    );
};
