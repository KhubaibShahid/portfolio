"use client";

import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import Image from 'next/image';
import LOGO from "../assests/Untitled_design-removebg-preview.png"
import { usePathname } from 'next/navigation';


function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavApp() {

  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/', current: pathname == "/" ? true : false },
    { name: 'About', href: '/about', current:pathname == "/about" ? true : false },
    { name: 'Contact', href: '/contact', current: pathname == "/contact" ? true : false },
    { name: 'Projects', href: '/projects', current: pathname == "/projects" ? true : false },
    
  ]
  return (
    <Disclosure as="nav" className="bg-[#000] bg-opacity-50 backdrop-blur-md h-[90px] w-full max-w-[1440px] mx-auto z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 py-5 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <LuMenu aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <MdOutlineClose aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center py-5">
            <div className="flex shrink-0 items-center">
              <Image className="rotate-45" width={50} alt="logo" src={LOGO}></Image>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-[#35c0d8]' : 'text-gray-300 hover:text-[#35c0d8]',
                      'rounded-md px-3 py-2 text-md',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Profile dropdown */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-[#35c0d8]' : 'text-gray-300 hover:text-[#35c0d8]' ,
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
