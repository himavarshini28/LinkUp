"use client"
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants'
import clsx from 'clsx';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const path=usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col flex-1 gap-6">
          {sidebarLinks.map((link)=>
          {
            const isActive = path===link.route ||  path.startsWith(`${link.route}/`);

            return (  
            <Link
              href={link.route}
              key={link.label}
              className={clsx('flex gap-4 items-center p-4 rounded-lg justify-start', { 'bg-blue-600': isActive })}
            >
              <img src={link.imgUrl}
              alt={link.label}/>
              <p>{link.label}</p>
            </Link>);
          })}
      </div>

    </section>
  );
};

export default Sidebar;


