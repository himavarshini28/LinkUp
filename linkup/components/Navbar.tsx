"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          LinkUp
        </p>
      </Link>
      <div className="flex items-center gap-4">
      <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 min-w-[90px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition whitespace-nowrap">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition whitespace-nowrap">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
