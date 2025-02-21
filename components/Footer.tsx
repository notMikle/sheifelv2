'use client'
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Separator} from "@radix-ui/react-context-menu";

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}
 const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-white to-blue-300 dark:from-blue-900 dark:to-blue-950">
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{once: true}}
                variants={staggerContainer}
                className="container mx-auto px-4 py-12"
            >
                <div className="grid md:grid-cols-4 gap-8">
                    <motion.div variants={fadeIn}>
                        <Image src="/logo1.png" alt="Logo" width={40} height={40} className="mb-4"/>
                        <p>г. Белгород</p>
                        <p>ежедневно с 8:00 до 24:00</p>
                        <div className="mt-4">
                            <a href="tel:+79205936571"
                               className="text-xl font-semibold hover:opacity-80 transition-opacity"
                               aria-label="phone">
                                +7 (920) 593-65-71
                            </a>
                            {/*<Button variant="outline" className="mt-2 w-full transition-colors hover:bg-white hover:text-slate-900">*/}
                            {/*  ЗАКАЗАТЬ ЗВОНОК*/}
                            {/*</Button>*/}
                        </div>
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <h3 className="font-semibold mb-4">МЕНЮ</h3>
                        <div className="grid gap-2">
                            {["Главная", "Услуги", "Прайс-лист", "Контакты"].map((item) => (
                                <Link key={item} href={`#${item.toLowerCase()}`}
                                      className="hover:opacity-80 transition-opacity"
                                aria-label={item}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                    {/*<motion.div variants={fadeIn} className="md:col-span-2">*/}
                    {/*  <h3 className="font-semibold mb-4">УСЛУГИ</h3>*/}
                    {/*  <div className="grid md:grid-cols-2 gap-2">*/}
                    {/*    {services.map((service) => (*/}
                    {/*      <Link key={service.title} href="#" className="hover:opacity-80 transition-opacity">*/}
                    {/*        {service.title}*/}
                    {/*      </Link>*/}
                    {/*    ))}*/}
                    {/*  </div>*/}
                    {/*</motion.div>*/}
                </div>
            </motion.div>
            <div className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6">
                <Separator/>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">© notMikle {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
export default Footer