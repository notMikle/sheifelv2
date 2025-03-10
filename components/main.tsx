import React from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

export const dynamic = 'auto'
const Main = () => {
    return (
        <section id='first'
                 className="bg-gradient-to-r px-4 from-white to-blue-300 dark:from-blue-900 dark:to-blue-950 flex justify-between items-center flex-wrap md:flex-nowrap">
            <div className='pr-[4rem]'></div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="container mx-auto md:px-10 text-black"
            >
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6">Fazis Clean</h1>
                <p className="text-2xl md:text-2xl max-w-2xl">Профессиональная химчистка мебели в Белгороде
                    по доступным ценам</p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                className="container md:py-24 text-black"
            >
                <Image src="/main3.webp" alt="cleaning" width={650} height={650} loading="lazy" decoding="async"/>
            </motion.div>
        </section>
    );
};

export default Main;