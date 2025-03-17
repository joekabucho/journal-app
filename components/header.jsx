import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SignInButton,SignUpButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'



const Header = () => {
  return <header className='container mx-auto'>
    <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href="/">
        <Image src={"/logo.png"} alt='Shajara Logo' width={125} height={20}
        className='h=10 w-auto object-contain'
        />
        </Link>


        <div className='flex items-center gap-4'>
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

        </div>
     
    </nav>
  </header>
}

export default Header