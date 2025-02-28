"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
  

const MobileNav = () => {
    const path=usePathname();
  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
  <SheetTrigger asChild>
    <Image
    src="/icons/hamburger.svg"
    alt="hamburger"
    width={36}
    height={36}
    className="cursor-pointer sm:hidden"
    />
  </SheetTrigger>
  <SheetContent side="left" className="bg-dark-1 px-6 py-4 lg:px-10 border-none">
  <SheetHeader>
    <SheetTitle></SheetTitle>
  </SheetHeader>
        
        <Link href="/" >
        <SheetClose className="flex pb-5 items-center gap-1">
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt="logo"
        />
        <p className="text-[26px] font-bold text-white ">LinkUp</p>
        </SheetClose>
      </Link>
      
      <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
        <section className="flex-col  items-center gap-4">
   
          {sidebarLinks.map((link)=>
          {
            const isActive = path===link.route ||  path.startsWith(`${link.route}/`);

            return (  
                <SheetClose asChild className="flex  flex-1 gap-6" key={link.route}>
            <Link
              href={link.route}
              key={link.label}
              className={clsx('flex gap-4 items-center p-4 rounded-lg ', { 'bg-blue-600': isActive })}
            >
              <Image src={link.imgUrl}
              width={24}
              height={24}
              alt={link.label}/>
              <p className=" font-semibold text-white">{link.label}</p>
            </Link>
           </SheetClose>
            );
          })}

   
    </section>
    </div>
    </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav
