import React from 'react';
import {motion} from "framer-motion";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Car, Coins, Sofa} from "lucide-react";

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

const services = [
    {
        title: "Индивидуальный подход",
        description: "Специалист осматривает мебель, изучает наполнитель и обивку, затем подбирает средство, которое эффективно поможет удалить загрязнение, но не окажет негативного влияния на материал",
        icon: <Sofa size={40} className='text-blue-800'/>,
    },
    {
        title: "Выезд специалиста",
        description: "Мы проводим химчистку мягкой мебели с выездом на дом. Это очень удобно для наших клиентов - они могут проконтролировать работу специалистов, а также будут  уверенными, что габаритная мебель не повредится во время транспортировки.",
        icon: <Car size={40} className='text-blue-800' />,
    },
    {
        title: "Хорошая стоимость",
        description: "Подобные услуги пользуются большим спросом, мы это понимаем, и не ставим на химчистку мягкой мебели цены непосильные обычному жителю Белгорода",
        icon: <Coins size={40} className='text-blue-800'/>,
    },

]


const About = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            variants={staggerContainer}
            id="о-нас"
            className="container mx-auto px-4 py-16"
        >
            <motion.div variants={fadeIn} className='flex justify-center items-center flex-col'>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">ПОЧЕМУ ИМЕННО МЫ?</h2>
                <p className="px-6 text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Мы используем только профессиональную химию и качественное оборудование
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        variants={fadeIn}
                        whileHover={{scale: 1.02}}
                        transition={{duration: 0.2}}
                    >
                        <Card className="h-full transition-shadow hover:shadow-lg">
                            <CardHeader>
                                <div className='flex gap-8 items-center justify-center'>
                                    <CardTitle className="text-lg">{service.title}</CardTitle>
                                    {service.icon}
                                    {/*<Image src={service.icon || "/placeholder.svg"} alt="" width={48} height={48} />*/}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default About;