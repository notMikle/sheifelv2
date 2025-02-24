'use client'
import {motion} from "framer-motion";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

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
const clients = [
    {
        name: "Альфа-банк",
        logo: "/1.png",
    },
    {
        name: "МегаГринн",
        logo: "/5.png",
    },
    {
        name: "Лес&Лис",
        logo: "/3.png",
    },
    {
        name: "Газпромбанк",
        logo: "/4.png",
    },
    {
        name: "Ресторан Камчатка",
        logo: "/kamchatka.png",
    },{
        name: "Атлетик.про",
        logo: "/athletic.png",
    },
]


 const Clients: React.FC = () => {
    // const [api, setApi] = useState<any>()
    // const [current, setCurrent] = useState(0)
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     if (!api) return
    //
    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)
    //
    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    //
    //     // Auto-scroll
    //     const autoScroll = setInterval(() => {
    //         api.next()
    //     }, 2000)
    //
    //     return () => clearInterval(autoScroll)
    // }, [api])
    return (
        <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            variants={staggerContainer}
            id="наши-клиенты"
            className="container mx-auto px-4 py-16 text-center"
        >
            <motion.div variants={fadeIn}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">НАШИ КЛИЕНТЫ</h2>
                <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Все больше компаний выбирает наши услуги и нас в качестве постоянных партнёров
                </p>
            </motion.div>

            <Carousel
                // setApi={setApi}
                className="w-full max-w-5xl mx-auto"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {clients.map((client) => (
                        <CarouselItem key={client.name} className="basis-1/2 md:basis-1/2 lg:basis-1/4">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image
                                            src={client.logo || "/placeholder.svg"}
                                            alt={client.name}
                                            width={120}
                                            height={60}
                                            className="w-full h-auto transition-opacity hover:opacity-80"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden md:block'/>
                <CarouselNext className='hidden md:block'/>

            </Carousel>
        </motion.section>

    );
}
export default Clients