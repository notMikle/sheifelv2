"use client"
import { Menu } from 'lucide-react'
import Link from "next/link"
import {useRef, useState} from "react"
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import {FaTelegramPlane, FaVk} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";



export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

    return (
        <motion.header
            ref={headerRef}
            className="sticky top-0 z-50 bg-gradient-to-r from-white to-blue-300 dark:from-blue-900 dark:to-blue-950"
            style={{opacity: headerOpacity}}
        >
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between text-black">
                <div className="flex items-center gap-4 md:gap-8">
                    <motion.div
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <Link
                            href={`#first`}
                            className="hover:opacity-80 transition-opacity text-lg md:text-lg font-bold"
                            aria-label='homeLogo'
                        >
                            <Image
                                src="/logo1.png"
                                alt="Logo"
                                width={70}
                                height={70}
                                className="w-14 h-14 md:w-12 md:h-12"
                            />
                        </Link>

                    </motion.div>
                    <div className="hidden md:flex items-center gap-6 ">
                        {["Прайс лист", "О нас", "Наши клиенты",  "Примеры работ"].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                            >
                                <Link
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="hover:opacity-80 transition-opacity text-lg md:text-lg font-medium"
                                    aria-label={item}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <motion.div
                        initial={{opacity: 0, x: 20}}
                        animate={{opacity: 1, x: 0}}
                        className="hidden md:flex items-center gap-3"
                    >
                        <Link href={"https://vk.com/fazisclean"}> <FaVk className="w-7 h-7"/> </Link>
                        <Link href={"https://vk.com/fazisclean"}> <FaTelegramPlane className="w-7 h-7"/> </Link>
                        <Link href={"tel:+79205936571"}> <FaPhone className="w-6 h-6"/> </Link>


                        <a href="tel:+79205936571"
                           className="hover:opacity-80 transition-opacity md:text-lg font-medium"
                           aria-label='phone'
                        >
                            +7 (920) 593-65-71
                        </a>
                    </motion.div>

                    {/*<ThemeToggle />*/}

                    <a href="tel:+79205936571" className="hover:opacity-80 text-center flex items-center justify-center gap-2 mr-10 transition-opacity md:hidden  font-bold"
                       aria-label='phone'
                    >
                        <FaPhone className="w-4 h-4"/> +7 (920) 593-65-71
                    </a>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden text-black">
                                <Menu className="h-30 w-50"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Меню</SheetTitle>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                {["Прайс лист", "О нас", "Примеры работ"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-lg hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <div className=" flex flex-col pt-4 gap-2.5 border-t">
                                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg"
                                       aria-label='phone'>
                                        <FaPhone className="w-6 h-6"/>
                                        +7 (920) 593-65-71
                                    </a>
                                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg"
                                       aria-label='vk'>
                                        <FaVk className="w-7 h-7"/>
                                        Наша группа ВК
                                    </a>
                                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg"
                                       aria-label='tg'>
                                        <FaTelegramPlane className="w-7 h-7"/>
                                        Написать в Telegram
                                    </a>

                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </motion.header>
    );
}