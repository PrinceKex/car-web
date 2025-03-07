'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
 const route = useRouter()
 const headerMenu = [
  {
   id: 1,
   name: 'Ride',
   icon: '/taxi.jpeg',
  },
  {
   id: 2,
   name: 'Package',
   icon: '/box.jpeg',
  },
 ]
 return (
  <div
   className='p-5 pb-3 pl-10 border-b-[4px] 
    border-gray-200 flex items-center justify-between'
  >
   <div className='flex gap-24 items-center'>
    <Image
     src='/logo.png'
     width={70}
     height={70}
     alt='Logo'
     className='cursor-pointer'
     onClick={() => route.push('/')}
    />
    <div className='flex gap-6 items-center'>
     {headerMenu.map((item) => (
      <div className='flex gap-2 items-center' key={item.id}>
       <Image src={item.icon} width={18} height={18} />
       <h2 className='text-[16px] font-semibold'>{item.name}</h2>
      </div>
     ))}
    </div>
   </div>
   <UserButton />
  </div>
 )
}

export default Header
