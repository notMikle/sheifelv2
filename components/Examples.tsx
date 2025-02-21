import { ImageComparison } from "@/components/image-comparison";
import {motion} from "framer-motion";



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
const examples = [
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/1.1.jpg",
        afterImage: "/1.jpg",
    },
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/2.1.jpg",
        afterImage: "/2.jpg",
    },
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/3.1.jpg",
        afterImage: "/3.jpg",
    },
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/4.1.jpg",
        afterImage: "/4.jpg",
    },
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/5.1.jpg",
        afterImage: "/5.jpg",
    },
    {
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/6.1.jpg",
        afterImage: "/6.jpg",
    },{
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/7.1.jpg",
        afterImage: "/7.jpg",
    },{
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/8.1.jpg",
        afterImage: "/8.jpg",
    },{
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/9.1.jpg",
        afterImage: "/9.jpg",
    },{
        title: "Химчистка дивана",
        description: "Удаление сложных пятен и загрязнений с мягкой мебели",
        beforeImage: "/10.1.jpg",
        afterImage: "/10.jpg",
    },
]

 const Examples: React.FC = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            variants={staggerContainer}
            id="примеры-работ"
            className="container mx-auto px-4 py-16"
        >
            <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">ПРИМЕРЫ РАБОТ</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Наши специалисты выполняют работу качественно и в срок. Посмотрите результаты до и после.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
                {examples.map((example) => (
                    <motion.div
                        key={example.title}
                        variants={fadeIn}
                        whileHover={{scale: 1.02}}
                        transition={{duration: 0.2}}
                    >
                        <ImageComparison {...example} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
export default Examples