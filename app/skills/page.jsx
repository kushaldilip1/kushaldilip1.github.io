"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const languages = [
    {
        num: '01',
        title: 'Portuguese (native)',
        href: ""
    },

    {
        num: '02',
        title: 'English (fully proficient)',
        href: ""
    },

    {
        num: '03',
        title: 'Gujarati (native)',
        href: ""
    },

    {
        num: '04',
        title: 'Hindi (limited proficiency)',
        href: ""
    },

    {
        num: '05',
        title: 'Spanish (Limited proficiency and familiarity - a result of portuguese influence)',
        href: ""
    },
];


const programming_languages = [
    {
        num: '01',
        title: 'HTML',
        href: ""
    },

    {
        num: '02',
        title: 'CSS | SASS | CSS in JS',
        href: ""
    },

    {
        num: '03',
        title: 'JavaScript | NodeJS',
        href: ""
    },

    {
        num: '04',
        title: 'PHP',
        href: ""
    },

    {
        num: '05',
        title: 'Python',
        href: ""
    },

    {
        num: '06',
        title: 'Java',
        href: ""
    },
];


const development_tools = [
    {
        num: '01',
        title: 'GitHub',
        href: ""
    },

    {
        num: '02',
        title: 'Visual Studio Code',
        href: ""
    },

    {
        num: '03',
        title: 'Eclipse IDE',
        href: ""
    },
];


const ux_ui_design_tools = [
    {
        num: '01',
        title: 'Draw.io',
        href: ""
    },

    {
        num: '02',
        title: 'Adobe XD',
        href: ""
    },

    {
        num: '03',
        title: 'Figma',
        href: ""
    },

    {
        num: '04',
        title: 'Adobe Photoshop',
        href: ""
    },
];


const frameworks_and_libraries = [
    {
        num: '01',
        title: 'Web Frameworks:',
        description: "React and NextJS",
        href: ""
    },

    {
        num: '02',
        title: 'Command-line shells:',
        description: "Bash (Bourne Again Shell), basic Windows Command Prompt, Zsh (Z Shell)",
        href: ""
    },
];

const databases = [
    {
        num: '01',
        title: 'MySQL',
        href: ""
    },

    {
        num: '02',
        title: 'SQLite',
        href: ""
    },
];


const development_methodologies = [
    {
        num: '01',
        title: 'Scrum methodology',
        href: ""
    },

    {
        num: '02',
        title: 'Agile Methodology',
        href: ""
    },
];


const collab_comm_tools = [
    {
        num: '01',
        title: 'Microsoft 365 (Word, Excel, Powerpoint, OneNote, Teams, Skype, Outlook, OneDrive)',
        href: ""
    },

    {
        num: '02',
        title: 'Discord',
        href: ""
    },

    {
        num: '03',
        title: 'Google Suite',
        href: ""
    },
];






import { motion } from "framer-motion";




    //  LANGUAGES
const SkillSection = ({ title, data }) => {

    return (
        <section className="flex flex-col justify-center-safe py-12 md:py-0  mt-8 mb-[8rem]">
            <div className="container mx-auto">
                <h1 className="mb-[2rem] text-4xl font-bold text-outline text-transparent w-[20rem] md:w-full">{title}</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }, // Adjusted delay slightly for better flow
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/* TOP (number and icon) */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-3xl font-extrabold text-outline text-transparent">{item.num}</div>
                                </div>

                                {/* HEADING  */}
                                <h2 className="text-outline w-[20rem]">{item.title}</h2>
                                
                                {/* DESCRIPTION (if available, e.g., for Frameworks & Libraries) */}
                                {item.description && <p className="text-muted-foreground">{item.description}</p>}

                                {/* {item.description ? (
                                    <p className="text-muted-foreground">{item.description}</p>
                                ) : null} */}

                                {/* BORDER */}
                                <div className="border-b mt-[-1rem] border-cyan-200/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};



// --- MAIN PAGE COMPONENT (THE ONE DEFAULT EXPORT for app/services/page.jsx) ---
// This component renders ALL your skill sections by calling the SingleSkillSection helper.
export default function SkillsPage() { // Renamed from SkillSection to clarify its role as the main page component
    return (
        <> {/* Use a React Fragment to wrap multiple sections without adding an extra DOM node */}
            <SkillSection title="Languages" data={languages} />
            <SkillSection title="Programming Languages" data={programming_languages} />
            <SkillSection title="Development Tools" data={development_tools} />
            <SkillSection title="UX/UI Design Tools" data={ux_ui_design_tools} />
            <SkillSection title="Frameworks & Libraries" data={frameworks_and_libraries} />
            <SkillSection title="Databases" data={databases} />
            <SkillSection title="Development Methodologies" data={development_methodologies} />
            <SkillSection title="Collaboration & Communication Tools" data={collab_comm_tools} />
            {/* Add more sections here as you define them */}
        </>
    );
};