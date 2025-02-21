"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import axios from "axios";

interface Service {
  id: string
  title: string
  icon: string
  pricePerUnit: number
}

const services: Service[] = [
  { id: "window1", title: "Диван двухместный", icon: "/div2.jpeg", pricePerUnit: 2000 },
  { id: "window2", title: "Диван трехместный", icon: "/div3.jpeg", pricePerUnit: 2500 },
  { id: "balcony", title: "Диван угловой", icon: "/div444.jpeg", pricePerUnit: 2500 },
  { id: "fridge", title: "Кресло", icon: "/kreslo.jpeg", pricePerUnit: 500 },
  { id: "oven", title: "Стул", icon: "/styl3.jpeg", pricePerUnit: 300 },
  { id: "microwave", title: "Подушка", icon: "/podushka.jpeg", pricePerUnit: 400 },
  { id: "iron", title: "Матрас", icon: "/matras.jpeg", pricePerUnit: 1500 },
  { id: "stove", title: "Ковер или ковролин за м²", icon: "/kover2.jpeg", pricePerUnit: 300 },
]

 const  Calculator=()=> {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(services.map((service) => [service.id, 0])),
  )
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalPrice = Object.entries(quantities).reduce((total, [serviceId, quantity]) => {
    const service = services.find((s) => s.id === serviceId)
    return total + (service?.pricePerUnit || 0) * quantity
  }, 0)

  const handleQuantityChange = (serviceId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [serviceId]: Math.max(0, (prev[serviceId] || 0) + delta),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const token = '7798116161:AAEp6GvvLoLuPbytzNACkqvHwTn_xeRgl-Y'


    // Here you would typically send the data to your backend
    console.log({
      services: Object.entries(quantities)
        .filter(([_, quantity]) => quantity > 0)
        .map(([serviceId, quantity]) => ({
          service: services.find((s) => s.id === serviceId)?.title,
          quantity,
        })),
      totalPrice,
      ...formData,

    })
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: '347996326',
      parse_mode: 'html',
      text: `
            На сайте оставили заявку!
            Имя: ${formData.name} 
            Телефон: ${formData.phone} 
            Заказ: 
            Сумма: ${totalPrice}
            Химчистка: ${Object.entries(quantities)
            .filter(([_, quantity]) => quantity > 0)
            .map(([serviceId, quantity]) => ({
             service: services.find((s) => s.id === serviceId)?.title,
             quantity,
             })).reduce((acc,item)=>item.service + ' - ' + item.quantity +'; ' + acc,'')}
            `
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form or show success message
  }

  return (
    <section className="py-12 md:py-16 px-4  dark:bg-gray-900" id="прайс-лист">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Services Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Card key={service.id} className="bg-white dark:bg-gray-800">
                <CardContent className="p-3 md:p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <img src={service.icon || "/placeholder.svg"} alt="" className="w-120 h-120 md:w-160 md:h-160 mb-2" />
                    <p className="text-lg md:text-sm font-medium">{service.title}</p>
                    <div >
                      <div className='font-bold'>
                        {service.pricePerUnit} руб.
                      </div>
                      <div className="flex items-center gap-3 md:gap-4 mt-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(service.id, -1)}
                            disabled={quantities[service.id] === 0}
                            aria-label='decrement'
                        >
                          <Minus className="h-3 w-3 md:h-4 md:w-4" />
                        </Button>
                        <span className="w-6 md:w-8 text-center">{quantities[service.id]}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(service.id, 1)}
                            aria-label='increment'
                        >
                          <Plus className="h-3 w-3 md:h-4 md:w-4" />
                        </Button>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calculator Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-4 md:p-6">
                <p className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
                  Примерная стоимость уборки для вас:
                </p>
                <p className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6 md:mb-8">
                  {totalPrice} руб.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Ваше имя:</label>
                    <Input
                        id='name'
                      required
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Ваш телефон:</label>
                    <Input
                        id='phone'
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-600 text-white py-2 md:py-3 text-sm md:text-base"
                    disabled={isSubmitting}
                    aria-label='submit'
                  >
                    {isSubmitting ? "Отправка..." : "Получить бонус и узнать точную стоимость"}
                  </Button>
                  <p className="text-xs md:text-sm text-center text-gray-600 dark:text-gray-400">
                    *Сильные загрязнения рассчитываются индивидуально
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Calculator