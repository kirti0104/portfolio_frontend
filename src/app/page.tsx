 

import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Main from "@/components/main";



export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-left px-8 pt-32">
        <Main/>
        <About/>
        <Contact/>       
       </main>
    </>
  );
}
