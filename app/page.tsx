'use client'
import {Header} from "@/components/header";
import dynamic from 'next/dynamic'



const Main = dynamic(() => import('@/components/main'), { ssr: false })
const Calculator = dynamic(() => import('@/components/Calculator'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
const Examples = dynamic(() => import('@/components/Examples'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
export default function Home() {


  return (
    <main className="bg-background text-foreground">
    <Header/>
      <Main/>
      <Calculator />
      <About/>
      <Clients/>
      <Examples/>
      <Footer/>
    </main>
  )
}

