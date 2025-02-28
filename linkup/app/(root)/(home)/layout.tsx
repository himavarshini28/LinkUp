import React, { ReactNode } from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

const Homelayout = ({children}:{children:ReactNode}) => {
  return (
    <main className="relative">
    <Navbar/>
    <div className='flex'>
      <Sidebar/>
      <section className="flex min-h-screen flex-1 flex-col  pt-20 max-md:pb-14 sm:px-14 w-full">
          <div className="width-full px-0">
              {children}
          </div>
      </section>
    </div>
  </main>
  )
}

export default Homelayout
