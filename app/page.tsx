'use client'
import { Calculator } from "@/components/calculator"
import {Header} from "@/components/header";
import Main from "@/components/main";
import About from "@/components/about";
import {Clients} from "@/components/clients";
import {Footer} from "@/components/footer";
import {Examples} from "@/components/examples";



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

