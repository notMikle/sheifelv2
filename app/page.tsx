"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Sofa, Car, Coins} from 'lucide-react'
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ImageComparison } from "@/components/image-comparison"
import { Calculator } from "@/components/calculator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {FaTelegramPlane, FaVk} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa6';
import { Separator } from "@radix-ui/react-context-menu"

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
]

const examples = [
  {
    title: "Химчистка дивана",
    description: "Удаление сложных пятен и загрязнений с мягкой мебели",
    beforeImage: "/div2.jpeg",
    afterImage: "/div3.jpeg",
  },
  {
    title: "Уборка помещения",
    description: "Комплексная уборка квартиры после ремонта",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Мойка окон",
    description: "Профессиональная мойка окон и витрин",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const headerRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

    // Auto-scroll
    const autoScroll = setInterval(() => {
      api.next()
    }, 5000)

    return () => clearInterval(autoScroll)
  }, [api])

  return (
    <main className="bg-background text-foreground">
      <motion.header
        ref={headerRef}
        className="sticky top-0 z-50 bg-gradient-to-r from-white to-blue-300 dark:from-blue-900 dark:to-blue-950"
        style={{ opacity: headerOpacity }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between text-black">
          <div className="flex items-center gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/logo1.png"
                alt="Logo"
                width={70}
                height={70}
                className="w-14 h-14 md:w-12 md:h-12"
              />
            </motion.div>
            <div className="hidden md:flex items-center gap-6 ">
              {[ "Прайс лист", "Наши клиенты", "Примеры работ"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:opacity-80 transition-opacity text-lg md:text-lg font-bold"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-3"
            >
              <FaVk className="w-7 h-7"/>
              <FaTelegramPlane className="w-7 h-7"/>
              <FaPhone className="w-6 h-6" />
              <a href="tel:+79205936571" className="hover:opacity-80 transition-opacity md:text-lg font-bold">
                +7 (920) 593-65-71
              </a>
            </motion.div>

            {/*<ThemeToggle />*/}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden text-black">
                  <Menu className="h-20 w-20" />
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
                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg">
                      <FaPhone className="w-6 h-6" />
                      +7 (920) 593-65-71
                    </a>
                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg">
                      <FaVk className="w-7 h-7"/>
                      Наша группа ВК
                    </a>
                    <a href="tel:+79205936571" className="flex items-center gap-2 text-lg">
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

      <section className="bg-gradient-to-r from-white to-blue-300 dark:from-blue-900 dark:to-blue-950 flex justify-between items-center flex-wrap md:flex-nowrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto   md:px-10 text-black"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6">Fazis Clean</h1>
          <p className="text-2xl md:text-2xl max-w-2xl">Профессиональная химчистка мебели в Белгороде
            по доступным ценам</p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="container md:py-24 text-black"
        >
          <Image src="/div2home.png" alt="" width={680} height={680}  />
        </motion.div>
      </section>
      <Calculator />

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        id="about"
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
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

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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
          setApi={setApi}
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

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example) => (
            <motion.div
              key={example.title}
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <ImageComparison {...example} />
            </motion.div>
          ))}
        </div>
      </motion.section>



      <footer className="bg-gradient-to-r from-white to-blue-300 dark:from-blue-900 dark:to-blue-950">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 py-12"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div variants={fadeIn}>
              <Image src="/logo1.png" alt="Logo" width={40} height={40} className="mb-4" />
              <p>г. Белгород</p>
              <p>ежедневно с 8:00 до 24:00</p>
              <div className="mt-4">
                <a href="tel:+79205936571" className="text-xl font-semibold hover:opacity-80 transition-opacity">
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
                  <Link key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-80 transition-opacity">
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
          <Separator />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">© notMikle {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  )
}

