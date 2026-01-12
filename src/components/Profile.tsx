import React from 'react';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface ProfileData {
    name: string;
    title: string;
    summary: string;
    image: string;
    contact: {
        phone: string;
        email: string;
        location: string;
    };
    socials: Array<{ platform: string; url: string }>;
}

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a
        href={href}
        className="text-white/60 hover:text-white transition-colors"
    >
        {icon}
    </a>
);

export const Profile = ({ profile }: { profile: ProfileData }) => {
    const getIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'github': return <Github size={20} />;
            case 'linkedin': return <Linkedin size={20} />;
            case 'email': return <Mail size={20} />;
            case 'twitter': return <Twitter size={20} />;
            default: return null;
        }
    };

    return (
        <div className="flex flex-col h-full text-left">
            <div className="flex flex-col items-center mb-8">
                {/* Profile Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-white/10">
                    <img
                        src={profile.image}
                        alt={`Professional photo of ${profile.name} - ${profile.title}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name & Title */}
                <div className="text-center w-full">
                    <h1 className="text-2xl font-bold text-white tracking-tight mb-1">{profile.name}</h1>
                    <p className="text-white/50 text-sm font-sans uppercase tracking-[0.2em]">{profile.title}</p>
                </div>
            </div>

            {/* Summary */}
            <div className="flex-1">
                <p className="text-[17px] font-serif leading-relaxed text-white/80 italic mb-8 border-b border-white/10 pb-8">
                    {profile.summary}
                </p>

                {/* CV Download / Action */}
                <a
                    href="/cv.pdf"
                    className="flex items-center space-x-2 text-white/90 hover:text-white font-sans text-sm uppercase tracking-widest border border-white/20 px-4 py-2 rounded transition-all hover:bg-white/5 w-fit mx-auto"
                >
                    <Download size={16} />
                    <span>Download CV</span>
                </a>
            </div>

            {/* Social Links at bottom */}
            <div className="mt-auto pt-8 border-t border-white/10 flex justify-center space-x-6">
                {profile.socials.map((social) => (
                    <SocialIcon key={social.platform} icon={getIcon(social.platform)} href={social.url} />
                ))}
            </div>
        </div>
    );
};

