"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/krishigyanai-logo.png";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav className="bg-white shadow fixed top-0 left-0 w-full z-40">
        <div className="flex items-center justify-between h-20 w-full px-4 lg:px-12">
          <div className="flex items-center gap-10">
            <Link href={"/"} className="">
              <Image src={logo} width={48} height={48} alt="main logo" />
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive ? "text-primary font-semibold" : "text-textColor"
                    } inline-flex items-center px-1 pt-1 text-[14px] hover:text-primary font-medium transition-colors duration-300 uppercase`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <aside
          className={`sm:hidden fixed top-[0px] left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 bg-white text-white ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-start items-start w-full relative">
            <div
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="size-5 text-black font-semibold" />
            </div>
            <div className="py-4 px-3">
              <Image src={logo} width={48} height={48} alt="main logo" />
            </div>
            <div className="h-full px-3 py-4 overflow-y-auto w-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${
                      isActive ? "text-primary" : "text-black"
                    } block px-3 py-2 rounded-md text-lg font-semibold transition-colors`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-5 backdrop-filter backdrop-blur-sm lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </nav>
    </div>
  );
}
