import React from 'react';
import resumeData from '../data/resume.json';
import { Profile } from './Profile';

const Sidebar = () => {
    return (
        <aside className="cv-sidebar overflow-y-auto">
            <Profile profile={resumeData.profile} />
        </aside>
    );
};

export default Sidebar;
