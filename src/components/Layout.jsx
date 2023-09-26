import React from 'react'
import Header from './Header'
import Image from 'next/image'
import Pokemon from '@/assets/pokemon.png'
import propTypes from "prop-types"

function Layout({children}) {
  return (
    <div className='w-full h-full bg-white'>
        <Header />
        <div className='px-[10%] py-24 w-full h-full'>
            <div className='flex w-full gap-10'>
                <div className='w-[300px] flex flex-col gap-6 items-center'>
                    <div className='w-[200px] h-[200px] rounded-full shadow-lg bg-white overflow-hidden justify-center items-center p-10'>
                        <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                    </div>
                    <button className='text-red-400 font-semibold'>Tambahkan Image</button>
                </div>
                <div className='flex-1 w-full h-full flex'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

Layout.propTypes = {
    children: propTypes.element
}

export default Layout