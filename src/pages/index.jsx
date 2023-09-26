import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Pokemon from '@/assets/pokemon.png'
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='w-full h-full bg-white'>
        <Header />
        <div className='px-[10%] py-24 w-full h-full'>
          <div className='grid grid-cols-4 w-full gap-5'>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 w-[230px] h-[300px] bg-secondary shadow-lg rounded-xl p-5'>
              <p className='text-gray-500 text-lg font-semibold'>#1</p>
              <div className='w-full flex justify-center'>
                  <div className='w-[130px] h-[130px] overflow-hidden'>
                    <Image src={Pokemon} className='w-full h-full object-contain' alt='pokemon'/>
                  </div>
              </div>
              <h1 className='text-xl font-bold text-primary w-full text-center'>Bulbasur</h1>
              <div className='flex gap-3 w-full justify-center'>
                <div className='h-[40px] w-[60px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                      Grass
                  </div>
                  <div className='h-[40px] w-[60px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                      Poison
                  </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home