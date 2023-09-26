import Layout from '@/components/Layout'
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Select from 'react-select'
import {useState} from 'react'
import Image from 'next/image'
import Pokemon from '@/assets/pokemon.png'
import Head from 'next/head'
import Type from '../../../public/type.json'
import Clasification from '../../../public/clasification'

function TambahBaru() {
    const [type, setType] = useState([]);
    const [name, setName] = useState('')
    const [clasification, setClasification] = useState('')
    const [resistant, setResistant] = useState([])

    const optionsType = Type.map(type => {
        const inputValue = {...type, value: type.name, label: type.name}
        return inputValue
    })

    const optionsClasification = Clasification.map(clasification => {
        const inputValue = {value: clasification, label: clasification}
        return inputValue
    })

    const handleType = async (selected, selectaction) => {
        const { action } = selectaction;
        if (action === "clear") {
        } else if (action === "select-option") {
        } else if (action === "remove-value") {
          console.log("remove");
        }
        setType(selected);
    };
    
    const handleResistant = async (selected, selectaction) => {
        const { action } = selectaction;
        if (action === "clear") {
        } else if (action === "select-option") {
        } else if (action === "remove-value") {
          console.log("remove");
        }
        setResistant(selected);
    };
    const handleClasification = async (selected, selectaction) => {
        const { action } = selectaction;
        if (action === "clear") {
        } else if (action === "select-option") {
        } else if (action === "remove-value") {
          console.log("remove");
        }
        setClasification(selected);
    };
  return (
   <>
        <Head>
            <title>Tamabhkan Baru</title>
        </Head>
        <Layout>
            <form className='w-full h-full flex flex-col gap-6'>
                <div className='w-full h-full rounded-xl shadow-xl p-[5%]'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-red-500 font-semibold text-xl'>Informasi Umum</h1>
                        <p className='text-gray-500'>Nomer</p>
                        <span className='text-xl text-black font-semibold'>#16</span>
                    </div>
                    <div className='w-full flex flex-col gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-md font-semibold text-gray-400">Name</span>
                            </label>
                            <input 
                                type="text" 
                                name='name'
                                placeholder="" 
                                className="input w-full bg-red-200 rounded-none h-9 text-black"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-md font-semibold text-gray-400">Type</span>
                            </label>
                            <Select
                                id="type"
                                instanceId="type"
                                isMulti
                                name="colors"
                                className="basic-multi-select bg-red-200 text-black"
                                classNamePrefix="select"
                                options={optionsType}
                                onChange={handleType}
                                placeholder=""
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-md font-semibold text-gray-400">Clasification</span>
                            </label>
                            <Select
                                id="type"
                                instanceId="type"
                                isMulti
                                name="colors"
                                className="basic-multi-select text-black"
                                classNamePrefix="select"
                                options={optionsClasification}
                                onChange={handleClasification}
                                placeholder=""
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-md font-semibold text-gray-400">Resistant</span>
                            </label>
                            <Select
                                id="type"
                                instanceId="type"
                                isMulti
                                name="colors"
                                className="basic-multi-select text-black"
                                classNamePrefix="select"
                                options={optionsType}
                                onChange={handleResistant}
                                placeholder=""
                            />
                        </div>
                    </div>
                </div>
                <div className='p-[5%] rounded-xl w-full h-full flex flex-col gap-3 justify-center items-center shadow-lg'>
                    <div className='w-full h-full'>
                        <h1 className='text-red-500 font-semibold text-xl'>Evolution</h1>
                    </div>
                    <label className="btn btn-error text-white bg-[#E51C23] normal-case w-full outline-lime-50" onClick={()=>document.getElementById('my_modal_1').showModal()}>
                        <AiOutlinePlus size={20}/>
                        Tambah
                    </label>
                    <div className='w-full h-full flex rounded-xl shadow-lg bg-red-50 items-center justify-between px-6 py-3'>
                        <div className='flex gap-10'>
                            <div className='w-[100px] h-[100px] overflow-hidden p-3'>
                                <Image src={Pokemon} className='object-cover' alt='pokemon'/>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p className='text-lg text-gray-500 font-semibold'>#1</p>
                                <p className='text-xl text-[#E51C23] font-bold'>Bulbasaur</p>
                                <div className='flex gap-5'>
                                    <div className='h-[40px] w-[70px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                                        Grass
                                    </div>
                                    <div className='h-[40px] w-[70px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                                        Poison
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box bg-white flex flex-col gap-4">
                            <h3 className="font-bold text-xl text-[#E51C23] w-full text-center">Tambah Evolusi</h3>
                            <div className='w-full h-full flex flex-col gap-3'>
                                <div className='w-full h-full flex rounded-xl shadow-lg bg-red-50 items-center justify-between px-6 py-3 gap-3'>
                                    <div className='flex gap-3'>
                                        <div className='w-[100px] h-[100px] overflow-hidden p-3'>
                                            <Image src={Pokemon} className='object-cover' alt='pokemon'/>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <p className='text-lg text-gray-500 font-semibold'>#1</p>
                                            <p className='text-xl text-[#E51C23] font-bold'>Bulbasaur</p>
                                            <div className='flex gap-5'>
                                                <div className='h-[40px] w-[70px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                                                    Grass
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="checkbox" className="checkbox checkbox-error rounded-full" />
                                </div>
                                <div className='w-full h-full flex rounded-xl shadow-lg bg-red-50 items-center justify-between px-6 py-3 gap-3'>
                                    <div className='flex gap-3'>
                                        <div className='w-[100px] h-[100px] overflow-hidden p-3'>
                                            <Image src={Pokemon} className='object-cover' alt='pokemon'/>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <p className='text-lg text-gray-500 font-semibold'>#1</p>
                                            <p className='text-xl text-[#E51C23] font-bold'>Bulbasaur</p>
                                            <div className='flex gap-5'>
                                                <div className='h-[40px] w-[70px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                                                    Grass
                                                </div>
                                                <div className='h-[40px] w-[70px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                                                    Poison
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="checkbox" className="checkbox checkbox-error rounded-full" />
                                </div>
                                <div className='w-full h-full flex rounded-xl shadow-lg bg-red-50 items-center justify-between px-6 py-3 gap-3'>
                                    <div className='flex gap-3'>
                                        <div className='w-[100px] h-[100px] overflow-hidden p-3'>
                                            <Image src={Pokemon} className='object-cover' alt='pokemon'/>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <p className='text-lg text-gray-500 font-semibold'>#1</p>
                                            <p className='text-xl text-[#E51C23] font-bold'>Bulbasaur</p>
                                            <div className='flex gap-5'>
                                                <div className='h-[40px] w-[70px] bg-green-500 text-white rounded-lg flex justify-center items-center'>
                                                    Grass
                                                </div>
                                                <div className='h-[40px] w-[70px] bg-fuchsia-700 text-white rounded-lg flex justify-center items-center'>
                                                    Poison
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="checkbox" className="checkbox checkbox-error rounded-full" />
                                </div>
                            </div>
                            <div className="modal-action w-full">
                                <div method="dialog" className='flex gap-3 w-full justify-center'>
                                    <label className="btn btn-secondary border-red-500 text-red-500 normal-case">Batal</label>
                                    <button className="btn btn-primary text-white normal-case">Tambah</button>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div className='px-5% w-full h-full flex gap-5 justify-end'>
                    <label className='btn btn-secondary normal-case border-primary text-primary w-24'>Batal</label>
                    <button disabled={false} type='submit' className='btn btn-primary normal-case text-white w-24'>Tambah</button>
                </div>
            </form>
        </Layout>
   </>
  )
}

export default TambahBaru