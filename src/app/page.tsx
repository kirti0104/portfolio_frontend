/* eslint-disable react/no-unescaped-entities */

import Header from '@/components/Header';
import './globals.css'

export default function Home() {
 return (
  <>
   <Header/>
  <main className="min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center">
      <h1 className="text-4xl font-bold text-blue-900">Hello,  I'm Kirti</h1>
      <p className="text-lg mt-2">Welcome to my portfolio</p>
    </main>
  </>
    
  );
}
