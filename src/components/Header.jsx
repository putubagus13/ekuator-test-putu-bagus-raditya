import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import { AiOutlinePlus } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import {IoIosArrowBack} from 'react-icons/io'
import {CiMenuKebab} from 'react-icons/ci'
import Link from 'next/link'

function Header() {
  const pathName = usePathname()

  return (
    <div className='fixed flex w-full h-[60px] px-[5%] justify-between items-center bg-[#E51C23] shadow-lg'>
      {pathName == '/' ? <div className='w-[100px h-[40px] overflow-hidden'>
        <Image className='w-full h-full object-cover' src={Logo} width={100} height={300} alt='logo'/>
      </div> : <Link href="/" className='text-white flex gap-3 items-center'>
        <IoIosArrowBack size={20} />
        <p className='text-white font-semibold text-xl'>{pathName}</p>
      </Link>}
      {/* <button className='text-white flex gap-3'>
        <IoIosArrowBack size={20} />
        <p className='text-white font-semibold text-xl'>{pathName}</p>
      </button> */}
      {pathName == '/' ? <Link href="/tambah-baru" className='flex justify-center items-center'>
        <AiOutlinePlus size={30} className='text-white'/>
      </Link> : <div className='flex justify-center items-center'>
        <CiMenuKebab size={30} className='text-white'/>
      </div>}

    </div>
  )
}

export default Header