'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { signOut } from '@/auth';
import { signOutAction } from '@/actions/auth-action';

export default function UserProfile() {
    const session=useSession();
    const imageUrl=session?.data?.user?.image
    const name=session?.data?.user?.name
    const email=session?.data?.user?.email
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
      <Button variant={'secondary'} className='flex items-center justify-start gap-1 lg:gap-2 m-0 p-0 lg:px-3 lg:w-12 bg-white'>
      {(
      <Image src={'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-1024.png'} width={25} height={25} alt={`${name} profile pic`} className='rounded-full flex items-center justify-center' />
)}
    </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className='lg:w-full px-28 flex items-center justify-center'>
          <form action={signOutAction}>
          <Button type='submit' variant={'ghost'} className='hover:text-primary'>Log Out</Button>
          </form>
          
          </DropdownMenuItem></DropdownMenuContent>
      </DropdownMenu>
    
  )
}
 