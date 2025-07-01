"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";


const contacts = [
    {

        num: '01',

        title: 'Email',
        description: 'kushaldilip18@gmail.com',

        href: ""

    },
    {

        num: '02',

        title: 'GitHub',
        description: '@kushaldilip1',

        href: ""

    },
    {

        num: '03',

        title: 'Instagram',
        description: '@kushaldilip',

        href: ""

    },
    {

        num: '04',

        title: 'LinkedIn',
        description: 'Kushal Dilip',

        href: ""

    },
];


const Contact = () => {
    return (


        <section className="min-h-[80vh] flex flex-col justify-center-safe py-12 md:py-0 mt-[-3rem]">

            <div className="container mx-auto">

                <h1 className="mb-[2rem] text-6xl font-bold text-outline text-transparent">Contacts</h1>

                <motion.div

                    initial={{ opacity: 0 }}

                    animate={{

                        opacity: 1,

                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },

                    }}

                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"

                >

                    {contacts.map((contact, index) => {

                        return (

                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">

                                {/* TOP */}

                                <div className="w-full flex justify-between items-center">

                                    <div className="text-3xl font-extrabold text-outline text-transparent">{contact.num}</div>

                                    <Link href={contact.href}>

                                        <BsArrowDownRight />

                                    </Link>

                                </div>



                                {/* HEADING */}

                                <h2 className="text-outline text-4xl"> {contact.title}</h2>
                                <p>{contact.description}</p>



                                {/* BORDER */}

                                <div className="border-b mt-[-1rem] border-cyan-200/20 w-full"></div>

                            </div>

                        );

                    })}

                </motion.div>

            </div>

        </section>

    );

}


export default Contact;
